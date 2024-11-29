import {Component} from 'react';
import EventBus from './utils/eventBus';

export class ComponentB extends Component {

    // 处理发送的消息事件
    handleSendMessage(message) {
        console.log('已接收到消息: ', message)
    }

    componentDidMount() {
        EventBus.on('message', this.handleSendMessage)
    }

    componentWillUnmount() {
        EventBus.off('message', this.handleSendMessage)
    }


    render() {
        return (
            <h3>componentB组件</h3>
        );
    }
}
