import React from 'react';
import './App.css';
import Button1 from './components/Button1';
import Button2 from './components/Button2';
import ButtonSubText from './components/ButtonSubText'
import { OptionBar } from './components/OptionBar';
import { TextInput } from './components/TextInput';
import { COLORS } from './colors';
import ButtonWithImage from './components/ButtonWithImage';
import { Pagination } from './components/Pagination';

function App() {
  return (
    <div className="App">
      {/* Insert Test component Here :) */}
      <OptionBar text='Option 1' />
      <TextInput placeholder='Enter your Event Name'/>
      <h6>Button 1</h6>
      <Button1
        //color="primaryBlue"
        onClick={() => console.log("Click")}
        children="Get Started"
      />

      <h6>Button 2</h6>
      <Button2
        imagePath="https://cdn-icons-png.flaticon.com/512/3031/3031716.png"
        onClick={() => console.log("Click")}
      />
      <ButtonSubText
        //color="primaryBlue"
        onClick={() => console.log("Click")}
        children="Skip"
        subText="I already know my Event"
      />
      <ButtonWithImage
      children="Add Event"
      imagePath="https://cdn-icons-png.flaticon.com/512/3031/3031716.png"
      onClick={() => console.log("Click")}
      />
      <Pagination
      pages={5}
      currentPage={1}
      />

    </div>
  );
}

export default App;
