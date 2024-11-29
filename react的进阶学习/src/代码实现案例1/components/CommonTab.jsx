import {Component} from 'react';
import '../css/tab-bar.css'

export class CommonTab extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentIndex: 0
        }
    }

    changeTab(index) {
        this.setState({ currentIndex: index })
        this.props.sendInd(index)
    }

    render() {
        const { tabList, showArea } = this.props
        const { currentIndex } = this.state
        const width = (100 / tabList.length) + '%'

        return (
            <div>
                <div className='tab-bar'>
                    {
                        tabList.map((item, index) => {
                            return (
                                <div style={{width: width} } key={index} className={ index === currentIndex ? 'sub-tab-bar active' : 'sub-tab-bar' } onClick={e => this.changeTab(index)}>{item}</div>
                            )
                        })
                    }
                </div>
                <div className='tab-content'>
                    { showArea }
                </div>
            </div>
        );
    }
}
