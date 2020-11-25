import React from 'react'
export default class TestOne extends React.Component{
  constructor(props) {
    console.log(props)
    super(props);
  }
  getPropsMe = ()=> {
    console.log(this)
  }


  render() {
    return <div>
      <h3 onClick={() => {this.getPropsMe()}}>
        testOne的标题
      </h3>
    </div>
  }
}
