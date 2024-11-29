import {Component} from 'react';
import classNames from 'classnames';

export class UseClassnames extends Component {
    constructor(props) {
        super(props);
        this.state = {
            classList: ['bbb', 'ccc', 'ddd']
        }
    }

    render() {
        const { classList } = this.state

        return (
            <div>
                <h2 className={classNames('aaa', ...classList)}>使用classnames动态的添加类名</h2>
            </div>
        );
    }
}
