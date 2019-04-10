const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

// 定义一个全局的 window
let win;

const createWindow = () => {
  //创建窗口
  win = new BrowserWindow({ width: 600, height: 600, show: false });

  // 设置缩略图工具栏
  win.setThumbarButtons([
    {
      tooltip: "button1",
      icon: path.join(__dirname, 'file.png'),
      click: function () { 
        console.log("button1 clicked"); 
        win.setRepresentedFilename('/test.html');
        win.setDocumentEdited(true);
      }
    },
    {
      tooltip: "button1",
      icon: path.join(__dirname, 'audio.png'),
      click: function () { console.log("button2 clicked"); }
    }
  ]);

  // 设置进度条工具栏
  win.setProgressBar(0.3);

  win.loadFile('index.html');
  // 打开开发者工具
  win.webContents.openDevTools();

  win.on('closed', () => {
    win = null;
  })

}

app.on('ready', () => {
  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
})

