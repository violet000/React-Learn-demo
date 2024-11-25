// 定义一个函数式组件

// TODO: 函数式组件是使用function来进行定义的函数，只是这个函数会返回和类组件中的render函数返回值一样

// TODO: 函数组件有自己的特点
// 没有生命周期，也会被更新并且挂载，但是没有生命周期函数
// this关键字不能指向组件实例，因为没有实例
// 没有内部状态(state)

function GetInfo() {
    return (
        <h2>函数式组件的返回值</h2>
    )
}

export default  GetInfo
