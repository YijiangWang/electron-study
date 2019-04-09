const {app, BrowserWindow} = require('electron');

const createWindow = () => {
  // 创建浏览器窗口
  let win = new BrowserWindow({width: 360, height: 600});
  win.loadURL('https://www.baidu.com');
}

app.on('ready', createWindow);