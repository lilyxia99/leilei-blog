exports.onPreBuild = () => {
    require('./generatePostList');
  };