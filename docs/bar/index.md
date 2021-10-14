---
title: "Markdown 拓展"
categories:
    - 前端
tags:
    - JavaScript
    - Vue
---

<!-- 除了 Markdown 的默认语法，VuePress 还附带了一些 Markdown 的组件块

详情参考：[Markdown 拓展](https://vuepress.vuejs.org/zh/guide/markdown.html)


### 换行

<p>
  <hr />
</p>

## 自定义容器 <Badge text="默认主题"/>

**输入**

```md
::: tip
这是一个提示
:::

::: info
这是一个信息
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个详情块，在 IE / Edge 中不生效
:::
```

**输出**

提示

::: tip
这是一个提示
:::

信息

::: info
这是一个信息
:::

警告

::: warning
这是一个警告
:::

危险警告

::: danger
这是一个危险警告
:::

详情

::: details
这是一个详情块，在 IE / Edge 中不生效
:::



你也可以自定义块中的标题：

~~~md
::: danger STOP
危险区域，禁止通行
:::

::: details 点击查看代码

```js
console.log('你好，VuePress！')
```

:::
~~~



::: danger STOP
危险区域，禁止通行
:::

::: details 点击查看代码

```js
console.log('你好，VuePress！')
```

:::

## 在标题中使用组件 <Badge text="beta" type="warning"/> <Badge text="默认主题"/>

**属性**

- `text` - string
- `type` - string, 可选值： `"tip"|"warning"|"error"`，默认值是： `"tip"`
- `vertical` - string, 可选值： `"top"|"middle"`，默认值是： `"top"`

**使用**

当前标题的组件：

```md
## 在标题中使用组件 <Badge text="beta" type="warning"/> <Badge text="默认主题"/>
```



## 代码块中的行高亮

**输入**

~~~text
``` js {4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
~~~

**输出**

``` js {4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

测试多行

``` js {4-8}
export default {
  data () {
    return {
      msg1: 'Highlighted!',
      msg2: 'Highlighted!',
      msg3: 'Highlighted!',
      msg4: 'Highlighted!'
    }
  }
}
``` -->

