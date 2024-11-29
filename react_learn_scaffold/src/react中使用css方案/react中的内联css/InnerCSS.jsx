import {Component} from 'react';

// 内联css样式
export class InnerCSS extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fontSize: 20
        }
    }

    addFontSize() {
        this.setState({
            fontSize: this.state.fontSize + 2
        })
    }

    render() {
        const {fontSize} = this.state

        return (
            <div>
                <button onClick={event => this.addFontSize()}>增大字体号</button>
                <h2 style={ { color: 'red', fontSize: `${fontSize}px` } }>内联css样式</h2>
            </div>
        );
    }
}
