import noop from 'lodash/utility/noop'

/**
 * Create native html notification.
 */
export function createNotification({title, content, icon}, callback = noop) {
  if (!Notification) return
  Notification(title, {
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
