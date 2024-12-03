import {Component, Fragment} from 'react';

// 在开发的过程中，如果不希望组件的返回中包裹一个div元素
// 则可以使用Fragment替代
// Fragment允许你将子列表进行分组，而无需向DOM添加额外的节点

export class UseFragment extends Component {
    render() {
        return (
            // Fragment的语法糖写法 <> </>
            // TODO: 但是需要注意的是：如果遍历的时候需要添加key，则这个不能省略，需要完整的写完<Fragment>...</Fragment>
            // <Fragment>
            //     <h2>UseFragment组件</h2>
            //     <h3>组件内容</h3>
            // </Fragment>
            <>
                <h2>UseFragment组件</h2>
                <h3>组件内容</h3>
            </>
        );
    }
}
