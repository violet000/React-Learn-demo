import {Component, useState} from 'react';
import StyledButton from './share-theme';
import {darkTheme, lightTheme, theme} from './theme';
import {ThemeProvider} from 'styled-components';

// 实现主题的切换

export class Share extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isDarkTheme: false
        }
    }

    toggleTheme() {
        this.setState({
            isDarkTheme: !this.state.isDarkTheme
        })
    }

    render() {
        const { isDarkTheme } = this.state
        return (
            <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
                <div style={{ padding: '32px', backgroundColor: isDarkTheme ? darkTheme.colors.background : lightTheme.colors.background }}>
                    <h1 style={{ color: isDarkTheme ? darkTheme.colors.text : lightTheme.colors.text }}>
                        Dynamic Theme Switcher
                    </h1>
                    <StyledButton onClick={ e => this.toggleTheme() }>切换主题</StyledButton>
                </div>
            </ThemeProvider>
        );
    }
}
