import UseData from './CustomHooks/UseData'
import {AudioContext} from './Context/AudioContext'
import Body from './Components/BodyPage/Body/Body';
import Controller from './Components/Option/Controller';
import { useState } from 'react';

function App() {


  const [time, setTime] = useState(false);


  const {audios} = UseData();




  return (
      <AudioContext.Provider value={{audios,time, setTime}}>
      <Body />
      <Controller/>
      </AudioContext.Provider>
  );
}

export default App;
