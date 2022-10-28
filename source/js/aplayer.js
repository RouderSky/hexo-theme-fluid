// APlayer音乐播放器
// import 'APlayer/dist/APlayer.min.css';
// import APlayer from 'APlayer';

!(function() {
    var oldLoadAp = window.onload;
    window.onload = function () {
      oldLoadAp && oldLoadAp();
  
      new APlayer({
        container: document.getElementById('aplayer'),
        fixed: true,
        autoplay: false,
        loop: 'all',
        order: 'random',
        theme: '#b7daff',
        preload: 'none',
        audio: [
          {
            name: '樱花抄',
            artist: '秒速5厘米',
            url: 'http://www.ytmp3.cn/down/44148.mp3',
            cover: '/img/cover.jpg'
          }
        ]
      });
    }
  })();