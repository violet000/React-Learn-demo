import {Component, PureComponent} from 'react';

// 高阶函数：接收另外一个函数作为参数调用/返回一个函数被外界函数调用 就被称之为高阶函数
// 情况1：接收另外一个函数作为参数调用
// function foo(fn) {
//     let userAge = 23;
//     setTimeout(() => {
//         fn()
//     }, 3000)
// }
//
// foo(function getAge() { ... })

// 情况2：返回一个函数被外界函数调用
// function foo2() {
//     return function bar() {
//         ...
//     }
// }
//
// const foo3 = foo2()

// 高阶组件 Higher-Order-Component
// 官方定义：高阶组件是参数为组件，返回值为新组件的函数
// 首先，高阶组件不是一个组件，而是一个函数
// 其次，这个函数的本身是一个组件，返回值也是一个组件

// 定义一个高阶组件, 高阶组件一般用于对别的组件进行拦截操作
// 高阶组件并不是react的一部分，它是基于react的组合特性而形成的一种设计模式
// 高阶组件在一些react的第三方库中非常常见：
// 比如：redux中的connect
// 以及react-router中的withRouter
function hoc(Cpn) {
    class NewCpn extends PureComponent {
        render() {
            return <Cpn></Cpn>
        }
    }

    return NewCpn
}

class Demo extends PureComponent {
    render() {
        return <h2>高阶组件</h2>
    }
}

const NewCpn = hoc(Demo)

export class AdvancedComponent extends PureComponent {



    render() {
        return (
            <NewCpn />
        );
    }
}
