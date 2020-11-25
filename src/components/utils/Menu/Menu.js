//菜单组件
import React from 'react'
import {useImperativeHandle,forwardRef} from 'react'
export default class Menu extends React.Component {
  // 初始化级别的周期函数
  getInitialState(){
    console.log('getInitialState生命周期执行了')
  }
  componentWillMount(props){
    console.log('componentWillMount生命周期执行了')
    console.log(props)
    // console.log(document.getElementsByClassName('.main'))
  }
  componentDidMount(props){
    console.log('componentDidMount生命周期执行了')
    console.log(props)
    // console.log(document.getElementsByClassName('.main'))
  }
  componentDidMount(){
    console.log('componentDidMount生命周期执行了')
    // 一般异步写在这里
  }

  // 更新级别的周期函数
  componentWillReceiveProps(nextProps){
    // 这里是 传入的props改变了，才会触发
    console.log('组件接受了新的props')
    // console.log(nextProps)
  }
  shouldComponentUpdate(nextProps, nextState){
  /*react性能优化非常重要的一环。
  组件接受新的state或者props时调用，
  我们可以设置在此对比前后两个props和state是否相同，
  如果相同则返回false阻止更新，因为相同的属性状态一定会生成相同的dom树，
  这样就不需要创造新的dom树和旧的dom树进行diff算法对比，节
  省大量性能，尤其是在dom结构复杂的时候*/
    // if(nextProps.someThings === this.props.someThings){
    //   return false
    // }

    console.log('6666666666666666')
    console.log(nextProps)
    console.log(nextState)
    return false

  }
  constructor(props) {
    console.log(props)
    //不手动super(props)的话，默认会调用React.Component中不带参数的construction()
    //而React.Component的construction(props)中有this.props = props
    super(props);
    this.state = {
      arr:[],
      msg:'子组件新的值',
      test:'0000'
    }
  }
  setStateMe = () => {
    this.setState({
      test:'1111'
    })
  }
  initFormList = () => {
    const arr = this.props.menuArray;//获取父组件值
    return arr.map((item) => {
      return <li style={{float:'left',marginLeft:'20px'}} key={item.id}>{item.name}</li>
    })
  }
  commitChange = () => {
    // this.props.changeArr(text);
    this.props.callback(this.state.msg)
  }
  getFather = ()=> {
      console.log('被父组件调用了')
  }
  render() {
    // 此处不能修改state
    console.log('Menu的Render执行了')
    console.log(this)
    return (<div className='main'>
      <div style={{width:'80%',margin:'auto'}}>
        <div style={{float:'left', cursor: 'pointer'}} onClick={()=>{this.commitChange()}}>
          {/*XX网站11*/}
        </div>
        <span onClick={()=> {this.setStateMe()}}>
          触发优化周期
        </span>
        <ul style={{listStyle:'none',margin:'0 auto',float:'right'}}>
          { this.initFormList() }
        </ul>
      </div>
    </div>)
  }
  cacheOptions = ()=> {
    // 定义容器
    let fragment = document.createDocumentFragment()
    const items = [0,1,2,3,4,5,6]
    for (let i = 0; i < items.length; i++) {

    }
  }
}
