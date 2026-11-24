// html_handling 为 none 时资源层不会把 / 映射到 index.html，这里显式改写
const REWRITES = {
  '/': '/index.html',
  '/mobile': '/mobile.html',
  '/mobile/': '/mobile.html',
  '/about': '/about.html',
  '/about/': '/about.html',
};

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const target = REWRITES[url.pathname];
    if (target) {
      url.pathname = target;
      return env.ASSETS.fetch(new Request(url.toString(), request));
    }
    return env.ASSETS.fetch(request);
  },
};
