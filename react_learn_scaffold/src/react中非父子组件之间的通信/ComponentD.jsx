import {Component} from 'react';

/**
 * React.createContext
 * 1、创建一个需要共享的Context对象
 * 2、如果一个组件订阅了Context，那么这个组件会从离自身最近的那个匹配的Provider中读取到当前的context值
 * 3、defaultValue是组件在顶层查找过程中没有找到对应的Provider，那么使用默认值
 *    const MyContext = React.createContext(defaultValue);
 *
 * Context.Prrovider
 * 1、每个Context对象都会返回一个Provider React组件，它允许消费组件订阅context的变化
 * 2、Provider接收一个value属性，传递给消费组件、
 * 3、一个Provider可以和多个消费组件有对应关系
 * 4、多个Provider也可以嵌套使用，里层的会覆盖外层的数据
 * 5、当Provider的value值发生变化时，它内部的所有消费组件都会被重新渲染
 *
 * Class.contextType
 * 1、挂载在class上的contextType属性都会被重新赋值为一个由React.createContext()创建的Context对象
 * 2、这能让你使用this.context来消费最近Context上的那个值
 * 3、你可以在任何生命周期中来访问到它，包括render函数
 * MyClass.contextType = MyContext
 *
 * Context.Consumer
 * 1、这里的React组件也可以订阅到context变更，这能让你在函数式组件中完成订阅context
 * 2、这里需要函数作为子元素的
 * 3、这个函数接收当前的context值，返回一个React节点
 */

export class ComponentD extends Component {
    render() {
        return (
            <h2>ComponentD</h2>
        );
    }
}
