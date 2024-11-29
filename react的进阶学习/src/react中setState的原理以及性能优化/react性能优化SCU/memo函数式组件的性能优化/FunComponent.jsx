// react中函数式组件没有生命周期
// 因此，需要使用memo进行包裹，这样如果没有修改到props的type，那么FunComponent这个组件是不会重新渲染的
import {memo} from 'react';

export const FunComponent = memo(
    (props) => {
        console.log('----函数式组件FunComponent的render函数执行')

        return (
            <div>
                { props.type === 'h2' ? <h2>h2的message</h2> : <h5>h5的message</h5> }
            </div>
        )
    }
)
