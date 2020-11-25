import React from 'react';
import { render } from 'react-dom';

function OneTimeButton(props) {
  return (
    <button onClick={props.onClick}>
      点我点我
    </button>
  )
}

function sayHi() {
  console.log('yo')
}

render(
  <OneTimeButton onClick={sayHi}/>,
  document.querySelector('#root')
)
