import {Component} from 'react';
import propType from 'prop-types'

// TODO: 参数propTypes
// 对于传递给子组件的数据，如果希望对数据进行验证
// 可以通过prop-types库来进行参数验证


class SubHome extends Component {

    //TODO: 类组件执行顺序

    //1、初始化
    //只做两件事情
    //1、通过给this.state赋值对象来初始化内部的state
    //2、为事件绑定实例(this)
    constructor(props) {
        super(props);
        console.log(this.props)
        this.state = {
            message: 'zijin'
        }
    }

    changeText(txt) {
        // TODO: 每次执行setState方法会重新执行一遍render函数
        this.setState({ message: txt })
    }

    // 子组件：点击计数进行增加
    calcCounter(num) {
        this.props.addClick(num)
    }

    //2、执行ender函数
    render() {
        const { message } = this.state
        const { banners } = this.props

        const label = 'change text'
        return (
            <div>
                <h2>这是sub home {message}</h2>
                { banners.length === 0 ? <span>数据加载中...</span> : <h3>{ banners.map((item, index) => (<span style={{ marginLeft: '20px' }} key={index}>{item.title}</span>)) }</h3> }
                <button onClick={() => this.changeText(label)}>点击修改</button>
                <button onClick={e => this.calcCounter(1)}>+1</button>
                <button onClick={e => this.calcCounter(5)}>+5</button>
                <button onClick={e => this.calcCounter(10)}>+10</button>
            </div>
        )
    }

    // 3、组件被渲染到DOM：被挂载到DOM
    // componentDidMount()会在组件挂载后(插入到dom树中)立即调用
    // 一般在此方法内做：1、发送网络请求 2、添加一些订阅
    componentDidMount() {
        console.log("componentDdMount")
    }

    // 4、组件的DOM被更新完成，需要注意的是，这个生命周期表示组件已经被更新结束了
    // componentDidUpdate()会在更新后被立即执行，首次渲染不会执行此方法
    // 当组件更新后，可以在此处对dom进行操作或者是对更新前后的props进行比较，也可以选择在此处进行网络请求(根据props的变化)
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate', prevProps, prevState, snapshot)
    }

    // 5、组件从DOM中卸载掉，从dom中移除
    // componentWillUnmount会在组件卸载以及销毁之前直接调用
    // 在此处执行必要的清理操作，比如：定时器，网络请求或者是创建的消息订阅
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    //TODO: 不常用的生命周期
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        // 根据返回的布尔值，判断更新后是否重新执行render函数渲染
        return false
    }

    // 在React更新DOM之前回调的一个函数，可以获取DOM更新前的一些信息(比如滚动位置等)，该方法在componentDidUpdate之前
    getSnapshotBeforeUpdate(prevProps, prevState) {}


}

SubHome.prototype = {
    addClick: propType.func
}

export default SubHome
