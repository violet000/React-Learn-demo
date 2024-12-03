import {Component, Fragment} from 'react';
import {CSSTransition, SwitchTransition} from 'react-transition-group';
import './switch.css'
// SwitchTransition可以完成两个组件之间切换的炫酷动画
// 比如我们有一个按钮需要在on和off之间切换，我们希望看到on先从左侧退出，off再从右侧进入
// 这个动画在vue中被称之为 vue transition modes
// react-transition-group中使用SwitchTransition来实现该动画

// SwitchTransition中主要有一个属性：mode，有两个值
// in-out: 表示新组件先进入，旧组件再移除
// out-in: 表示旧组件先移除，新组件再进入

// 如何使用SwitchTransition？
// SwitchTransition组件里面要有CSSTransition或者Transition组件，不能直接包裹你想要切换的组件
// SwitchTransition里面的CSSTransition或者Transition组件不在像以前那样接受in属性来判断元素是何种状态，取而代之的是key属性

export class SwitchTransitionComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLogin: false
        }

    }

    render() {
        const { isLogin } = this.state
        return (
            <Fragment>
                <SwitchTransition mode='out-in'>
                    <CSSTransition
                        key={ isLogin ? 'exit' : 'login' }
                        classNames="login"
                        timeout={1000}
                    >
                        <div>
                            <button onClick={event => this.setState({ isLogin: !isLogin })}>
                                { isLogin ? '退出' : '登录' }
                            </button>
                            <div style={ { width: '400px', height: '100px', background: 'red' } }></div>
                        </div>
                    </CSSTransition>
                </SwitchTransition>
            </Fragment>
        );
    }
}
