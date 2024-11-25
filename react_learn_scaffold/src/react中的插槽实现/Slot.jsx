import {Component} from 'react';
import './styles/slot.css'
// react中的插槽
// 为了让组件的代码具有更强的通用性，不能将组件中的内容限制为固定的div、span等固定的dom元素
// 而是让使用者灵活的选取某块区域到底放什么内容

// TODO: 实现方案
// 1、组件的children子元素
// 2、props属性传递react元素

export class Slot extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // const { children } = this.props // 需要注意的是，大于1个插槽元素时，children是一个数组，但是只有一个插槽时，children是一个element元素
        const { leftContext, centerContext, rightContext } = this.props

        return (
            <div className='nav-bar'>
                {/*<div className='left'>{ children[0] }</div>*/}
                {/*<div className='center'>{ children[1] }</div>*/}
                {/*<div className='right'>{ children[2] }</div>*/}
                <div className='left'>{ leftContext }</div>
                <div className='center'>{ centerContext }</div>
                <div className='right'>{ rightContext }</div>
            </div>
        );
    }
}
