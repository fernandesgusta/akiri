// main.js

import path from "node:path";
// Modules to control application life and create native browser window
import { BrowserWindow, app, ipcMain } from "electron";

const MODE = 'development'

const createWindow = () => {
    const mainWindow = new BrowserWindow({
        width: 1032,
        height: 620,
        titleBarStyle: "hidden",
        webPreferences: {
        preload: path.join(import.meta.dirname, "preload.js"),
        },
    });

    // mainWindow.loadFile("./dist/index.html"); // i think that this will work better in production mode
    mainWindow.loadURL('http://localhost:5173')

    ipcMain.handle('close-window', () => mainWindow.close())
    ipcMain.handle('toggle-maximize-window', () => mainWindow.isMaximized() ? mainWindow.restore() : mainWindow.maximize())
    ipcMain.handle('minimize-window', () => mainWindow.minimize())
};

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});


