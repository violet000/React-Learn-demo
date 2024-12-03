import {Component} from 'react';
import login_author from '../login_author';

export const Shop = login_author(class Shop extends Component {
    render() {
        return (
            <div>
                购物组件
            </div>
        );
    }
})
