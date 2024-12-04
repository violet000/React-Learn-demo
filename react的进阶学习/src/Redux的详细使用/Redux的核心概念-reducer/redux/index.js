const {createStore} = require('redux');


const initialState = {
    name: 'kyChen'
}

// 定义reducer函数，纯函数
function reducer() {
    return initialState
}

const store = createStore(reducer)

module.exports = {
    store
}
