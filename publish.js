import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

// Get the current file path and directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceDir = path.resolve(__dirname, 'dist-web-components');
const targetDir = path.resolve(__dirname, 'DEMO');

// Autopublish to local stagend website. Customize your folder path
const stagendWebsiteJsDir = '/Users/jhs/EXMACHINA/stg-dockerized/stg-service/web/js/lib/ai-search';
const stagendWebsiteCssDir = '/Users/jhs/EXMACHINA/stg-dockerized/stg-service/web/css';

// Do not copy these files
const filesToSkipCopy = ['mockServiceWorker.js'];

// Remove old files, except "index.html"
function emptyDirExceptIndex(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filePath = path.join(dir, file);
        if (fs.lstatSync(filePath).isFile() && file !== 'index.html') {
            fs.unlinkSync(filePath);
            console.log(`Deleted ${file} from ${dir}`);
        }
    }
}

// Executes, on each .js file, terser minification and mangleification
// npx terser ai.search.web.components.es.js -o ai.search.web.components.es.min.js --compress --mangle
function minifyJsFile(filePath) {
    const minifiedFilePath = filePath.replace('.js', '.min.js');
    execSync(`npx terser ${filePath} -o ${minifiedFilePath} --compress --mangle`);
    console.log(`Minified ${filePath} to ${minifiedFilePath}`);
    return minifiedFilePath;
}

function copyFiles(srcDir, jsDestDir, cssDestDir) {
    if (!fs.existsSync(jsDestDir)) {
        fs.mkdirSync(jsDestDir, { recursive: true });
    } else {
        emptyDirExceptIndex(jsDestDir);
    }

    if (cssDestDir && !fs.existsSync(cssDestDir)) {
        fs.mkdirSync(cssDestDir, { recursive: true });
    }

    const entries = fs.readdirSync(srcDir, { withFileTypes: true });

    for (let entry of entries) {
        const srcPath = path.join(srcDir, entry.name);
        const jsDestPath = path.join(jsDestDir, entry.name);
        const cssDestPath = cssDestDir ? path.join(cssDestDir, entry.name) : null;

        if (!entry.isDirectory() && filesToSkipCopy.includes(entry.name)) {
            console.log(`Skipping ${entry.name}`);
            continue;
        }

        if (entry.isDirectory()) {
            copyFiles(srcPath, jsDestDir, cssDestDir);
        } else {
            const ext = path.extname(entry.name);

            if (ext === '.js' && !entry.name.endsWith('.min.js')) {
                const minifiedSrcPath = minifyJsFile(srcPath);
                fs.copyFileSync(minifiedSrcPath, jsDestPath.replace('.js', '.min.js'));
                console.log(`Copied ${minifiedSrcPath} to ${jsDestPath.replace('.js', '.min.js')}`);
            } else if (ext === '.css' && cssDestPath) {
                fs.copyFileSync(srcPath, cssDestPath);
                console.log(`Copied ${srcPath} to ${cssDestPath}`);
            }
        }
    }
}

console.log(`
#############################
### Copying files - BEGIN ###
#############################
`);

copyFiles(sourceDir, targetDir, targetDir);
copyFiles(sourceDir, stagendWebsiteJsDir, stagendWebsiteCssDir);

console.log(`
#############################
### Copying files - END   ###
#############################
`);