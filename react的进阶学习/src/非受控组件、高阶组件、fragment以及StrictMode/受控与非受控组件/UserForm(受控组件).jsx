import {memo, useState} from 'react';

// TODO: 受控组件(受react中的state去控制状态)
// 在react中，可变状态通常保存在组件的state属性中，并且只能通过使用setState()去更新状态
// 也就是说，react中的state是唯一的数据源
// 渲染表单的react组件还控制着用户输入过程中表单发生的操作
// 被react以这种方式控制取值的表单输入元素就叫做"受控组件"
//
// 由于在表单元素上设置了value属性，因此显示的值将始终为this.state.value，这使得react的state是唯一的数据源
// 由于handleChange在每次按键时都会执行并且更新react中的state，因此显示的值将随着用户的输入而更新

// TODO: 使用函数式创建表单组件(输入框、复选框、多选框、多选下拉框)
export const UserForm = memo(() => {

    // 使用 useState 管理一个对象作为状态
    const [userInfo, setUserInfo] = useState({
        name: '',
        password: '',
        isAgree: false,
        hobbies: [
            { value: 'sing', label: '唱歌', isChecked: false },
            { value: 'dance', label: '跳舞', isChecked: false },
            { value: 'eat', label: '吃饭', isChecked: false },
            { value: 'jump', label: '蹦极', isChecked: false }
        ],
        sujectList: []
    });

    // 监听输入框内容
    const handleChangeInput = (e) => {
        // console.log('1', e.target.name, e.target.checked)
        setUserInfo(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))

    }

    // 监听复选框
    const handleChangeCheckBox = (e) => {
        setUserInfo(prevState => ({
            ...prevState,
            [e.target.name]: e.target.checked
        }))
    }

    // 选择兴趣爱好
    const handleChangeHobbies = (e, index) => {
        const list = userInfo.hobbies
        list[index].isChecked = e.target.checked
        setUserInfo(prevState => ({
            ...prevState,
            hobbies: list
        }))
    }

    // 下拉框的多选
    const handleSelect = (e) => {
        // 可以使用Array.from将类数组转为真正意义上的数组
        // Array.from函数的第二个参数可以传入一个map函数
        const selectedOptions = Array.from(e.target.selectedOptions, item => item.value)
        setUserInfo(prevState => ({
            ...prevState,
            sujectList: selectedOptions
        }))
    }

    // 提交表单
    const handleSubmit = (e) => {
        e.stopPropagation()
        e.preventDefault()

        const hobbies = userInfo.hobbies.filter(t => t.isChecked).map(u => u.value)
        console.log(Object.assign(userInfo, { hobbies }))
    }

    return (
        <div>
            <form onSubmit={event => handleSubmit(event)}>
                <div className="username">
                    <label htmlFor="name">输入用户名: </label>
                    <input type="text" name="name" id="name" onChange={event => handleChangeInput(event)} value={userInfo.name} required/>
                </div>
                <div className="password">
                    <label htmlFor="name">输入密码: </label>
                    <input type="password" name="password" id="password" onChange={event => handleChangeInput(event)} value={userInfo.password} required/>
                </div>
                <div className="checkbox">
                    <label htmlFor="checkbox">选择爱好: </label>
                    <div>
                        {
                            userInfo.hobbies.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <input type="checkbox" name={item.value} id={item.value} onChange={event => handleChangeHobbies(event, index)} checked={item.isChecked} />
                                        {item.label}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='study'>
                    <label htmlFor='study'>爱好科目：</label>
                    <div>
                        <select name="study" id="study" multiple={true} onChange={event => handleSelect(event)}>
                            <option value="">--请选择爱好的科目--</option>
                            <option value="chinese">语文</option>
                            <option value="math">数学</option>
                            <option value="physics">物理</option>
                            <option value="geography">地理</option>
                            <option value="politics">政治</option>
                            <option value="english">英语</option>
                        </select>
                    </div>
                </div>
                <div className="document">
                    <label htmlFor="isAgree">
                        <input type="checkbox" name="isAgree" id="isAgree" onChange={event => handleChangeCheckBox(event)} checked={userInfo.isAgree} required/>
                        <span>是否同意协议</span>
                    </label>
                </div>
                <div className="submit">
                    <input type="submit" value={'提交'}/>
                </div>
            </form>
        </div>
    )
})
