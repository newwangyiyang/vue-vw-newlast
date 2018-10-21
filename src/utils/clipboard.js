import Clipboard from 'clipboard'

function clipboardSuccess() {
  //粘贴成功出发事件,可进行弹框提示用户赋值成功
  console.log('success');
}

function clipboardError() {
  //粘贴失败出发事件
  console.log('fail');
}
//传递赋值文本和原生对象$event
export default function handleClipboard(text, event) {
  const clipboard = new Clipboard(event.target, {
    text: () => text
  })
  clipboard.on('success', () => {
    clipboardSuccess()
    clipboard.off('error')
    clipboard.off('success')
    clipboard.destroy()
  })
  clipboard.on('error', () => {
    clipboardError()
    clipboard.off('error')
    clipboard.off('success')
    clipboard.destroy()
  })
  clipboard.onClick(event)
}
