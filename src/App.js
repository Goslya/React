import { useState } from "react";
import './App.css';
import ButtonView from './components/ButtonView'
import Timer from './components/Timer'

const MinSecs = { minutes: 3, seconds: 0 }

function App() {

  const [selectedButton, setSelectedButton] = useState(null)
  const [[mins, secs], setTime] = useState([MinSecs.minutes, MinSecs.seconds])
  
  function handleSubmit(e) {
    if (selectedButton === null){
      e.preventDefault()
    } else{

      
      const time = MinSecs.minutes*60+MinSecs.seconds-mins*60-secs
      
      console.log('sending ', {selectedButton, time})
    }
}


  return (
    <>
      <div className={'text-center text-4xl mt-14'}>
        <Timer MinSecs={MinSecs} mins={mins} secs={secs} setTime={setTime}/>
      </div>
      <ButtonView selectedButton={selectedButton} setSelectedButton={setSelectedButton} handleSubmit={handleSubmit}/>
    </>
  )
} 

export default App;
