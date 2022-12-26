var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('js-main-movie', {
    videoId: 'Duhx-HOG7Fo',
    height: '315',
    width: '560',
    playerVars: {
      controls: 0,
      autoplay: 1,
      disablekb:1,
      enablejsapi: 1,
      iv_load_policy: 3,
      playsinline: 1,
      rel: 0,
      modestbranding: 1
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerReady(event) {
  event.target.mute();
  event.target.playVideo();
}

function onPlayerStateChange(event) {
  var ytStatus = event.target.getPlayerState();
  if (ytStatus == YT.PlayerState.ENDED) {
    player.mute();
    player.playVideo();
  }
}