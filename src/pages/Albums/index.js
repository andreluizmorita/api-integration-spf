import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {useParams} from "react-router-dom";

import {Creators as AlbumActions} from "../../store/ducks/album";
import {Creators as ErroActions} from "../../store/ducks/erro";

import Container from "../../components/Container";
import AlbumComponent from "../../components/Album";
import Song from "../../components/Song";

import {AlbumContent, Playlist, Voltar} from "./styles";

function Album({history, getAlbumRequest, setErro, album}) {
  const {albumId, trackId} = useParams();
  const [song, setSong] = useState({
    id: null,
    url: null,
  });

  function getAlbum() {
    getAlbumRequest(albumId);
  }

  function handleClickPreview(track) {
    if (track === null) {
      setErro("O Spotify não disponibiliza preview dessa música");
    } else if (track.preview_url !== null) {
      setSong({
        id: track.id,
        url: track.preview_url,
      });
    } else {
      setErro("O Spotify não disponibiliza preview dessa música");
    }
  }

  useEffect(() => {
    if (typeof albumId !== "undefined") {
      getAlbum(albumId);
    }
  }, [albumId]);

  useEffect(() => {
    if (typeof trackId !== "undefined") {
      handleClickPreview(trackId);
    }
  }, [trackId]);

  useEffect(() => {
    if (!album.loading && typeof trackId !== "undefined") {
      const objectTrack = album.data.tracks.items.filter(
        track => track.id === trackId && track.preview_url !== null,
        trackId
      );
      const track = objectTrack[Object.keys(objectTrack)[0]];

      if (typeof track === "object") {
        handleClickPreview(track);
      } else {
        setErro("O Spotify não disponibiliza preview dessa música");
      }
    }
  }, [album, trackId]);

  return (
    <>
      {!album.loading && (
        <Container>
          {!!song.url && <Song song={song} />}
          <div className="content-page">
            <div>
              <Voltar type="button" className="voltar" onClick={() => history.push("/")}>
                <i className="fas fa-chevron-left" /> Voltar
              </Voltar>
            </div>
            <AlbumContent className="flex-row">
              <div className="album">
                {album.data.images.length > 0 && <AlbumComponent album={album.data} />}
              </div>
              <Playlist>
                <ol role="menu">
                  {album.data.tracks.items.map(track => (
                    <li
                      className={
                        (song.id === track.id ? "active" : "") +
                        (track.preview_url == null ? " disabled" : "")
                      }
                      key={track.id}
                      onClick={() =>
                        handleClickPreview(track.preview_url == null ? null : track)
                      }
                    >
                      {track.name}
                    </li>
                  ))}
                </ol>
              </Playlist>
            </AlbumContent>
          </div>
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
    data: PropTypes.shape({
      name: PropTypes.string.isRequired,
      images: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
      tracks: PropTypes.shape({
        items: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            preview_url: PropTypes.string,
          })
        ).isRequired,
      }).isRequired,
    }).isRequired,
    loading: PropTypes.bool.isRequired,
  }),
};

const mapStateToProps = state => ({
  album: state.album,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({...AlbumActions, ...ErroActions}, dispatch);

export const AlbumTest = Album;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Album);
