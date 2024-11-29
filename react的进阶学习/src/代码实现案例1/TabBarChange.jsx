import {Component} from 'react';
import {CommonTab} from './components/CommonTab';

// 实现案例功能点分析
// 1、使用插槽对不同的tabbar进行切换
// 2、选中不同的导航栏，对应展示不同的导航区

export class TabBarChange extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tabList: ['首页', '精选', '服饰', '生鲜', '娱乐'],
            showAreaIndex: 0
        }
    }

    // 监听子组件的索引值
    sendInd(index) {
        this.setState({
            showAreaIndex: index
        })

    }

    render() {
        const { tabList, showAreaIndex } = this.state

        // 不同索引插入不同内容
        const showArea = (
            <div>{ showAreaIndex }</div>
        )

        return (
            <div>
                <CommonTab tabList={tabList} showArea={showArea} sendInd={(current) => this.sendInd(current)} />
            </div>
        );
    }
}
