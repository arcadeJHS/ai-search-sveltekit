import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the current file path and directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceDir = path.resolve(__dirname, 'dist-web-components');
const targetDir = path.resolve(__dirname, 'DEMO');

// Autopublish to local stagend website. Customize your folder path
const stagendWebsiteJsDir = '/Users/jhs/EXMACHINA/stg-dockerized/stg-service/web/js/lib/ai-search';
const stagendWebsiteCssDir = '/Users/jhs/EXMACHINA/stg-dockerized/stg-service/web/css';

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

        if (entry.isDirectory()) {
            copyFiles(srcPath, jsDestDir, cssDestDir);
        } else {
            const ext = path.extname(entry.name);
            if (ext === '.js') {
                fs.copyFileSync(srcPath, jsDestPath);
                console.log(`Copied ${entry.name} from ${srcDir} to ${jsDestDir}`);
            } else if (ext === '.css' && cssDestDir && cssDestPath) {
                fs.copyFileSync(srcPath, cssDestPath);
                console.log(`Copied ${entry.name} from ${srcDir} to ${cssDestDir}`);
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