import {createRef, PureComponent, forwardRef} from 'react';

// 如果是函数式组件
// 函数式组件没有实例对象，需要使用高级函数forwardRef
const World = forwardRef(function World(props, ref) {
    return (
        <div>
            <h3 ref={ref}>函数式组件</h3>
        </div>
    )
})

// 类式组件
class HelloWorld extends PureComponent {

    test() {
        console.log('子组件的方法')
    }

    render() {
        return (
            <h2>子组件</h2>
        )
    }
}

export class GetRefComponent extends PureComponent {
    constructor(props) {
        super(props);

        this.targetEl = createRef()
    }

    componentDidMount() {
        // this.targetEl.current.test()
        console.log('-----', this.targetEl.current)
    }

    render() {
        return (
            <div>
                {/*<HelloWorld ref={this.targetEl}></HelloWorld>*/}
                <World ref={this.targetEl}></World>
            </div>
        );
    }
}
