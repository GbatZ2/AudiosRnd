import UseData from './CustomHooks/UseData'
import {AudioContext} from './Context/AudioContext'
import Body from './Components/BodyPage/Body/Body';
import Controller from './Components/Option/Controller';
import { useState } from 'react';

function App() {

  const [valor, setValor] = useState(null)
  const [timer, setTimer] = useState(null)
  const [time, setTime] = useState(null);
  const [visible, setVisible] = useState(true)

  const {audios} = UseData();




  return (
      <AudioContext.Provider value={{audios,time, setTime,timer,valor,setValor,setTimer,setVisible}}>
      <Body />


      {
        visible?<Controller/>:""
      }

      

      </AudioContext.Provider>
  );
}

export default App;
