// background.js

let pink = '#FFC0CB';
let color = '#00FF00'

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);3
});

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ pink });
});