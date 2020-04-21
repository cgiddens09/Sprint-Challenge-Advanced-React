import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Navbar from './components/navbar';
import {render, fireEvent} from '@testing-library/react';
import Players from './components/Players';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

test(`renders without crashing`, () => {
  render(<App/>);
})

test(`Displays Navigation`, ()=>{
  const nav = render(<Navbar />);
  nav.getByText("Players");
  
})

test("displays api", () => {
  const { getByTestId } = render(<Players />);
   getByTestId(/axios/i);
  
})
