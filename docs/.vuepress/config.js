module.exports = {
    title: 'HeiYe',  // 设置网站标题
    description: '黑叶HeiYe博客，一个爱于分享和转载前端技术、前端资讯的博客。是记录博主学习和成长的一个自媒体博客、个人博客。',
    base: '/blog/',
    dest: '.vuepress/dist/blog',
    head: [
        ['link', { rel: 'heiyehk icon', type: 'image/x-icon', href: '/favicon.ico' }]
    ],
    themeConfig: {
        background: '/img/bg.jpg',
        github: 'heiyehk',
        logo: '/img/logo.jpg',
        // per_page: 6,
        searchMaxSuggestions: 10,
        lastUpdated: '最后更新时间',
        nav: [
            { text: '首页', link: '/' },
            {
                text: '技术分享',
                items: [
                    { text: '前端文章', link: '/article/front-end/' },
                    // { text: 'UI', link: '/article/ui/' },
                    { text: 'GIT', link: '/article/git/' },
                    { text: 'nodejs', link: '/article/nodejs/' },
                    { text: 'python', link: '/article/python/' },
                    { text: 'mysql', link: '/article/mysql/' },
                    // { text: '服务器', link: '/article/serve/' },
                    { text: 'CTF', link: '/article/ctf/' },
                    // { text: 'KALI', link: '/article/kali/' }
                ]
            },
            // {
            //     text: '其他',
            //     items: [
            //         { text: '小故事', link: '/storylove/story/' },
            //         { text: '爱好', link: '/storylove/love/' }
            //     ]
            // },
            {
                text: '关于我',
                items: [
                    { text: '关于我', link: '/about/' },
                    { text: '博客园', link: 'https://www.cnblogs.com/hkly/' },
                    { text: '掘金', link: 'https://juejin.im/user/5c417f7ee51d45524c7cea18' },
                    { text: 'github', link: 'https://github.com/heiyehk' }
                ]
            },
        ],
        sidebar: {
            '/article/front-end/': [
                {
                    title: 'Html',   // 必要的
                    children: [
                        ['/article/front-end/', 'Web前端开发工程师编程能力飞升之路'],
                        ['/article/front-end/html/SEO关键词', 'SEO关键词'],
                        ['/article/front-end/html/从输入url到显示网页发生了什么', '从输入url到显示网页发生了什么'],
                        ['/article/front-end/html/你应该知道的前端——缓存', '你应该知道的前端——缓存'],
                        ['/article/front-end/html/浏览器重绘与重排', '浏览器重绘与重排'],
                        ['/article/front-end/html/HTML5-语义化', 'HTML5-语义化'],
                        ['/article/front-end/html/HTML5-新特性', 'HTML5-新特性']
                    ]
                },
                {
                    title: 'JS',
                    children: [
                        ['/article/front-end/js/', 'Js小工具'],
                        ['/article/front-end/js/一个原生js压缩图片的功能', '一个原生js压缩图片的功能']
                    ]
                },
                {
                    title: 'CSS',
                    children: [
                        ['/article/front-end/css/', 'Css']
                    ]
                },
                {
                    title: 'Vue',
                    children: [
                        ['/article/front-end/vue/', '@vue/cli的安装使用'],
                        ['/article/front-end/vue/使用vuecli3与ts搭建项目一—创建', '使用vuecli3与ts搭建项目—创建(一)'],
                        ['/article/front-end/vue/使用vuecli3与ts搭建项目二—vue组件中的写法', '使用vuecli3与ts搭建项目—vue组件中的写法(二)'],
                        ['/article/front-end/vue/打造一款在线编辑器', '打造一款在线编辑器']
                    ]
                },
                {
                    title: 'LESS',
                    children: [
                        ['/article/front-end/less/', 'Less']
                    ]
                },
                {
                    title: 'WEBPACK',
                    children: [
                        ['/article/front-end/webpack/', 'Webpack']
                    ]
                },
                {
                    title: 'GULP',
                    children: [
                        ['/article/front-end/gulp/', 'Gulp']
                    ]
                }
            ],
            '/article/ui/': [
                {
                    title: 'HTML',   // 必要的
                    children: [
                        ['/article/ui/style/', '风格']
                    ]
                }
            ],
            '/article/mysql/': [
                ['/article/mysql/', 'MySQL 数据类型'],
                ['/article/mysql/MySQL常用命令汇总', 'MySQL常用命令汇总']
            ]
        }
    },
    sidebarDepth: 2,
    displayAllHeaders: false
}