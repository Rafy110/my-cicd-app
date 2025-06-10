const fs = require('fs');
const path = require('path');

function runSimpleTest() {
    const filePath = path.join(__dirname, 'index.html');
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        if (content.includes('Hello, CI/CD World! This is an automatic deployment!')) {
            console.log('Test passed: index.html contains the expected greeting.');
            return true;
        } else {
            console.error('Test failed: index.html does not contain the expected greeting.');
            return false;
        }
    } catch (error) {
        console.error('Test failed: Could not read index.html.', error);
        return false;
    }
}

if (runSimpleTest()) {
    process.exit(0); // Exit with success
} else {
    process.exit(1); // Exit with failure
}