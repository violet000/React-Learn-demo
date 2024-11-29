import {Component} from 'react';
import styleB from './css/cmpB.module.css';

export class ModuleComponentB extends Component {
    render() {
        return (
            <div>
                <h2 className={styleB.title}>componentA</h2>
            </div>
        );
    }
}
