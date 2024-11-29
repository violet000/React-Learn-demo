### 开发过程中不能直接使用state的值来让界面发生更新
    1、因为我们修改了state之后，希望react根据最新的state来重新渲染界面，但是这种方式的修改react并不知道数据发生了变化
    2、react并没有实现类似于vue2中的Object.defineProperty或者vue3的Proxy的方式来监听数据的变化
    3、我们必须通过setState来告知react数据已经发生了变化
    
### Q: 在组件中并没有实现setState的方法，为什么可以调用呢？
    A: setState方法是从Component中继承过来的
    Component.prototype.setState = function(partialState, callback) {
        invariant(
            typeof partialState === 'object' || 
            typeof partialState === 'function' ||
            partialState === null,
            .....
        )
        this.updater.enqueueSetState(this, partialState, callback, 'setState')
    }
