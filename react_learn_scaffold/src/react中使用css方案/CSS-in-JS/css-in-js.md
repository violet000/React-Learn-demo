### 认识css in js
    'css in js'是指的一种模式，其中css由js生成而不是在外部文件中定义
    注意此功能并不是react的一部分，而是由第三方库提供
    react对样式如何定义并没有明确的态度

### 认识styled-components
    css-in-js通过javascript来为css赋予一些能力，包括类似于css预处理器一样的样式嵌套，函数定义，逻辑复用，动态修改状态等
    虽然css预处理器也具备某些能力，但是获取动态状态依然是一个不好处理的点
    所以，目前可以说css-in-js是react编写css最受欢迎的一种方案

### 目前比较流行的css-in-js的库
    styled-component
    emotion
    glamorous
