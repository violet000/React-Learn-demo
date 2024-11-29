### PureComponent  
    如果所有的类，都需要手动来实现shouldComponentUpdate，那么会给开发者带来非常大的工作量
        1、我们设想shouldComponentUpdate中的各个判断的目的是什么？
           props和state中的数据是否发生了改变，来决定shouldComponentUpdate返回true或者false
