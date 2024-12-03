import {Component} from 'react';

// StrictMode是一个用来突出显示应用程序中潜在问题的工具
// 1、严格模式下会识别不安全的生命周期
// 2、使用过时的ref以及API
// 3、检查意外的副作用
//      组件的constructor会被调用2次
//      这是严格模式下故意进行的操作，让你来查看在这里写的一些代码逻辑被多次调用时，是否会产生副作用
//      在生产环境中，是不会被调用2次的
// 4、使用废弃的findDOMNode方法
//      在之前的react api中，可以通过findDOMNode来获取DOM，不过已经不推荐使用了
// 5、检测过时的api

export class UseStrictMode extends Component {

    constructor() {
        super();
        console.log('打印了一次生命周期') // 开启严格模式后，生命周期和构造函数会执行2次
    }

    render() {
        return (
            <>
                <span>代码测试</span>
            </>
        );
    }
}
