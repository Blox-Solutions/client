const { app, BrowserWindow } = require('electron');
const path = require('path');

const createWindow = () => {
    
    const window = new BrowserWindow({
        width:1280,
        height:720,
    });

    webPreferences: {
        preload: path.join(__dirname, 'preload.js');
    };

    window.loadFile("index.html");

};

app.whenReady().then(() => {
    try {
        createWindow();
    }
    catch (e) {
        Rollbar.error("Something went wrong", e);
        console.log("something is wrong",e);
    }

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
          createWindow();
        }
    });
});


app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});