import {Component} from 'react';
import {Slot} from './Slot';

// 使用插槽对子组件进行使用

export class SlotMain extends Component {
    render() {
        return (
            <div>
                <Slot>
                    { /* 方案一：直接通过children插入  */ }
                    <button>按钮1</button>
                    <h2>内容2</h2>
                    <i>斜体3</i>
                </Slot>

                { /* 方案二：使用props进行插入 */ }
                <Slot
                    leftContext={<button>按钮1</button>}
                    centerContext={<h2>内容2</h2>}
                    rightContext={<i>斜体3</i>}
                ></Slot>
            </div>
        );
    }
}
