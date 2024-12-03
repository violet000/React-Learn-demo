import {Component} from 'react';
import ComponentA from './pages/ComponentA';
import ComponentB from './pages/ComponentB';

export class GetTime extends Component {
    render() {
        return (
            <div>
                <ComponentA></ComponentA>
                <ComponentB></ComponentB>
            </div>
        );
    }
}
