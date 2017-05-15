# simple-autoreload-browser
A simple autoreload script with no project build configuration needed.

### Setup
#### Client
Paste snippet from `browser.js` in your index.html file.

You can run `git update-index --assume-unchanged <path/to/yourfile>` to ignore the changes.

#### Server
1. Clone repo
2. Run `npm i`
3. Specify folder to watch in index.js
4. Start server `node index.js`

The browser will reload when you save!
