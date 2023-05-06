import React, { useState, useRef, useEffect } from "react";
import "../../../styles/MusicPlayer.css";
import WaveSurfer from "wavesurfer.js";

const MusicPlayer = () => {
  // State
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState("00:00");
  const [currentTime, setCurrentTime] = useState(0);

  // References
  const musicPlayer = useRef(); // We use this and useRef to grab our audio easier.
  const progressBar = useRef(); // Reference to our progress bar. We grab our progress bar with this.
  const animationRef = useRef(); // This will reference the progress bar animation to match the length of the song.

  const loadedMusicMetadata = () => {
    if (musicPlayer.current) {
      console.log(musicPlayer.current.duration);
      const seconds = Math.floor(musicPlayer.current.duration);
      setDuration(seconds);
      progressBar.current.max = seconds;
    }
  };

  // // useEffect
  // useEffect(() => {
  //   // console.log("me ejecute cuando cambio la metadata");
  //   // const seconds = Math.floor(musicPlayer.current.duration);
  //   // setDuration(seconds);
  //   // progressBar.current.max = seconds; // We set the max amount on our progress bar to match the duration of the song on our progress bar. Remember that "current" is referencing our current item in our reference
  //   // and "max" it's build in property in our input range.
  // }, [musicPlayer?.current?.loadedmetadata, musicPlayer?.current?.readyState]);

  // We use "?" to ask if musicPlayer exists and if current exists.

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

    return `${returnedMinutes}:${returnedSeconds}`;
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      musicPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying); // This  is a JS Function.
    } else {
      musicPlayer.current.pause();
      cancelAnimationFrame(animationRef.current); // cancelAnimationFrame it's another JS Function.
    }
  };

  // Every frame, we want to update the range slider to match our current time. We can grab that with our Reference.
  const whilePlaying = () => {
    progressBar.current.value = musicPlayer.current.currentTime; // The music player is playing and we want the range slider to match up with that."currentTime" it's a method build in HTML.
    changePlayerCurrentTime(); // To match our progress bar to the CSS style.
    // We need to update the current time in our state to match the range slider.
    animationRef.current = requestAnimationFrame(whilePlaying); // We want the function to keep running until we hit pause. So in order to run again, we want it to call itself.
    // It will call "whilePlaying" again at the end of this function. And since we're still asigning it to the animationRef we set up, pausing it will stop it.
  };

  // To sumarize, the "changeRange" function  is updating the musicPlayer based on the range slider. Then it's calling the "changePalyerCurrentTime" which
  // updates the style and then state.
  const changeRange = () => {
    musicPlayer.current.currentTime = progressBar.current.value; // We are updating the range slider and telling the music player to jump wherever the range slider is.
    changePlayerCurrentTime(); // To match our progress bar to the CSS style.
    // It needs to also update the current time readout next to the progress bar.
  };

  // We took "progressBar.current.style.setProperty" and "setCurrentTime" and we put them into a function because they were common to
  // "whilePlaying" and "changeRange". We abstracted them.
  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty(
      "--seek-before-width",
      `${(progressBar.current.value / duration) * 100}%`
    ); // Updates style
    setCurrentTime(progressBar.current.value); //Updates state
  };

  // Functions to go back/forward
  const backFive = () => {
    progressBar.current.value = Number(progressBar.current.value - 5); // Number() it's a JS function that will take any string and convert it to a number.
    changeRange(); // We want to update everything just as we did with the range slider.
  };

  const forwardFive = () => {
    progressBar.current.value = Number(progressBar.current.value + 5);
    changeRange();
  };

  // Intentando que el waveSurfer funciona aqui:
  // useEffect(() => {
  //   const wavesurfer = WaveSurfer.create({
  //     container: "#waveform",
  //     waveColor: "violet",
  //     progressColor: "purple",
  //   });
  //   wavesurfer.load(
  //     "https://storage.googleapis.com/vvversions-proyect.appspot.com/guitarsound.mp3"
  //   );
  // }, []);

  return (
    <div className="musicPlayerStyle">
      <div>El SoundWave Pattern deberia ir aqui</div>
      {/* <div id="waveform">El Wave Surfer deberia de ir aqui</div> */}
      <audio
        ref={musicPlayer} // Here we connect to our useRef hook
        src="https://storage.googleapis.com/vvversions-proyect.appspot.com/guitarsound.mp3"
        onLoadedMetadata={loadedMusicMetadata}
        // preload={metadata} va de la mano con el useEffect
      ></audio>

      {/* Backward 5 seconds */}
      <button className="forwardBackward" onClick={backFive}>
        <i class="fas fa-long-arrow-left"></i> 5
      </button>

      {/* Play and Pause botton */}
      <button className="playPause" onClick={togglePlayPause}>
        {isPlaying ? (
          <i className="fas fa-pause"></i>
        ) : (
          <i className="fas fa-play play"></i>
        )}
      </button>

      {/* Forward 5 seconds */}
      <button className="forwardBackward" onClick={forwardFive}>
        5 <i className="fas fa-long-arrow-right"></i>
      </button>

      {/*Current time*/}
      <div className="currenTimeStyle">{calculateTime(currentTime)}</div>

      {/*Progress Bar*/}
      <div>
        <input
          type="range"
          defaultValue="0"
          ref={progressBar}
          onChange={changeRange}
          className="progressBarStyle"
        ></input>
      </div>
      {/*Duration*/}
      <div className="durationStyle">
        {duration && !isNaN(duration) && calculateTime(duration)}
      </div>
    </div>
  );
};

export default MusicPlayer;
