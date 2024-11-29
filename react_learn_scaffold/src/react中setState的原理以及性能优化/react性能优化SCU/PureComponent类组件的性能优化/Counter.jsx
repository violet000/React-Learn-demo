import {PureComponent} from 'react';

export class Counter extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        console.log('-----Counter组件render函数执行')

        return (
            <div>
                <div style={ { width: '100px', height: '40px', background: '#ccc', color: 'red' } }>计数器组件</div>
            </div>
        );
    }
}
