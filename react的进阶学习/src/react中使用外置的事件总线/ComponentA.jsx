import {Component} from 'react';
import EventBus from './utils/eventBus';

export class ComponentA extends Component {

    sendMessage() {
        EventBus.emit('message', '推送消息: 搬运任务条数2条.')
    }

    render() {


        return (
            <div>
                <h2>componentA组件</h2>
                <button onClick={this.sendMessage}>send message</button>
            </div>
        );
    }
}
