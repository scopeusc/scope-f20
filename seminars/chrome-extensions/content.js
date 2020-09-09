chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.message === 'insert-image') {
        const imgs = document.getElementsByTagName('img')
        Array.from(imgs).forEach(function(i) {
            const originalSrc = i.src
            console.log(originalSrc)
            chrome.runtime.sendMessage({ message: originalSrc }, function(response) {
                console.log(response)
            })
            chrome.storage.sync.get({
                imgSize: 100
            }, function(items) {
                i.src = chrome.extension.getURL('scope-logo.png')
                i.width = items.imgSize
            })
        })
    }
})