function saveOptions() {
    const imgSize = document.getElementById('image-size').value
    chrome.storage.sync.set({
        imgSize
    }, function() {
        console.log('saved!')
    })
}

function restoreOptions() {
    chrome.storage.sync.get({
        imgSize: 100
    }, function(items) {
        document.getElementById('image-size').value = items.imgSize
    })
}

document.addEventListener('DOMContentLoaded', restoreOptions)
document.getElementById('save').addEventListener('click', saveOptions)