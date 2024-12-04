import {Component} from 'react';
import {store} from './redux';

// redux的核心概念
// 但是如何将state和action联系在一起呢？答案就是reducer
// reducer就是一个纯函数
// reducer做的事情就是将传入的state和action结合起来生成一个新的state

export class UseReducer extends Component {
    render() {
        console.log(store.getState())
        return (
            <>
                <h1>使用redux</h1>
            </>
        );
    }
}
