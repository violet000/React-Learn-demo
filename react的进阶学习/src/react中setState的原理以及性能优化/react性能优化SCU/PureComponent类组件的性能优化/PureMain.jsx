import {Component, PureComponent } from 'react';
import {Counter} from './Counter';

// PureComponent组件实现的是SCU的优化方案
// react中内部帮助我们实现了dom的更替diff，从而来判断哪些组件是需要重新被执行渲染的
// TODO：需要注意的是，PureComponent内部是进行的浅层比较，也就是只比较第一层，不会进行深层次的比较，这个在使用中需要进行注意

// 纯组件
export class PureMain extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0
        }
    }

    addCounter() {
        this.setState(state => {
            return {
                counter: state.counter + 1
            }
        })
    }

    render() {
        console.log('-----PureMain组件render函数执行')
        const { counter } = this.state

        return (
            <div>
                <h2>计数器: { counter }</h2>
                <button onClick={event => this.addCounter()}>counter + 1</button>
                <Counter />
            </div>
        );
    }
}
