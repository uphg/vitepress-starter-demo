import fs from 'fs'
import p from 'path'
import matter from 'gray-matter'
import fg from 'fast-glob'

const fileNames = (filePath: string) => {
  return new Promise((resolve, reject) => {
    fs.readdir(filePath, (error, fileList) => {
      if (error) return reject(error)
      resolve(fileList)
    })
  })
}

console.log('fg')
console.log(fg)

const str = fs.readFileSync(p.resolve('./docs/bar/markdown.md'), 'utf8');
console.log(matter(str));

export default async () => {
  let fileList = await fileNames(p.resolve('./docs/'))
  const blogs = await fg(['docs/**/*.md']); // 获取所有 markdown 文件路径
  console.log('blogs')
  console.log(blogs)
  return {
    title: 'Hello VitePress',
    description: 'Just playing around.',
    themeConfig: {
      _blogs: blogs,
      searchMaxSuggestions: 10,
      nav: [
        { text: '首页', link: '/' },
        { text: '文档', link: '/docs/' },
        // { text: '使用案例', link: '/example/' },
        // { text: 'JavaScript教程', link: '/bar/' },
      ],
      sidebar: [
        {
          text: '文档',   // 必要的
          link: '/docs/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false, // 可选的, 默认值是 true,
          children: [
            {
              text: '首页',
              link: '/docs/index'
            }
          ]
        },
      ]
    },
    // themeConfig: {
    //   searchMaxSuggestions: 10,
    //   // smoothScroll: true, // 开启平滑滚动
    //   nav,
    //   lastUpdated: '上次更新',
    //   sidebarDepth: 2,
    //   sidebar,
    // },
  }
}