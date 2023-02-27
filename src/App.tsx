import React from 'react';
import './App.css';
import { OptionBar } from './components/OptionBar';
import { TextInput } from './components/TextInput';

function App() {
  return (
    <div className="App">
      {/* Insert Test component Here :) */}
      <OptionBar text='Option 1' />
      <TextInput placeholder='Enter your Event Name'/>
    </div>
  );
}

export default App;
