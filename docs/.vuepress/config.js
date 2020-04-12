module.exports = {
    title: 'WidgetBot',
    description: 'The open-source server management solution.',
    host: 'localhost',
    themeConfig: {
        repo: 'widgetbot-io/embed',
        repoLabel: 'Contribute',
        displayAllHeaders: true,
        sidebar: [
            {
                title: 'WidgetBot',
                path: '/'
            },
            {
                title: 'Tutorials',
                path: '/tutorial/'
            },
            {
                title: 'Embed',
                path: '/embed/'
            },
            {
                title: 'Guides',
                path: '/guides/'
            }
        ]
    },
    configureWebpack: {
        serve: {
            hot: {
                port: 9091,
            },
        },
    },
};
