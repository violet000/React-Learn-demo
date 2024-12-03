import {Component} from 'react';
import enhance_props from '../util/enhance_props';

class Comment extends Component {

    render() {
        
        const { userInfo, data } = this.props
        return (
            <div>
                <h1>姓名：{ userInfo.name }</h1>
                <h1>年龄：{ userInfo.age }</h1>
                <h1>地址：{ userInfo.address }</h1>
                <h1>数据源: { data }</h1>
            </div>
        );
    }
}

export default enhance_props(Comment)
