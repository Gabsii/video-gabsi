document.addEventListener('DOMContentLoaded', function () {
  console.log("WHOOO");
  document.querySelector('#send-link').addEventListener('click', sendLink, false)
  
  function sendLink () {
    chrome.tabs.query({currentWindow: true, active: true}, function ([activeTab, ...tabs]) {
      const { url } = activeTab;

      fetch('https://discord.com/api/webhooks/787777901675151430/rA0qsCMQSciDOBBpbHeGjsu684JtUxNETk46diszZWs02EzXabZ-hwKUt-G3ry2h_LhX', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({content: `Gabsii schaut gerade: ${url}`})
      }).catch(err => alert(err));

    })
  }

}, false)

// "browser_action": {
//   "default_popup": "popup.html",
//   "default_title": "Send Video to Discord TextChannel"
// },
