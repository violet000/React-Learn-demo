import {Component} from 'react';
import get_time from '../utils/get_time';

class ComponentB extends Component {

    render() {
        const {difference} = this.props
        return (
            <div>
                <span>ComponentB组件渲染的差值时间：{ difference }ms</span>
            </div>
        );
    }
}

export default get_time(ComponentB)
