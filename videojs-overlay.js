<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>Video.js Overlay</title>

  <link href="https://github.com/saragrigoleit/brightcove/blob/7a9da77a2cb74bfb6b859cb24f5072a38109a8b5/style.css" rel='stylesheet'>
  <style type="text/css">
    .video-js {
      width: 600px;
      height: 338px;
    }
    .vjs-overlay.vjs-overlay-bottom-left {
      font-size: 1.5em;
      width: 60%;
      color: red;
      background-color: black;
    }
  </style>
</head>
<body>

  <video-js id="myPlayerID"
    data-video-id="6301723340001"
    data-account="2346984652001"
    data-player="1WuZ0o3sS"
    data-embed="default"
    class="video-js"
    controls></video-js>
  <script src="https://players.brightcove.net/1507807800001/N1gSjfUW6x_default/index.min.js"></script>
  <script src="https://players.brightcove.net/videojs-overlay/2/videojs-overlay.min.js"></script>

  <script type="text/javascript">
    videojs.getPlayer('myPlayerID').ready(function() {
      var myPlayer = this;
      myPlayer.on('loadstart',function() {
        myPlayer.muted(true);
        myPlayer.overlay({
          overlays: [{
            align: 'bottom-left',
            content: myPlayer.mediainfo.custom_fields.customfield1,
            start: 'loadstart',
            end: 'play'
          }]
        });
      });
    });
  </script>

</body>
</html>
