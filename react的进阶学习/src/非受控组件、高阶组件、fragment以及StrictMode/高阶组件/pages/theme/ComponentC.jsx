import {Component} from 'react';
import withTheme from '../../util/with_theme';

class ComponentC extends Component {
    render() {
        const {color, fontSize} = this.props
        return (
            <div style={ {color, fontSize} }>
                ComponentC组件
            </div>
        );
    }
}

export default withTheme(ComponentC)
