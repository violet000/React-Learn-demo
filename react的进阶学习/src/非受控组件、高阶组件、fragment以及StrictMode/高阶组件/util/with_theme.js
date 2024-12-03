import ThemeContext from './theme_context';

function withTheme(OriginComponent) {
    const themeFun = (props) => {
        return (
            <div>
                <ThemeContext.Consumer>
                    {
                        value => {
                            return (
                                <OriginComponent { ...value } { ...props }></OriginComponent>
                            )
                        }
                    }
                </ThemeContext.Consumer>
            </div>
        )
    }
    return themeFun
}

export default withTheme
