// This script will create the context menu for the extension.
browser.contextMenus.removeAll();

browser.contextMenus.create({
  id: "radioLocal",
  type: "radio",
  title: "Local URL",
  contexts: ["browser_action"],
  onclick: function() {
    browser.storage.sync.set({
      remoteActive: false
    });
  }
});

browser.contextMenus.create({
  id: "radioRemote",
  type: "radio",
  title: "Remote URL",
  contexts: ["browser_action"],
  onclick: function() {
    browser.storage.sync.set({
      remoteActive: true
    });
  }
});

browser.contextMenus.create({
  id: "options",
  type: "normal",
  title: "Options",
  contexts: ["browser_action"],
  onclick: function handleClick() {
    browser.runtime.openOptionsPage();
  }
});

