// src/AudioPlayer.js

import "./AudioPlayer.css";
import { useRef } from "react";
const AudioPlayer = ({ src, title }) => {
  const audioRef = useRef(null);
  setTimeout(() => {
    document.body.addEventListener("mousemove", function () {
      try {
        audioRef.current.play();
      } catch (e) {
        console.log(e);
      }
    });
  }, 100);

  const playPauseAudio = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  return (
    <div className="audio-player">
      <h3>{title}</h3>
      <audio ref={audioRef} src={src}></audio>
      <button onClick={playPauseAudio} className="play-pause-button">
        Play/Pause
      </button>
    </div>
  );
};

export default AudioPlayer;
