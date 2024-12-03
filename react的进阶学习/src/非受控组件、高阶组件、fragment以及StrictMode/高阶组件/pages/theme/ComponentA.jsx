import {Component} from 'react';
import withTheme from '../../util/with_theme';

class ComponentA extends Component {
    render() {
        const { color, fontSize } = this.props
        return (
            <div style={ { color, fontSize } }>
                ComponentA组件
            </div>
        );
    }
}

export default withTheme(ComponentA)
