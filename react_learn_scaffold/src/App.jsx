import {Component} from 'react';
// import {MemoMain} from './react中setState的原理以及性能优化/react性能优化SCU/memo函数式组件的性能优化/MemoMain';
// import {ImmutableMain} from './react中setState的原理以及性能优化/react性能优化SCU/react中的不可变的力量/ImmutableMain';
// import {GetDOM} from './react中setState的原理以及性能优化/react性能优化SCU/ref获取DOM操作/GetDOM';
// import {GetRefComponent} from './react中setState的原理以及性能优化/react性能优化SCU/ref获取组件/GetRefComponent';
// import {ControlledComponent} from './react中setState的原理以及性能优化/react性能优化SCU/react中的受控以及非受控组件/ControlledComponent';
// import {NonControlledComponent} from './react中setState的原理以及性能优化/react性能优化SCU/react中的受控以及非受控组件/NonControlledComponent';
// import {InnerCSS} from './react中使用css方案/react中的内联css/InnerCSS';
// import {NormalCss} from './react中使用css方案/react中普通css的写法/NormalCss';
// import {ModuleComponentA} from './react中使用css方案/CSS的Modules的写法/componentA/ModuleComponentA';
// import {CssApp} from './react中使用css方案/CSS-in-JS/CssApp';
// import {Share} from './react中使用css方案/共享主题的变量数据/Share';
import {UseClassnames} from './react中使用css方案/react中使用classnames动态添加class类/UseClassnames';
// import {ComponentA} from './react中非父子组件之间的通信/ComponentA';
// import {ComponentC} from './react中使用外置的事件总线/ComponentC';
// import {UseSetState} from './react中setState的原理以及性能优化/setState的详细使用/UseSetState';
// import {Main} from './react中setState的原理以及性能优化/react性能优化SCU/render函数的优化/Main';
// import {PureMain} from './react中setState的原理以及性能优化/react性能优化SCU/PureComponent组件/PureMain';

class App extends Component {
    name = 'App'

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <UseClassnames />
        );
    }
}

export default App
