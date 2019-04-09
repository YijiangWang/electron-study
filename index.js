const {app, BrowserWindow} = require('electron');

// 定义一个全局的 window
let win;

const createWindow = () => {
  win = new BrowserWindow({width: 600, height: 600});

  win.loadFile('index.html');
  // 打开开发者工具
  win.webContents.openDevTools();

  win.on('closed', () => {
    win = null;
  })
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if(process.platform !== 'darwin'){
    app.quit();
  }
})

app.on('activate', () => {
  if(win === null){
    createWindow();
  }
})