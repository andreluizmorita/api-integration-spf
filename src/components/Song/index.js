import React from 'react';
import Sound from 'react-sound';

export default function Song({ song }) {
  return (
    <Sound
      url={song.url}
      playStatus={Sound.status.PLAYING}
      playFromPosition={0}
      position={0}
      volume={7}
    />
  );
}
