export default [
  { text: '首页', link: '/' },
  { text: '文档', link: '/docs/' },
  { text: '使用案例', link: '/example/' },
  { text: 'JavaScript教程', link: '/bar/' },
  {
    text: '前端框架',
    items: [
      {
        text: '第一章',
        items: [
          { text: 'API', link: '/foo/api/' },
          { text: '更多', link: '/foo/more/' }
        ]
      },
      {
        text: '链接',
        items: [
          { text: 'GitHub', link: 'https://github.com/uphg' }
        ]
      }
    ]
  }
]