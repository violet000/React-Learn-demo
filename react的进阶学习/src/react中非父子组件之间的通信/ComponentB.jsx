import {Component} from 'react';
import ThemeContext from './contexts/Context';

export class ComponentB extends Component {
    render() {
        // 写法1： 使用this.context去获取
        console.log(this.context)
        return (
            <h2>1111</h2>
        );
    }
}

ComponentB.contextType = ThemeContext
