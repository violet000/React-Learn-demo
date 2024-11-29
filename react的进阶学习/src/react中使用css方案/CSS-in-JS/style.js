import styled from 'styled-components'

// 1、基本使用
export const AppWrapper = styled.div`
  .title {
    color: #0962ec;
    font-size: 22px;
    background-color: #747171;
  }
  
  .sub-title {
    color: #1aacea;
    font-size: 18px;
  }
`

// 2、子元素单独抽取到一个样式组件
// 3、可以接受外部传入的props
// 4、使用这种做法最好的一点就是可以配合js动态的修改样式
// 5、可以通过attrs给标签模版字符串提供的属性
// 6、从一个单独的文件中引入变量
export const SectionWrapper = styled.div.attrs(props => ({
    tColor: props.color || 'green'
}))`
  .section {
    color: ${props.tColor};
    font-size: ${props => props.fontSize}px;
    font-weight: 700;
    
    &:hover {
      color: red;
    }
  }

  .inner-title {
    color: #747171;
  }
`
