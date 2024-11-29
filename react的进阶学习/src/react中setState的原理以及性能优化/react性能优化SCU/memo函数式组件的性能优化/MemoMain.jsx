import {Component} from "react";
import {FunComponent} from './FunComponent';

export class MemoMain extends Component {

    constructor(props) {
        super(props);

        this.state = {
            type: 'h2',
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
        const { type, counter } = this.state
        console.log('----MemoMain组件的render函数执行')
        return (
            <div>
                <p>MAIN组件内容：{counter}</p>
                <button onClick={event => this.addCounter()}>+1</button>
                <FunComponent type={type}></FunComponent>
            </div>
        );
    }
}
