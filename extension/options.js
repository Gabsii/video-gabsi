document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const webhook = document.querySelector('#webhook').value;
    chrome.storage.local.set({ webhook }, function(){
      alert('saved the webhook');
  });
  }, false);
});
