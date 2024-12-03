import {PureComponent} from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import './book.css'

// 常用于列表的动画

export class TransitionGroupComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            books: [
                { name: '你不知道的js(上册)', price: 78 },
                { name: 'js高级程序设计', price: 88 },
                { name: 'vuejs高级设计', price: 98 },
                { name: 'reactjs入门', price: 108 }
            ]
        }
    }

    addBooks() {
        let list = this.state.books
        list = [...list, { name: '你不知道的js(下册)', price: 118 }]
        this.setState({
            books: list
        })
    }

    render() {
        const { books } = this.state
        return (
            <>
                <h2>书籍列表</h2>
                <TransitionGroup component='ul'>
                    {
                        books.map((item, index) => {
                            return (
                                <CSSTransition
                                    key={index}
                                    classNames='book'
                                    timeout={1000}
                                >
                                    <li key={index}>书籍名称：{ item.name }, 书籍价格：{ item.price }</li>
                                </CSSTransition>
                            )
                        })
                    }
                </TransitionGroup>
                <button onClick={event => this.addBooks()}>添加书籍</button>
            </>
        )
    }
}
