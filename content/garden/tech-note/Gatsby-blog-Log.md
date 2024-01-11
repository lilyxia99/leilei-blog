---
title: "搭建gatsby 博客"
tags: 
    - tech-notes
---

# 搭建gatsby 博客

Thursday, January 11, 2024 @ 11:39:42 AM

折腾了一天半，尝试从canvas文件生成react flow视图，但是到最后一步，已经能生成了，但是somehow custom node又出一些问题。不知道是咋回事。总之现在是可以有react flow，也可以有node,如果是普通的node的话。但就是custom node解决不了

换一个思路其实不一定要react flow。我的需求其实就是我能够把这些艺术家连起来，实际上react flow可能还并不太合适。或许我需要的是修改现有的theme，让它能够有更多的tag显示以及color code.

好处是，现在搞清楚了template 和 component之间的关系，以及他们是怎么互相交流的。主要就是src里的文件无法直接access content里的文件，必须通过gatsby-node 才可以获得信息。信息流就是gatsby-node --> template --> component

最后是通过一些浑水摸鱼的技巧实现的，其实就是把网址的规律给搞出来。毕竟我这个theme是一个很奇怪的theme

todo:
- [x]   创建一个可以显示其他 md 页面的custom node
- [x]   看看如何把每个页面的网址确定下来，这样就可以显示那个md网页了