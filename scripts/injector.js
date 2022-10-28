// APlayer音乐播放器
hexo.extend.injector.register('body_end', `
  <div id="aplayer"></div>
  <link defer rel="stylesheet" href="https://cdn.staticfile.org/aplayer/1.10.1/APlayer.min.css" />
  <script src="https://cdn.staticfile.org/aplayer/1.10.1/APlayer.min.js"></script>
  <script defer src="/js/aplayer.js"></script>
`);

// hexo.extend.injector.register('body_end', `
// <link rel="stylesheet" href="APlayer.min.css">
// <div id="aplayer"></div>
// <script src="APlayer.min.js"></script>
// `);

// hexo.extend.injector.register('body_end', `
//   <iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=450 src="//music.163.com/outchain/player?type=0&id=4980157066&auto=1&height=430"></iframe>
// `);


