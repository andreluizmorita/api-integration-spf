import React, {Fragment} from "react";
import Slider from "rc-slider";
import Sound from "react-sound";
import PropTypes from "prop-types";

import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Creators as PlayerActions} from "../../store/ducks/player";

import {
  Container,
  Current,
  Volume,
  Progress,
  Controls,
  Time,
  ProgressSlider,
} from "./styles";

import VolumeIcon from "../../assets/images/volume.svg";
import ShuffleIcon from "../../assets/images/shuffle.svg";
import BackwardIcon from "../../assets/images/backward.svg";
import PlayIcon from "../../assets/images/play.svg";
import PauseIcon from "../../assets/images/pause.svg";
import Forwardcon from "../../assets/images/forward.svg";
import Repeatcon from "../../assets/images/repeat.svg";

const Player = ({
  player,
  play,
  pause,
  prev,
  next,
  playing,
  position,
  positionShown,
  duration,
  handlePosition,
  setPosition,
  progress,
  setVolume,
}) => (
  <Container>
    {!!player.currentSong && player.currentSong.url !== null && (
      <Sound
        url={player.currentSong.preview_url}
        playStatus={player.status}
        onFinishedPlaying={next}
        onPlaying={playing}
        position={player.position}
        volume={player.volume}
      />
    )}

    <Current>
      {!!player.currentSong && (
        <>
          <img src={player.currentSong.cover} alt={player.currentSong.title} />
          <div>
            <span>{player.currentSong.album}</span>
            <small>{player.currentSong.title}</small>
          </div>
        </>
      )}
    </Current>

    <Progress>
      <Controls>
        <button type="button">
          <img src={ShuffleIcon} alt="Shuflle" />
        </button>
        <button onClick={prev} type="button">
          <img src={BackwardIcon} alt="Backward" />
        </button>
        {!!player.currentSong && player.status === Sound.status.PLAYING ? (
          <button onClick={pause} type="button">
            <img src={PauseIcon} alt="Pause" />
          </button>
        ) : (
          <button onClick={play} type="button">
            <img src={PlayIcon} alt="Play" />
          </button>
        )}
        <button onClick={next} type="button">
          <img src={Forwardcon} alt="Forward" />
        </button>
        <button type="button">
          <img src={Repeatcon} alt="Repeat" />
        </button>
      </Controls>

      <Time>
        <span>{positionShown || position}</span>
        <ProgressSlider>
          <Slider
            railStyle={{background: "#404040", borderRadius: 10}}
            trackStyle={{background: "#1ED760"}}
            handleStyle={{border: 100}}
            max={1000}
            onChange={value => handlePosition(value / 1000)}
            onAfterChange={value => setPosition(value / 1000)}
            value={progress}
          />
        </ProgressSlider>
        <span>{duration}</span>
      </Time>
    </Progress>

    <Volume>
      <img src={VolumeIcon} alt="Volume" />
      <Slider
        railStyle={{background: "#404040", borderRadius: 10}}
        trackStyle={{background: "#FFF"}}
        handleStyle={{display: "none"}}
        value={player.volume}
        onChange={setVolume}
      />
    </Volume>
  </Container>
);

// Player.propTypes = {
//   player: PropTypes.shape({
//     currentSong: PropTypes.shape({
//       thumbnail: PropTypes.string,
//       title: PropTypes.string,
//       author: PropTypes.string,
//       file: PropTypes.string,
//     }),
//     status: PropTypes.string,
//   }).isRequired,
//   play: PropTypes.func.isRequired,
//   pause: PropTypes.func.isRequired,
//   next: PropTypes.func.isRequired,
//   prev: PropTypes.func.isRequired,
//   position: PropTypes.string.isRequired,
//   positionShown: PropTypes.string.isRequired,
//   duration: PropTypes.string.isRequired,
//   handlePosition: PropTypes.func.isRequired,
//   setPosition: PropTypes.func.isRequired,
//   setVolume: PropTypes.func.isRequired,
//   progress: PropTypes.number.isRequired,
// };

function msToTime(duration) {
  if (!duration) return null;

  let seconds = parseInt((duration / 1000) % 60, 10);
  const minutes = parseInt((duration / (1000 * 60)) % 60, 10);

  seconds = seconds < 10 ? `0${seconds}` : seconds;

  return `${minutes}:${seconds}`;
}

const mapStateToProps = state => ({
  player: state.player,
  position: msToTime(state.player.position),
  duration: msToTime(state.player.duration),
  positionShown: msToTime(state.player.positionShown),
  progress: parseInt(
    (state.player.positionShown || state.player.position) *
      (1000 / state.player.duration),
    10 || 0
  ),
});

const mapDispatchToProps = dispatch => bindActionCreators(PlayerActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);