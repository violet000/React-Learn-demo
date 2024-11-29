import {Component} from 'react';
import {News} from './News';
import {Recommend} from './Recommend';

export class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
            message: 'aaa'
        }
    }

    addCounter() {
        // 如果这样写，子组件也会被重新渲染了一遍，因此，存在性能优化的空间
        this.setState((state) => {
            return {
                counter: state.counter + 1
            }
        })
    }

    changeText() {
        this.setState(state => {
            return {
                message: state.message
            }
        })
    }

    // SCU优化方案：配合使用shouldComponentUpdate对组件的render函数进行性能优化
    // 该方法有两个参数：
    // 参数一：nextProps 修改之后最新的props属性
    // 参数二：nextState 修改之后最新的state属性

    // 该方法返回值是一个boolean类型
    // 返回值为true, 那么就需要调用render方法
    // 返回值为false, 那么就不需要调用render方法
    // 返回值为true, 也就是只要state发生改变，就会调用render方法
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextState.message !== this.state.message;
    }

    render() {
        console.log('---Main中的render函数被执行了')
        // Main组件中执行完组件之后，打印出来的结果为：
        // ---Main中的render函数被执行了
        // ---News中的render函数被执行了
        // ---Recommend中的render函数被执行了

        // TODO： 如果只修改Main组件的内容
        const { counter, message } = this.state

        return (
            <div>
                <h2>Main组件中的计数器: {counter}</h2>
                <h3>Main组件中的message: {message}</h3>
                <button onClick={event => this.addCounter()}>+1</button>
                <button onClick={event => this.changeText()}>修改文字</button>
                <News />
                <Recommend />
            </div>
        );
    }
}
