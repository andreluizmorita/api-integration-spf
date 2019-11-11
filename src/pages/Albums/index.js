import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {useParams} from "react-router-dom";

import {Creators as AlbumActions} from "../../store/ducks/album";
import {Creators as ErroActions} from "../../store/ducks/erro";
import {Creators as PlayerActions} from "../../store/ducks/player";

import Container from "../../components/Container";
import AlbumComponent from "../../components/Album";

import Player from "../../components/Player";

import {msToTime} from "../../utils/ms-time-convert";

import {AlbumContent, Playlist, Voltar, SongItem} from "./styles";

function Album({
  history,
  getAlbumRequest,
  setErro,
  album,
  playSong,
  selectSong,
  currentSong,
}) {
  const {albumId, trackId} = useParams();
  const [selectedSong, setSelectedSong] = useState({
    id: null,
  });

  function getAlbum() {
    getAlbumRequest(albumId);
  }

  useEffect(() => {
    if (typeof albumId !== "undefined") {
      getAlbum(albumId);
    }
  }, [albumId]);

  useEffect(() => {
    if (!album.loading && typeof trackId !== "undefined") {
      const objectTrack = album.data.songs.filter(
        track => track.id === trackId && track.preview_url !== null,
        trackId
      );
      const track = objectTrack[Object.keys(objectTrack)[0]];

      if (typeof track === "object") {
        setSelectedSong({
          id: track.id,
          url: track.preview_url,
        });
        playSong(track, album.data.songs);
      } else {
        setErro("O Spotify não disponibiliza preview dessa música");
      }
    }
  }, [album, trackId]);

  function handleSong(song, items, type) {
    if (song.preview_url === null) {
      setErro("O Spotify não disponibiliza preview dessa música");
    } else if (type === "select") {
      selectSong(song, items);
    } else if (type === "play") {
      playSong(song, items);
    }
  }

  return (
    <>
      {!album.loading && (
        <Container>
          <div className="content-page">
            <div>
              <Voltar type="button" className="voltar" onClick={() => history.push("/")}>
                <i className="fas fa-chevron-left" /> Voltar
              </Voltar>
            </div>
            <AlbumContent className="flex-row">
              <div className="album">
                <AlbumComponent album={album.data} />
              </div>
              <Playlist>
                <ol role="menu">
                  {album.data.songs.map(song => (
                    <SongItem
                      key={song.id}
                      onClick={() => handleSong(song, album.data.songs, "select")}
                      onDoubleClick={() => handleSong(song, album.data.songs, "play")}
                      selected={selectedSong.id === song.id}
                      playing={currentSong && currentSong.id === song.id}
                      disabled={song.preview_url === null}
                    >
                      {song.title} <span>{msToTime(song.duration)}</span>
                    </SongItem>
                  ))}
                </ol>
              </Playlist>
            </AlbumContent>
          </div>
          <Player />
        </Container>
      )}
    </>
  );
}

Album.propTypes = {
  history: PropTypes.object.isRequired,
  getAlbumRequest: PropTypes.func.isRequired,
  setErro: PropTypes.func.isRequired,
  album: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
  }),
};

const mapStateToProps = state => ({
  album: state.album,
  currentSong: state.player.currentSong,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({...AlbumActions, ...ErroActions, ...PlayerActions}, dispatch);

export const AlbumTest = Album;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Album);
