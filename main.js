const { app, BrowserWindow } = require('electron');

const CreateWindow = () => {
  const window = new BrowserWindow({
    width: 800,
    height: 600,
  });

  window.loadFile('index.html');
};
