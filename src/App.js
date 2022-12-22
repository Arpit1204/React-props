/* eslint-disable jsx-a11y/alt-text */
// import { render } from '@testing-library/react';
import './App.css';


function App(props) {
  return(
    <div className='App'>
      <h1>Kalvium Gallery</h1>
      <div className='images'>
        {props.image.map((e)=>{
          return <img src= {e.img} alt = 'Elephant Art'/>;
        })}
      </div>
    </div>
  )
}

export default App;
