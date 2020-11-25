import React from 'react'
export default class TestTwo extends React.Component{
  testMethods = () => {
    console.log('被父亲调用了')
  }
  render() {
    return(
      <div>
        1111
      </div>
    )
  }
}
