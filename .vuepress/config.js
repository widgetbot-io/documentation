module.exports = {
    title: 'WidgetBot',
    description: 'Pixel perfect discord embed for your website.',
    head: [
        ['script', {src: 'https://cdn.jsdelivr.net/npm/@widgetbot/crate@3', async: true, defer: true},
        'const crate = new Crate({server: \'299881420891881473\', channel: \'299881420891881473\', shard: \'https://e.widgetbot.io\'})']
    ],
    host: 'localhost',
    themeConfig: {
        displayAllHeaders: true,
        logo: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NTggNDU4Ij4KICA8IS0tIDxyZWN0IGlkPSJzdmdfMjMiIHdpZHRoPSI2My4zNDk4NzQiIGhlaWdodD0iNjUuODE3MTYiIHg9IjE5OC44MjUwNjUiIHk9IjI4MS4wOTE0MjEiIGZpbGw9IiM3Mjg5ZGEiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIwIiB0cmFuc2Zvcm09InJvdGF0ZSg0NS42MDc0MjU2ODk2OTcyNjYgMjMwLjUsMzE0KSAiLz4KICA8cmVjdCBpZD0ic3ZnXzIyIiB3aWR0aD0iMzA2IiBoZWlnaHQ9IjIxMCIgeD0iNzcuNSIgeT0iMTA0IiBmaWxsPSIjNzI4OWRhIiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMCIvPiAtLT4KICA8cGF0aCBpZD0ic3ZnXzQiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzcyODlkYSIgc3Ryb2tlLXdpZHRoPSIwIiBkPSJtMzc2LjkyNTc1Miw4NC41MzMwMDRsLTI5Mi44NTE1MzcsMGMtMTIuMTkwODY1LDAgLTIyLjA3NDIzNiwxMC41MzAxNyAtMjIuMDc0MjM2LDIzLjUxODg0M2wwLDE5Ny41NTgyODVjMCwxMi45ODg2NzMgOS44ODMzNzEsMjMuNTE4ODQzIDIyLjA3NDIzNiwyMy41MTg4NDNsOTcuMjAwMjIxLDBsMzIuMzMyODcsNDAuOTU2NDk4YzQuMTk0MTA1LDUuMzEyOTA3IDEwLjM3NzA5OSw4LjM4MDU0OCAxNi44OTM0MTMsOC4zODA1NDhjNi41MTYzMTUsMCAxMi42OTkzMDgsLTMuMDY2ODU3IDE2Ljg5MzQxMywtOC4zNzk3NjRsMzIuMzMyODcsLTQwLjk1NjQ5OGw5Ny4xOTg3NSwwYzEyLjE5MTYwMSwwIDIyLjA3NDIzNiwtMTAuNTMwMTcgMjIuMDc0MjM2LC0yMy41MTg4NDNsMCwtMTk3LjU1ODI4NWMwLC0xMi45ODk0NTcgLTkuODgyNjM2LC0yMy41MTk2MjcgLTIyLjA3NDIzNiwtMjMuNTE5NjI3em0wLDIyMS4wNzcxMjhsLTEwNy40NzcyNSwwbC0zOC45NDg1MTksNDkuMzM2MjYybC0zOC45NDc3ODMsLTQ5LjMzNjI2MmwtMTA3LjQ3Nzk4NiwwbDAsLTE5Ny41NTgyODVsMjkyLjg1MTUzNywwbDAsMTk3LjU1ODI4NXoiLz4KICA8cGF0aCBpZD0ic3ZnXzUiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzcyODlkYSIgc3Ryb2tlLXdpZHRoPSIwIiBkPSJtMTI0LjgzOTQ0MywxNzUuMDUzODk3bDEwMC44MDU2OCwwYzYuMDk1NDMyLDAgMTEuMDM3MTE4LC01LjI2NTA4NSAxMS4wMzcxMTgsLTExLjc1OTQyMnMtNC45NDE2ODYsLTExLjc1OTQyMiAtMTEuMDM3MTE4LC0xMS43NTk0MjJsLTEwMC44MDU2OCwwYy02LjA5NTQzMiwwIC0xMS4wMzcxMTgsNS4yNjUwODUgLTExLjAzNzExOCwxMS43NTk0MjJzNC45NDE2ODYsMTEuNzU5NDIyIDExLjAzNzExOCwxMS43NTk0MjJ6Ii8+CiAgPHBhdGggaWQ9InN2Z182IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiM3Mjg5ZGEiIHN0cm9rZS13aWR0aD0iMCIgZD0ibTExNC4yNDIzMzgsMjM1LjQxODkyOGMwLDYuNDk0MzM3IDQuOTQxNjg2LDExLjc1OTQyMiAxMS4wMzcxMTgsMTEuNzU5NDIybDIxMC40NDEwNTQsMGM2LjA5NTQzMiwwIDExLjAzNzExOCwtNS4yNjUwODUgMTEuMDM3MTE4LC0xMS43NTk0MjJzLTQuOTQxNjg2LC0xMS43NTk0MjIgLTExLjAzNzExOCwtMTEuNzU5NDIybC0yMTAuNDQxMDU0LDBjLTYuMDk1NDMyLDAgLTExLjAzNzExOCw1LjI2NTA4NSAtMTEuMDM3MTE4LDExLjc1OTQyMnoiLz4KPC9zdmc+Cg==',
        nav: [
            { text: 'Guides', link: '/guides/'},
            { text: 'Invite WidgetBot', link: 'https://add.widgetbot.io' },
            { text: 'Get Support', link: 'https://discord.gg/RVNmwdy' }
        ],
        repo: 'widgetbot-io/embed',
        docsRepo: 'widgetbot-io/documentation',
        editLinks: true,
        editLinkText: 'Help us improve this page!',
        repoLabel: 'Contribute',
        sidebar: {
            '/guides/': [
                {
                    title: 'Helpful Guides',
                    path: '',
                    collapsable: false,
                    children: [
                        'automod',
                        'custom-colors'
                    ]
                },
                //{
                //    title: 'Patreon',
                //    path: 'patreon'
                //}
                // {
                //     title: 'Patreon',
                //     path: '/guides/patreon',
                //     children: [
                //         {title: 'Patreon Red', path: '/guides/patreon#patreon-red'}
                //     ]
                // }
            ],
            '/': [
                {
                    title: 'WidgetBot',
                    path: '/'
                },
                {
                    title: 'Tutorial',
                    path: '/tutorial/',
                    collapsable: false,
                    children: [
                        {title: 'Crate', path: '/embed/crate/tutorial'},
                        {title: 'html-embed', path: '/embed/html-embed/tutorial'},
                        {title: 'iframes', path: '/tutorial/iframes'}
                    ]
                },
                {
                    title: 'Embed',
                    path: '/embed/',
                    collapsable: false,
                    children: [
                        {
                            title: 'Crate',
                            path: '/embed/crate/',
                            collapsable: false,
                            children: [
                                {title: 'Intro', path: '/embed/crate/'},
                                {title: 'Tutorial', path: 'embed/crate/tutorial'},
                                {title: 'Options', path: 'embed/crate/options'},
                                {title: 'API', path: 'embed/crate/api'},
                                {title: 'Examples', path: 'embed/crate/examples'}
                            ]
                        },
                        {
                            title: 'html-embed',
                            path: '/embed/html-embed/',
                            collapsable: false,
                            children: [
                                {title: 'Intro', path: '/embed/html-embed/'},
                                {title: 'Tutorial', path: 'embed/html-embed/tutorial'},
                                {title: 'Attributes', path: 'embed/html-embed/attributes'},
                                {title: 'API', path: 'embed/html-embed/api'}
                            ]
                        },
                        {
                            title: 'react-embed',
                            path: '/embed/react-embed/',
                            collapsable: false,
                            children: [
                                {title: 'Intro', path: '/embed/react-embed/'},
                                {title: 'Props', path: 'embed/react-embed/props'}
                            ]
                        }
                    ]
                }
            ]
        },
        searchPlaceholder: 'Search',
        nextLinks: true,
        prevLinks: true,
        smoothScroll: true
    },
    plugins: [
        'vuepress-plugin-nprogress',
        ['vuepress-plugin-clean-urls', {
            normalSuffix: '/'
        }]
    ],
    markdown: {
        lineNumbers: true
    },
    configureWebpack: {
        serve: {
            hot: {
                port: 9091,
            }
        }
    },
    evergreen: true
};
