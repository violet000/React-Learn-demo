import {Component} from 'react';
import {flushSync} from 'react-dom';

/**
 * 1、setState的使用原理
 * 在内存地址中，对于原来初始化的对象，使用setState后，会在内存中开辟一个新的空间出来，使用Object.assign(oldState, newState)
 * 对于新的state数据进行覆盖合并
 */

export class UseSetState extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: 'test'
        }
    }

    changeText() {
        // setState可以传入一个回调函数
        // 好处一：可以在回调函数中编写新的state的逻辑
        // 好处二：当前的回调函数会将之前的state和props传递出来
        // this.setState((state, props) => {
        //     console.log(state, props)
        //
        //     // setState在react中的事件处理中是一个异步调用
        //     return {
        //         message: 'change'
        //     }
        // })

        // 如果希望数据更新之后，获取到对应的结果执行一些代码逻辑
        // 那么就可以传入第二个参数 ,回调函数callback

        // this.setState({
        //     message: 'async-change'
        // }, () => {
        //     console.log('===打印修改之后的结果', this.state.message)
        // })

        // 为什么setState设计为异步更新
        // 1、可以显著的提高性能
        // 2、如果每次调用setState都进行一次更新，意味着render函数都会被频繁的调用，界面重新渲染，这样效率很低
        // 3、异步之后可以获取多个更新，之后进行批量的更新
        // 如果同步更新了state，但是还没有执行render函数，那么state和props不能同步保持
        // this.setState((state) => {
        //     return {
        //         message: state.message + '1'
        //     }
        // })
        // this.setState((state) => {
        //     return {
        //         message: state.message + '2'
        //     }
        // })
        // this.setState((state) => {
        //     return {
        //         message: state.message + '3'
        //     }
        // }) // 执行了三遍的setState，依旧只会去执行一次render函数

        // 在react18之前，使用setTimeout宏任务, setState会被成为同步任务处理
        setTimeout(() => {
            flushSync(() => {
                this.setState({ message: 'flushSync-change' })
            })
            console.log(this.state.message)
        }, 0)

        console.log('------是否是先打印出来') // 先打印
    }


    render() {
        const { message } = this.state
        console.log('执行了render函数')
        return (
            <div>
                <h2>{message}</h2>
                <button onClick={e => this.changeText()}>修改文字内容</button>
            </div>
        );
    }
}
