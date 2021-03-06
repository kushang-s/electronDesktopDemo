'use strict';

// Module to control application life.
import {
  app,
  BrowserWindow,
} from 'electron';

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
var mainWindow: BrowserWindow;

app.on('ready', function() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    name: "Demo App",
    width: 900,
    height: 700,
    frame: true,
    resizable: true
  });

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

  // // and load the index.html of the app.
  mainWindow.loadURL('file://' + __dirname + '/index.html');

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
    app.quit();
  });
});
