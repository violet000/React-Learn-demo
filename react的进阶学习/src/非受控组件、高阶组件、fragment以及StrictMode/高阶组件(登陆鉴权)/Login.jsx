import {Component} from 'react';
import {Shop} from './pages/Shop';
import {ShopCar} from './pages/ShopCar';
import CheckAcount from './pages/CheckAcount';

export class Login extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div >
                <Shop></Shop>
                <CheckAcount></CheckAcount>
                <ShopCar></ShopCar>
            </div>
        );
    }
}
