<link href="https://players.brightcove.net/videojs-overlay/2/videojs-overlay.css" rel='stylesheet'>



<video-js id="myPlayerID"
    data-account="1752604059001"
    data-player="a5bb5681-9bfb-4203-9dac-eb3b98c8b4b2"
    data-embed="default"
    class="video-js" controls>
</video-js>

<script src="https://players.brightcove.net/1752604059001/a5bb5681-9bfb-4203-9dac-eb3b98c8b4b2_default/index.min.js"></script>

<script src="https://players.brightcove.net/videojs-overlay/2/videojs-overlay.min.js"></script>



<script>
  videojs.getPlayer('myPlayerID').ready(function() {
    var myPlayer = this;
  });
</script>



<script id="pageScript" type="text/javascript">
  videojs.getPlayer('myPlayerID').ready(function() {
    var myPlayer = this;
    myPlayer.overlay({
    content: '<strong>Default overlay content</strong>',
    overlays: [{
      align: "top",
      content: 'This event-triggered overlay message appears when the video is playing',
      start: 'play',
      end: 'pause'
    }, {
      content: 'This timed overlay message appears between 5 and 10 seconds',
      start: 5,
      end: 10,
      align: 'bottom-right'
    }, {
      start: 12,
      end: 17,
      align: 'bottom-left'
    }]
  });
 });
</script>
