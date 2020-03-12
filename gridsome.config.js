// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Edgar Burtnieks',
  plugins: [
    {
      use: 'gridsome-plugin-netlify-cms',
      options: {
        publicPath: '/admin',
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Project',
        path: 'content/projects/**/*.md',
      },
    },
  ],
};
