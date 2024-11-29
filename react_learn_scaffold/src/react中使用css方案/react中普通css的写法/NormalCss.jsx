import {Component} from 'react';
import './css/normal.css'
import {Test} from './Test'; // import 导入的话会造成css混乱，使用import导入会默认全局使用到
// 普通css的写法，都会属于全局的CSS，样式之间会相互影响

export class NormalCss extends Component {
    render() {
        return (
            <div className='font-color font-size font-weight'>
                普通的css
                {/* 子组件会同样的被样式类所覆盖到 */}
                <Test></Test>
            </div>
        );
    }
}
