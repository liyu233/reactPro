import TestOne from 'components/utils/Menu/TestOne';

require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
// import {
//   Route,
//   Switch,
//   Link,
//   Redirect,
//   NavLink,
//   BrowserRouter as Router
// } from 'react-router-dom'
import Menu from 'components/utils/Menu/Menu.js';
import MenuWithoutStatus from 'components/utils/Menu/MenuWithoutStatus'
// import RouterShow from 'components/utils/Menu/RouterShow';
import TestTwo from 'components/utils/Menu/TestTwo';
import {useRef} from 'react'
// import RouterShow1 from 'components/utils/Menu/RouterShow1';

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      msg:'aaaa1',
      name:'菜单',
      text:'222',
      menuArray:[
        {
          id:0,
          name:'首页'
        },
        {
          id:1,
          name:'菜单页面1'
        },
        {
          id:2,
          name:'菜单页面2'
        },
        {
          id:3,
          name:'菜单页面3'
        }
      ],
      showMenu: false
    }
  }
  componentWillMount(props){
    console.log('Main生命周期执行了')
    console.log(props)
  }
  controllChild=()=>{
    const childRef = useRef();
    childRef.current.getInfo();
  }
  /*传递给子组件值-回调函数方式传递*/
  //父组件回调函数，更新state，进而更新父组件。
  callback=(msg)=>{
    // setState方法,修改msg参数,值是由子组件传过来。
    console.log('被子组件调用了')
    this.setState({
      msg:msg
    })
  }

  changeArr = (text) => {
    this.setState({
      text: text
    })
  }
  getChlidrenMethods = ()=> {
    this.refs.test.testMethods()
    // this.refs.MenuWithoutStatus.initSom()
  }
  changeOptionParams(){
    this.setState({
      name:'LYYYYYY'
    })
  }
  changeChildrenParams = ()=> {
    this.setState({
      name: 'liyu'
    })
  }
  render() {
    return (
      <div className="index">
        {/*菜单*/}
        <Menu ref='menu' title = "p" name = "LY" menuArray={this.state.menuArray} callback={this.callback}   />{/*为子组件赋值*/}
        {this.state.showMenu && <Menu ref='menu' title = "p" name = "LY" menuArray={this.state.menuArray} callback={this.callback}   />}
        {/*<div></div>

        <div>{false}</div>

        <div>{null}</div>

        <div>{undefined}</div>

        <div>{true}</div>*/}

        <MenuWithoutStatus  msg={this.state.msg} />

        <button onClick={()=>{this.getChlidrenMethods()}}>调子组件</button>
        <br/>
        <button onClick={()=> {this.changeOptionParams()}}>修改props触发的周期函数的调用</button>
        <br/>
        <TestOne name={this.state.name} />
        <br/>
        ================
        <TestTwo ref="test" />
        <button onClick={()=> {this.changeOptionParams()}}>触发周期函数</button>
        {/*页脚*/}
        <div className="notice">
          Please edit
            <code>
              src/components/Main.js
            </code>
          to get started!{ this.state.text }
          <br/>
          传值显示：
          {this.state.msg}
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
