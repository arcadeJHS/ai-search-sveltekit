import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the current file path and directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceDir = path.resolve(__dirname, 'dist-web-components');
const targetDir = path.resolve(__dirname, 'DEMO');

// Autopublish to local stagend website. Customize your folder path
const stagendWebsiteDir = '/Users/jhs/EXMACHINA/stg-dockerized/stg-service/web/js/lib/ai-search';

function copyFiles(srcDir, destDir) {
    if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true });
    }

    const entries = fs.readdirSync(srcDir, { withFileTypes: true });

    for (let entry of entries) {
        const srcPath = path.join(srcDir, entry.name);
        const destPath = path.join(destDir, entry.name);

        if (entry.isDirectory()) {
            copyFiles(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    }
}

copyFiles(sourceDir, targetDir);
copyFiles(sourceDir, stagendWebsiteDir);
console.log(`Files copied from ${sourceDir} to ${targetDir}`);
