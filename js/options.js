const DEFAULT_MYOPENHAB_URL = "https://home.myopenhab.org";
const DEFAULT_BASICUI_PATH = "/basicui/app";
const DEFAULT_WIDTH = 450;
const DEFAULT_HEIGHT = 500;

let promise = browser.storage.sync.get(['localServer', 'remoteServer', 'basicUi', 'width', 'height', 'remoteActive']);

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
  promise.then((res) => {
    document.querySelector("#localServer").value = res.localServer || null;
    document.querySelector("#remoteServer").value = res.remoteServer || DEFAULT_MYOPENHAB_URL;
    document.querySelector("#basicUi").value = res.basicUi || DEFAULT_BASICUI_PATH;
    document.querySelector("#width").value = res.width || DEFAULT_WIDTH;
    document.querySelector("#height").value = res.height || DEFAULT_HEIGHT;
  });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);



