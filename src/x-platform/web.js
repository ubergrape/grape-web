import noop from 'lodash/utility/noop'

/**
 * Create native html notification.
 */
export function createNotification({title, content, icon}, callback = noop) {
  if (!Notification) return
  const n = new Notification(title, {
    icon,
    tag: title,
    body: content,
    silent: true,
    onclick: function onclick() {
      window.focus()
      this.close()
      callback()
    }
  })
  setTimeout(n.close.bind(n), 6000)
}

/**
 * Open an url in browser.
 */
export function openUrl(url, blank = true) {
  if (blank) {
    window.open(url)
    return
  }
  window.location.href = url
}
