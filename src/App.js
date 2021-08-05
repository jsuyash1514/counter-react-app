import logo from './logo.svg';
import './App.css';
import { Button } from './Button';
import { Display } from './Display';
import React from 'react';

function App() {
  let [count, setCount] = React.useState(0);
  let performClick = (delta) => setCount(count + delta);
  return (
    <div>
      <Button buttonText={1} onClickFunction = {performClick}/>
      <Button buttonText={2} onClickFunction = {performClick}/>
      <Button buttonText={5} onClickFunction = {performClick}/>
      <Button buttonText={10} onClickFunction = {performClick}/>
      <Button buttonText={100} onClickFunction = {performClick}/>
      <Display text={count}/>
    </div>
  );
}

export default App;
