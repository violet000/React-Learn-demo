import {Component} from 'react';

// TODO:类组件
// 1、组件的名称是大写字符开头的(无论是类组件还是函数组件)
// 2、类组件需要继承自React.Component
// 3、类组件必须实现render函数

// TODO:在es6之前，可以通过crate-react-class模版来定义类组件，但是目前使用class来定义

// TODO:使用class定义一个组件
// constructor是可选的，通常在其初始化一些数据
// this.state中维护的就是我们组件内部的数据
// render()方法就是class组件中唯一必须实现的方法

// TODO:render函数的返回值类型
// 1、div等dom元素节点
// 2、<App />等自定义组件
// 3、数组或者是fragments，返回多个元素
// 4、Portals，渲染子节点到不同的DOM树中

class MovieComponent extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <h2>测试</h2>
            </div>
        )
    }
}

export default MovieComponent
