import { useState } from "react"

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(forwardMode, replace = false) {
    if(replace === false){
    // const crtHistory = [...history, forwardMode];
    setHistory(previus => [...previus, forwardMode])
    // setHistory(crtHistory);
    setMode(forwardMode);
    } else {
      // const crtHistory = [...history.slice(0, history.length-1), forwardMode];
      setHistory(previus => [...previus.slice(0, previus.length-1), forwardMode])
      // setHistory(crtHistory);
      setMode(forwardMode);
    }
  }
  function back() {
    const crtHistory = [...history];
    if(crtHistory.length < 2){
      return
    }
    if (crtHistory.length > 1) {
      setMode(crtHistory[crtHistory.length - 2]);
      setHistory(previus => [...previus.slice(0, previus.length-1)])
      // crtHistory.pop();
      // setHistory(crtHistory);
    }
    console.log(mode)
    
  }

  return { mode, transition, back };
}
