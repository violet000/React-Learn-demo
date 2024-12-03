import {Component, createRef} from 'react';
import {CSSTransition} from 'react-transition-group';
import './transition.css'
// react-transition-group主要包含4个组件
// 1、Transition
//    该组件是一个和平台无关的组件(不一定要结合css)
//    在前端开发中，我们一般是结合css来完成样式，所以比较常用的是CSSTransition
// 2、CSSTransition
//    在前端开发中，通常使用CSSTransition来完成过渡动画效果
// CSSTransition是基于Transition组件构建的
// CSSTransition执行过程中，有三个状态：appear、enter、exit
// 它们有三种状态，需要定义对应的CSS样式：
// 第一类：开始状态，对应的类是 -appear 、 -enter 、 exit
// 第二类：执行动画：对应的类是 -appear-active、-enter-active、-exit-active
// 第三类：执行结束：对应的类是 -appear-done、-enter-done、-exit-done
// 对应的属性：
// 1、如果添加了unmountOnExit={true}, 那么组件会在执行退出动画结束后被移除
// 2、当in为true时，触发进入状态，会添加-enter、-enter-active的class开始执行动画，当动画执行结束后，会移除两个class，并且添加-enter-done的class
// 3、当in为false时，触发退出状态，会添加-exit、-exit-active的class开始执行动画，当动画执行结束后，会移除两个class，并且添加-enter-done的class

// 3、SwitchTransition
//    两个组件显示和隐藏切换时，使用该组件
// 4、TransitionGroup
//    将多个动画组件包裹在其中，一般用于列表中元素的动画

export class TransitionAnimation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isShow: false
        }
        this.sectionRef = createRef(); // 解决严格模式下报错
    }

    handleSwitch(e) {
        this.setState({
            isShow: !this.state.isShow
        })
    }

    render() {
        const { isShow } = this.state
        return (
            <>
                <button onClick={event => this.handleSwitch(event)}>切换</button>
                {/* CSSTransition的使用 */}
                <CSSTransition
                    nodeRef={this.sectionRef}
                    classNames='ky'
                    unmountOnExit={true}
                    in={isShow}
                    timeout={2000}
                    appear
                    onEnter={e => console.log('开始进入动画')}
                    onEntering={e => console.log('执行进入动画')}
                    onEntered={e => console.log('开始进入结束')}
                    onExit={e => console.log('开始离开动画')}
                    onExiting={e => console.log('执行离开动画')}
                    onExited={e => console.log('执行离开结束')}
                >
                    <div ref={this.sectionRef} style={ { width: '400px', height: '100px', background: '#ccc' } }>
                        内容
                    </div>
                </CSSTransition>
            </>
        );
    }
}
