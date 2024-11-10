const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('ipcRenderer', {

    /** @param {string} channel */
    invoke: (channel) => ipcRenderer.invoke(channel)
})
