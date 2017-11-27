document.addEventListener('DOMContentLoaded',
  function load() {
  const basicUiSync = browser.storage.sync.get('basicUi');
  const remoteServerSync = browser.storage.sync.get('remoteServer');
  const localServerSync = browser.storage.sync.get('localServer');
  const widthSync = browser.storage.sync.get('width');
  const heightSync = browser.storage.sync.get('height');
  const remoteActiveSync = browser.storage.sync.get('remoteActive');
  let window = document.getElementById('frameContainer');

    //Move into promise chain, until all variables are resolved and are ready to be injected into the iframe.
    remoteServerSync.then((remoteServerPromise) => {
      basicUiSync.then((basicUiPromise) => {
        widthSync.then((widthPromise) => {
          heightSync.then((heightPromise) => {
            remoteActiveSync.then((remoteActivePromise) => {
              if(remoteActivePromise.remoteActive){
                window.innerHTML = `<iframe style="border:none;" src="${remoteServerPromise.remoteServer}${basicUiPromise.basicUi}" width="${widthPromise.width + ''}"px height="${heightPromise.height + ''}"px></iframe>`;
              }
              else{
                localServerSync.then((localServerPromise) => {
                  window.innerHTML = `<iframe style="border:none;" src="${localServerPromise.localServer}${basicUiPromise.basicUi}" width="${widthPromise.width + ''}"px height="${heightPromise.height + ''}"px></iframe>`;
                });
              }
            });
          });
        });
      });
    });
  }
);
