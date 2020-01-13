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
        smoothScroll: true,
        displayAllHeaders: false,
        nav: [
            { text: '首页', link: '/' },
            {
                text: '技术分享',
                items: [
                    { text: '前端文章', link: '/article/front-end/' },
                    { text: 'GIT', link: '/article/git/' },
                    { text: 'nodejs', link: '/article/nodejs/' },
                    { text: 'python', link: '/article/python/' },
                    { text: 'mysql', link: '/article/mysql/' },
                    { text: 'CTF', link: '/article/ctf/' }
                ]
            },
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
                    title: 'HTML',
                    children: [
                        ['/article/front-end/Web前端开发工程师编程能力飞升之路', 'Web前端开发工程师编程能力飞升之路'],
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
                        ['/article/front-end/js/', 'JS utils'],
                        ['/article/front-end/js/压缩图片', '压缩图片']
                    ]
                },
                {
                    title: 'CSS',
                    children: [
                        ['/article/front-end/css/', 'CSS样式重置']
                    ]
                },
                {
                    title: 'VUE',
                    children: [
                        ['/article/front-end/vue/', '@vue/cli的安装使用'],
                        ['/article/front-end/vue/使用vuecli3与ts搭建项目一—创建', '使用vuecli3与ts搭建项目—创建(一)'],
                        ['/article/front-end/vue/使用vuecli3与ts搭建项目二—vue组件中的写法', '使用vuecli3与ts搭建项目—vue组件中的写法(二)'],
                        ['/article/front-end/vue/打造一款在线编辑器', '打造一款在线编辑器']
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
    markdown: {
        lineNumbers: true
    },
    sidebarDepth: 2
}