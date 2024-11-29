import {createRef, PureComponent} from 'react';



export class GetDOM extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {}
        this.target = createRef()
        this.targetEl = null
    }

    componentDidMount() {
        this.getNativeDOM()
    }

    getNativeDOM() {
        // 1、在react元素上绑定一个ref字符, 但是已经被废弃了
        // console.log(this.refs.target)

        // 2、提前创建好ref对象，createRef()
        // console.log(this.target.current)

        // 3、方式三
        console.log(this.targetEl)
    }

    render() {
        return (
            <div>
                {/*    <h2 ref='target'>第一种方式</h2>     */}
                {/*    <h2 ref={this.target}>第二种方式</h2>    */}
                <h2 ref={el => { this.targetEl = el }}>第三种方式</h2>
            </div>
        );
    }
}
