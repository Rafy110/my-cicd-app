const fs = require('fs');
const path = require('path');

function runSimpleTest() {
    const filePath = path.join(__dirname, 'index.html');
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        console.log('--- Content of index.html being tested by test.js ---');
        console.log(content); // <-- ADD THIS LINE
        console.log('----------------------------------------------------');

        // Find the EXACT string you expect from your index.html's <h1> tag.
        // Copy it precisely from your *local* index.html right now.
        const expectedGreeting = 'Hello, CI/CD World! This is an automatic deployment!'; // <--- ENSURE THIS EXACTLY MATCHES YOUR index.html
        // If you added an extra exclamation mark or changed it, make sure this reflects it.

        if (content.includes(expectedGreeting)) {
            console.log('Test passed: index.html contains the expected greeting.');
            return true;
        } else {
            console.error(`Test failed: index.html does not contain the expected greeting.`);
            console.error(`Expected: "${expectedGreeting}"`);
            console.error(`Actual content snippet (around h1): "${content.substring(content.indexOf('<h1'), content.indexOf('</h1>') + 50)}"`); // Added more info
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