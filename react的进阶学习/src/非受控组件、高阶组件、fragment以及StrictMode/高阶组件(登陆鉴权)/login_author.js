import {PureComponent} from 'react';

// 使用高阶组件实现登陆鉴权功能
function login_author(OriginComponent) {

    class NewComponent extends PureComponent {
        constructor(props) {
            super(props);
            this.state = {
                isLogin: true
            }
        }

        render() {
            const { isLogin } = this.state
            return (isLogin ? <OriginComponent { ...this.props } { ...this.state }></OriginComponent> : <h2>暂无查看权限！</h2>)
        }

    }

    return NewComponent
}

export default login_author
