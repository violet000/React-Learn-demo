import {Component} from 'react';
import Comment from './pages/Comment';
import News from './pages/News';
import Translate from './pages/Translate';
import ThemeContext from './util/theme_context';
import ComponentA from './pages/theme/ComponentA';
import ComponentB from './pages/theme/ComponentB';
import ComponentC from './pages/theme/ComponentC';

export class AdvancedMain extends Component {
    render() {
        return (
            <div>
                <News></News>
                <Comment data={30}></Comment>
                <Translate></Translate>
                <ThemeContext.Provider value={ { color: 'red', fontSize: 30 } }>
                    <ComponentA></ComponentA>
                    <ComponentB></ComponentB>
                    <ComponentC></ComponentC>
                </ThemeContext.Provider>
            </div>
        );
    }
}
