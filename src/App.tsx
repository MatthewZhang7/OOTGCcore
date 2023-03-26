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
import { Slider } from './components/Slider';

function App() {
  return (
    <div className="App">
      <Slider values={[40.2,22.8,10,4]}/>
    </div>
  );
}

export default App;
