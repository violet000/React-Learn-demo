import {Component} from 'react';
// import {ComponentA} from './react中非父子组件之间的通信/ComponentA';
import {ComponentC} from './react中使用外置的事件总线/ComponentC';

class App extends Component {
    name = 'App'

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ComponentC />
        );
    }
}

export default App
