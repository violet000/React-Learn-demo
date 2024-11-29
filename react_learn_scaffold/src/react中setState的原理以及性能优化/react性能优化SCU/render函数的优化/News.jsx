import {Component} from 'react';

export class News extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: '新闻页面'
        }
    }


    render() {
        console.log('---News中的render函数被执行了')
        const { message } = this.state

        return (
            <div>
                <h2>{ message }</h2>
            </div>
        );
    }
}
