# electron-study
The way to learn electron.

### 主进程和渲染进程
##### 主进程
 - package.json 里 main 脚本的进程被称为主进程；
##### 渲染进程
 - 由于 Electron 使用 Chromium 来展示页面，Chromium 的多进程结构也被充分利用。每个 Electron 的页面都在运行着自己的进程，这样的进程我们称之为渲染进程
##### 区别与联系
 - 主进程使用 BrowserWindow 实例创建网页。每个 BrowserWindow 实例都在自己的渲染进程里运行着一个网页。当一个 BrowserWindow 实例被销毁后，相应的渲染进程也会被终止。
 - 如果你想在网页里使用 GUI 操作，其对应的渲染进程必须与主进程进行通讯，请求主进程进行相关的 GUI 操作。
 ##### 通信
 - 主进程：ipcMain；
 - 渲染器进程：ipcRenderer；
 - 发送和接收：
 ```
 // 主进程中的方法
 ipcMain.on(事件名称-channel, listener);
 ipcMain.once(事件名称-channel, listener);  // 只监听一次
 // 回复同步信息时，需要设置 event.returnValue;
 ipMain.on(synchronousChannel, (event, arg) => {
   console.log(arg);
   event.returnValue = '我收到啦'
 })
 // 如果收到异步消息时，需要给发送人发送异步消息，需要使用 event.sender.send(...)
 ipMain.on(asynchronous, (event, arg) => {
   console.log(arg);
   event.sender.send(asynchronous-Reply, arg)
 })
 ```

### 设置工具栏
- 设置缩略图工具栏，其中 icon 为必填属性；
```
win.setThumbarButtons([
  {
    tooltip: "button1",
    icon: path.join(__dirname, 'file.png'),
    click: function () { console.log("button1 clicked"); }
  },
  {
    tooltip: "button1",
    icon: path.join(__dirname, 'audio.png'),
    click: function () { console.log("button2 clicked"); }
  }
]);
```
- 设置进度条工具栏
```
win.setProgressBar(0.3);
```

### 辅助功能
- Spectron、Devtron；
- 将审查工具带到 electron 应用中。
