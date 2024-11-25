import {Component} from 'react';
import {ComponentB} from './ComponentB';
import {ComponentC} from './ComponentC';
import {ComponentD} from './ComponentD';
import ThemeContext from './contexts/Context';


export class ComponentA extends Component {
    constructor() {
        super();
        this.state = {
            theme: {color: 'red', age: 20}
        }
    }


    render() {
        const {theme} = this.state
        return (
            <div>
                <ThemeContext.Provider value={ theme }>
                    <ComponentB></ComponentB>
                    <ComponentC></ComponentC>
                    <ComponentD></ComponentD>
                </ThemeContext.Provider>
            </div>
        );
    }
}
