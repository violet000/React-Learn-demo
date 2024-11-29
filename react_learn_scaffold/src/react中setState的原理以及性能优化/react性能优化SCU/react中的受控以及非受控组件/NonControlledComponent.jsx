import {Component} from 'react';

// react中的非受控组件(指的就是该组件不受react的控制---->指的是未在元素上绑定value属性)
export class NonControlledComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: ''
        }
    }

    handleChangeText(e) {
        // console.log('-----', e.target.value)
        this.setState(state => {
            return {
                username: e.target.value
            }
        }, () => {
            console.log(this.state.username)
        })
    }

    render() {

        const { username } = this.state

        return (
            <div>
                <input type='text' placeholder={'请输入用户名'} onChange={event => this.handleChangeText(event)} />
                <h2>username: {username}</h2>
            </div>
        );
    }
}
