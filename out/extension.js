const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  console.log('Congratulations, your extension "diamondback" is now active!');
  // Here, you can implement the logic of your extension
}

function deactivate() {}

module.exports = {
  activate,
  deactivate
};
