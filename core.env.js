/*
Kopi 1.0 Environtment
required: notify.desktop
*/

if (console && console.log) {
  if (kopi.env == 'PROD')
    console.log = function (log) {}
}
window.onerror = function (errorMsg, url, lineNumber) {
  // kopi.notify('Error: ' + errorMsg + ' Script: ' + url + ' Line: ' + lineNumber)
}
