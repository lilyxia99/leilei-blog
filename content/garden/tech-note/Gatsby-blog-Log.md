---
title: 搭建gatsby 博客
tags:
  - tech-notes
dg-publish: true
---
## 研究pop up的部分可不可以预览久一点

2024-01-12

发现了我的模板到底是用的什么来scroll的，原来是用的[Tippy](https://kabbouchi.github.io/tippyjs-v4-docs/) 之后研究一下，或许可以让我的tippy能够scroll！看样子是在[这个代码里定义的](https://github.com/phartenfeller/gatsby-philipps-foam-theme/blob/93a3fc3fcd93406fc9f6156640921d2767988575/gatsby-philipps-foam-theme/src/components/mdx-components/FoamLink.jsx#L2) 回头可能我只要[shadow](https://www.gatsbyjs.com/docs/how-to/plugins-and-themes/shadowing/)一下这个代码就可以了

通过[chrome](https://medium.com/@AbbasPlusPlus/how-to-check-hover-and-popover-styles-in-chrome-devtools-84c628580401)可以inspect悬浮的内容， 我也得意搞清楚这个tippy里有什么。感觉里面是有全部的内容的，只是我需要让这个tippy：

1. 悬浮久一点
2. overflow hidden

## 创建艺术家地图

Thursday, January 11, 2024 @ 11:39:42 AM

不能直接在template写太复杂的东西，例如react flow这样的，要在component里写然后直接在template里提及。

折腾了一天半，尝试从canvas文件生成react flow视图，但是到最后一步，已经能生成了，但是somehow custom node又出一些问题。不知道是咋回事。总之现在是可以有react flow，也可以有node,如果是普通的node的话。但就是custom node解决不了

换一个思路其实不一定要react flow。我的需求其实就是我能够把这些艺术家连起来，实际上react flow可能还并不太合适。或许我需要的是修改现有的theme，让它能够有更多的tag显示以及color code.

好处是，现在搞清楚了template 和 component之间的关系，以及他们是怎么互相交流的。主要就是src里的文件无法直接access content里的文件，必须通过gatsby-node 才可以获得信息。信息流就是gatsby-node --> template --> component

最后是通过一些浑水摸鱼的技巧实现的，其实就是把网址的规律给搞出来。毕竟我这个theme是一个很奇怪的theme

todo:
- [x]   创建一个可以显示其他 md 页面的custom node
- [x]   看看如何把每个页面的网址确定下来，这样就可以显示那个md网页了

真的成功搞出来了～～～好开心

后来通过 connectionMode="loose"来解决不同方向上的连接问题

以及custom node必须自己加上handle！不然是没有handle的！
然后就是iframe居然能work太好啦哈哈哈

