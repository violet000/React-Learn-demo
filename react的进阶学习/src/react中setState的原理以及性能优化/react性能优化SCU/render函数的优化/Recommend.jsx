import {Component} from 'react';

export class Recommend extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: '评论页面'
        }
    }


    render() {
        console.log('---Recommend中的render函数被执行了')
        const { message } = this.state

        return (
            <div>
                <h2>{message}</h2>
            </div>
        );
    }
}
