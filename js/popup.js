document.addEventListener('DOMContentLoaded',
  function applysettings() {
    if (!localStorage["local_server_id"]) {
      document.getElementById('setup').innerHTML = '<h3 style="padding:20px;">You need to <a href="options.html">Setup</a> the extension first.</h3>';
    }
    else {
      document.getElementById('MyFrameContainer').innerHTML = '<iframe style="border:none;" src="' + localStorage["active_server_id"] + localStorage["path_id"] + '" width=450px; height=500px></iframe>';
      document.getElementById('body').style.width = localStorage["width_id"];
      document.getElementById('body').style.height = localStorage["height_id"];
    }
  }
)
