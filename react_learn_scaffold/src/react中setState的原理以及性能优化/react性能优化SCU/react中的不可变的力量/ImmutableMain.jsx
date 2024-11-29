import {PureComponent} from 'react';

// react中不可变的力量指的是react中的state

export class ImmutableMain extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            list: [1, 2, 3, 4, 5]
        }
    }

    changeState() {
        // 错误写法：这种方式不会修改成功的，因为this.state.list.push(6)这行代码会成功的push数据进去，然后再调用setState时，
        // 会去判断list和原来的list是否一样，因此，这样才导致两次判断一致，不会进行重新渲染
        // this.state.list.push(6)
        // this.setState({ list: this.state.list })

        // 正确写法:
        let arr = [...this.state.list]
        arr.push(6)
        this.setState({ list: arr })
    }

    addCounter(index) {
        let arr = [...this.state.list]
        arr[index]++
        this.setState(state => {
            return {
                list: arr
            }
        })
    }

    render() {
        const { list } = this.state

        return (
            <div>
                <ul>
                    {
                        list.map((item, index) => {
                            return (
                                <li key={index}>序号: {item} <button onClick={event => this.addCounter(index)}>+1</button> </li>
                            )
                        })
                    }
                </ul>
                <button onClick={event => this.changeState()}>修改</button>
            </div>
        );
    }
}
