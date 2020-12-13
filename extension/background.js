chrome.browserAction.onClicked.addListener(async (activeTab) => {
  chrome.storage.local.get(["webhook"], function(items){
    const webhookUrl = items.webhook;
    const { url } = activeTab;

    if(webhookUrl) {
      fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({content: `Gabsii schaut gerade: ${url}`})
      }).catch(err => alert(err));
    } else {
      alert('webhook missing, check options page');
    }
  });
});
