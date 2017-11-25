// This script will create the context menu for the extension.
browser.contextMenus.removeAll();

browser.contextMenus.create({
  id: "radioLocal",
  type: "radio",
  title: "Local URL",
  contexts: ["browser_action"],
  onclick: function() {
    localStorage["active_server_id"] = localStorage["local_server_id"];
  }
});

browser.contextMenus.create({
  id: "radioRemote",
  type: "radio",
  title: "Remote URL",
  contexts: ["browser_action"],
  onclick: function() {
    localStorage["active_server_id"] = localStorage["remote_server_id"];
  }
});

// Checks the Local URL radio on the context menu
browser.contextMenus.update("radioRemote", {
  checked: false
});
browser.contextMenus.update("radioLocal", {
  checked: true
});
localStorage["active_server_id"] = localStorage["local_server_id"];
