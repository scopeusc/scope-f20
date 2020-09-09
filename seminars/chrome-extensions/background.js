chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    const originalSrc = request.message
    console.log(originalSrc)
    // do what you wanna do with the originalSrc
    sendResponse('success')
})