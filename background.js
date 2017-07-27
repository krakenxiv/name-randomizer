(function() {
  chrome.browserAction.onClicked.addListener(function() {
    var popupWindow = window.open(
      chrome.extension.getURL('popup.html'),
      'App Name',
      'width=800,height=260'
    );
    window.close();
  });
})();
