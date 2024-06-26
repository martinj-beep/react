import { useRef } from "react";

export default function VideoPlayer() {

    const videoPlayerRef = useRef() // nurodysim nuoroda kur yra koks nors HTMl elementu. Kanadi praisdeda su use, tai yra funkcija, turesim iskviest kaip funkcija

    console.log(videoPlayerRef.current);

  return (
    <div>
        <video ref={videoPlayerRef} src="/src/assets/videoplayback.mp4"></video> <br />
        <button onClick={() => videoPlayerRef.current.play()}>Play</button>
        <button onClick={() => videoPlayerRef.current.pause()}>Pause</button>
    </div>
  )
}
