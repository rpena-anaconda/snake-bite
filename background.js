let name = "Jack";

chrome.runtime.onInstalled.addListener(() => {
    // Define default state of our Chrome Extension
    chrome.storage.local.set({
        name: "Nucleus"
    });


});

chrome.runtime.onStartup.addListener(function () {
    chrome.storage.local.get(['access_token'], function (result) {
        console.log('Value currently is ' + result);
    });
})

// // Return value in storage
// // chrome.storage.local.get('name');

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    console.log('storage:', chrome.storage.local);
    console.log('tabID', tabId);
    console.log('changeInfo', changeInfo);
    console.log('tab', tab);

    chrome.storage.local.get(['access_token'], function (result) {
        console.log('Value currently is ' + result.key);
    });
});

// chrome.cookies.get()