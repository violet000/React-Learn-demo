import {Component, PureComponent} from 'react';

function enhance_props(OriginComponent) {

    class NewComponent extends PureComponent {
        constructor(props) {
            super(props)

            this.state = {
                userInfo: {
                    name: 'kyChen',
                    age: 24,
                    address: 'china'
                }
            }
        }

        render() {
            return <OriginComponent { ...this.props } { ...this.state }></OriginComponent>
        }
    }

    return NewComponent
}

export default enhance_props
