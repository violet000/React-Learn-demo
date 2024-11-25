import {Component} from 'react';
import SubHome from './SubHome';
import axios from 'axios';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            banners: [],
            recommends: [],
            counter: 100
        }
    }

    // 子组件传父组件的值
    addClick(count) {
        this.setState({
            counter: this.state.counter + count
        })
    }

    render() {
        const { banners, counter } = this.state
        return (
            <div>
                { banners.length && <SubHome addClick={ (count) => this.addClick(count) } banners={banners}></SubHome> }
                <h1>HOME</h1>
                <h1>{counter}</h1>
            </div>
        )
    }

    componentDidMount() {
        axios.get("http://123.207.32.32:8000/home/multidata").then(response => {
            const { banner, recommend } = response.data.data
            // this.setState 是异步的，因此当你调用 setState 后，立即访问 this.state.banners 时，它仍然是原来的值（[]）。更新后的状态不会立刻反映出来
            this.setState({ banners: banner.list, recommend: recommend.list }, () => {
                console.log(this.state.banners)
            })
        })

    }
}

export default Home
