import {Component} from 'react';
import styleA from './css/cmpA.module.css'
import {ModuleComponentB} from '../componentB/ModuleComponentB';

export class ModuleComponentA extends Component {
    render() {
        return (
            <div>
                <h2 className={styleA.title}>componentA</h2>
                <ModuleComponentB></ModuleComponentB>
            </div>
        );
    }
}
