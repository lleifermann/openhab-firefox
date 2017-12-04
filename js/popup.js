const promise = browser.storage.sync.get(['width', 'height', 'remoteServer', 'localServer', 'remoteActive', 'basicUi', 'automaticUrl']);

document.addEventListener('DOMContentLoaded',
  function load() {
  let window = document.getElementById('frameContainer');
    promise.then((res) => {
      if(res.remoteActive) {
        console.log(res);
        window.innerHTML = `<iframe style="border:none;" src="${res.remoteServer}${res.basicUi}" width="${res.width + ''}"px height="${res.height + ''}"px></iframe>`;
      }
      else{
        window.innerHTML = `<iframe style="border:none;" src="${res.localServer}${res.basicUi}" width="${res.width + ''}"px height="${res.height + ''}"px></iframe>`;
      }
    });
});
