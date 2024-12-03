import {Component} from 'react';
import {createPortal} from 'react-dom';

// 某些情况下，我们希望渲染的内容独立于父组件，甚至是独立于当前挂载到的DOM元素中(默认都是挂载到id为root的DOM元素上的)
// Portal提供了一种将子节点渲染到存在于父组件以外的DOM节点的优秀的方案
// 1、第一个参数是任何可渲染的react子元素，例如：一个元素，字符串或fragment
// 2、第二个参数是一个DOM元素

export class Portals extends Component {
    render() {
        return (
            <div>
                <h1>挂载在root</h1>
                {
                    createPortal(<h2>挂载在kyChen</h2>, document.querySelector('#kyChen'))
                }
            </div>
        );
    }
}
