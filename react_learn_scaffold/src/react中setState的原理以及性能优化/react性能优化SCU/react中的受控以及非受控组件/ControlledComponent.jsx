import {PureComponent} from 'react';

export class ControlledComponent extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            username: ''
        }
    }

    changeText(e) {
        console.log('----', e.target.value)
        this.setState({
            username: e.target.value
        })
    }

    render() {
        const {username} = this.state
        return (
            <div>
                <input type='text' placeholder={'请输入用户名'} value={username} onChange={event => this.changeText(event)}/>
                <h2>username: {username}</h2>
            </div>
        )
    }
}
