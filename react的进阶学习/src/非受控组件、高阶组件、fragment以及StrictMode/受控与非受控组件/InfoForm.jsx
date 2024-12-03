import {Component} from 'react';

// TODO: 非受控组件(使用ref来获取dom节点)
// react推荐大多数的情况下使用，受控组件来处理表单的数据
// 一个受控组件中，表单数据是由react组件来管理的
// 另一种替代方案是使用非受控组件，这时表单数据将由DOM节点来处理

export class InfoForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            passWord: ''
        }
        this.inputUser = null
        this.inputPsd = null
    }

    componentDidMount() {
        console.log(this.inputUser)

        this.inputUser.addEventListener('input', (event) => {
            console.log(event.target.value)
        })

        this.inputPsd.addEventListener('input', (event) => {
            console.log(event.target.value)
        })
    }

    render() {

        const { userName, passWord } = this.state

        return (
            <div>
                <input type='text' placeholder={'请输入用户名'} defaultValue={userName} ref={el => this.inputUser = el}/>
                <input type='text' placeholder={'请输入密码'} defaultValue={passWord} ref={el => this.inputPsd = el}/>
            </div>
        );
    }
}
