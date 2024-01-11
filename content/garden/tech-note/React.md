# React 笔记

## map

对于一个json文件不能直接改，必须得通过map才能改

```
原来的数据.map(单个代名词=>{
    const 新数据={
        什么属性：单个代名词.原来的属性,
        ......
    }

    return 新数据

})
```

## Gatsby

### Component VS Template
不能直接在template写太复杂的东西，例如react flow这样的，要在component里写然后直接在template里提及。