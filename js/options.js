const DEFAULT_MYOPENHAB_URL = "https://home.myopenhab.org";
const DEFAULT_BASICUI_PATH = "/basicui/app";
const DEFAULT_WIDTH = 450;
const DEFAULT_HEIGHT = 500;

let localServerSync = browser.storage.sync.get('localServer');
let remoteServerSync = browser.storage.sync.get('remoteServer');
let basicUiSync = browser.storage.sync.get('basicUi');

let widthSync = browser.storage.sync.get('width');
let heightSync = browser.storage.sync.get('height');

let remoteActiveSync = browser.storage.sync.get('remoteActive');

function saveOptions(e) {
  browser.storage.sync.set({
    localServer: document.querySelector("#localServer").value,
    remoteServer: document.querySelector("#remoteServer").value,
    basicUi: document.querySelector("#basicUi").value,
    width: document.querySelector("#width").value,
    height: document.querySelector("#height").value,
  });
  e.preventDefault();
}

function restoreOptions() {
  console.log("restoring options");

  localServerSync.then((res) => {
    document.querySelector("#localServer").value = res.localServer || null;
  });

  remoteServerSync.then((res) => {
    document.querySelector("#remoteServer").value = res.remoteServer || DEFAULT_MYOPENHAB_URL;
  });

  basicUiSync.then((res) => {
    document.querySelector("#basicUi").value = res.basicUi || DEFAULT_BASICUI_PATH;
  });

  widthSync.then((res) => {
    document.querySelector("#width").value = res.width || DEFAULT_WIDTH;
    console.log(res.width);
  });

  heightSync.then((res) => {
    document.querySelector("#height").value = res.height || DEFAULT_HEIGHT;
  });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);



