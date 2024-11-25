import {Component} from 'react';
import ThemeContext from './contexts/Context';

export class ComponentC extends Component {
    render() {
        // 写法2：使用Consumer
        return (
            <div>
                {
                    <ThemeContext.Consumer>
                        {
                            value => {
                                return (<h2>{ value.color }</h2>)
                            }
                        }
                    </ThemeContext.Consumer>
                }
            </div>
        );
    }
}
