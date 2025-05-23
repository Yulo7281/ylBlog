/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.yulohan.cn',
  priority: 0.6,
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  transform: async (config, path) => {
    const defaultValue = (priority) => ({
      loc: path,
      changefreq: config.changefreq,
      priority: priority || config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    });

    if (path === '/') {
      return defaultValue(1.0);
    }

    if (path === '/blog') {
      return defaultValue(0.9);
    }

    if (path === '/stats') {
      return defaultValue(0.9);
    }

    if (path === '/today-i-learned') {
      return defaultValue(0.9);
    }

    if (path.indexOf('/work') === 0) {
      return defaultValue(0.8);
    }

    if (path === '/projects') {
      return defaultValue(0.9);
    }

    if (path === '/links') {
      return defaultValue(0.9);
    }

    if (path === '/feedback') {
      return defaultValue(0.9);
    }

    return defaultValue();
  },
};
