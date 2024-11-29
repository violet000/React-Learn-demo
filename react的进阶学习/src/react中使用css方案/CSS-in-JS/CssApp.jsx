import {Component} from 'react';
import {AppWrapper, SectionWrapper} from './style';

export class CssApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            color: '#ccc',
            fontSize: 50
        }
    }

    handleChangeColor() {
        this.setState({
            color: 'orange'
        })
    }

    render() {
        const { color, fontSize } = this.state

        return (
            <AppWrapper>
                <SectionWrapper color={color} fontSize={fontSize}>
                    <div>

                    </div>
                    <section>
                        <p className='section'>section的代码部分</p>
                        <h5 className='inner-title'>子标题</h5>
                    </section>
                </SectionWrapper>
                <button onClick={event => this.handleChangeColor()}>修改颜色</button>
                <h2 className='title'>标题</h2>
                <h3 className='sub-title'>副标题</h3>
            </AppWrapper>
        );
    }
}
