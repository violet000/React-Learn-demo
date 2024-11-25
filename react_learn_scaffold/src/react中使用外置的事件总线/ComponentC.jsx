import {Component} from 'react';
import {ComponentA} from './ComponentA';
import {ComponentB} from './ComponentB';

export class ComponentC extends Component {
    render() {
        return (
            <div>
                <ComponentA></ComponentA>
                <ComponentB></ComponentB>
            </div>
        );
    }
}
