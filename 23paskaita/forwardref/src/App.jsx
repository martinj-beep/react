import { useRef } from 'react';
import './App.css'
import Input from './components/Input/Input'
import RegisterSection from './components/RegisterSection/RegisterSection';
import CustomVideo from './components/VideoComponent/VideoComponent';

function App() {
  const inputRef = useRef();
  const registerSectionRef = useRef();
  const customVideoRef = useRef();

  function handleFocusInput() {
    inputRef.current.focus();
  }

  function handleScrollToSection() {
    registerSectionRef.current.scrollIntoView({ behavior: "smooth" })
  }

  const playVideo = () => {
    if (customVideoRef.current) {
      customVideoRef.current.play();
    }
  };

  const pauseVideo = () => {
    if (customVideoRef.current) {
      customVideoRef.current.pause();
    }
  };

  const rewindVideo = () => {
    if (customVideoRef.current) {
      customVideoRef.current.currentTime = 0;
    }
  };

  return (
    <div>
    <div style={{ height: "200vh" }}>
    <RegisterSection ref={registerSectionRef} />
      <Input ref={inputRef} value={"Kazkas"}/> 
      <button onClick={handleFocusInput}>Focus input</button>
    </div>
    <button onClick={handleScrollToSection}>Leave your email for a newsletter</button>
    
    
    <div>
      <h1>Custom Video Player</h1>
      <CustomVideo ref={customVideoRef} videoUrl="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
      <div>
        <button onClick={playVideo}>Play</button>
        <button onClick={pauseVideo}>Pause</button>
        <button onClick={rewindVideo}>Rewind</button>
      </div>
    </div>
    </div>
  )
}

export default App
