import {PureComponent} from 'react';

function getTime(OriginComponent) {
    return class GetTime extends PureComponent {
        constructor(props) {
            super(props);
            this.state = {
                startTime: 0,
                endTime: 0,
                difference: 0
            }
        }

        UNSAFE_componentWillMount() {
            const startTime = new Date().getTime()
            this.setState({
                startTime: startTime
            })
        }

        componentDidMount () {
            const endTime = new Date().getTime()
            this.setState({
                endTime: endTime,
                difference: endTime - this.state.startTime
            })
        }

        render() {
            return <OriginComponent { ...this.props } { ...this.state }></OriginComponent>
        }

    }
}

export default getTime
