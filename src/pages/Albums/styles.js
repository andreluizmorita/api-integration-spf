import styled from "styled-components";

export const AlbumContent = styled.div`
  padding-bottom: 60px;

  .album {
    display: flex;
    flex-direction: column;
    flex: 2;
  }

  .album img {
    width: 100%;
    height: auto;
    background-size: cover;
    border-radius: 4px;
  }

  .album strong {
    margin: 3px 0;
    font-size: 1.29rem;
    text-align: center;
    color: #fafafa;
    font-weight: normal;
    display: block;
  }

  .album-artistas {
    margin: 0;
    padding: 0;
    font-size: 1.2rem;
    text-align: center;
    color: #999;
  }

  @media (max-width: 768px) {
  }

  @media (max-width: 576px) {
    .album {
      display: block;
    }

    .album strong {
      font-size: 0.9rem;
    }

    .album-artistas {
      padding: 20px 0;
    }
  }
`;

export const Playlist = styled.div`
  display: flex;
  flex: 4;
  padding-left: 50px;

  ol {
    list-style: none;
    counter-reset: item;
    display: block;
    width: 100%;
  }

  @media (max-width: 768px) {
  }

  @media (max-width: 576px) {
    display: block;
    padding-left: 0;
    font-size: 0.8rem;
  }
`;

export const SongItem = styled.li`
  counter-increment: item;
  position: relative;
  padding-bottom: 20px;
  cursor: pointer;
  cursor: ${props => (props.disabled ? "default" : "pointer")};
  color: ${props => (props.disabled ? "#999" : props.playing ? "#1ED760" : "#FFF")};

  &:hover {
    opacity: 0.7;
  }

  &:before {
    margin-right: 10px;
    content: counter(item) " .";
    color: white;
    width: 25px;
    text-align: right;
    display: inline-block;
    color: #999999;
    font-size: 1rem;
  }

  span {
    position: absolute;
    right: 0;
    color: #999999;
  }

  @media (max-width: 576px) {
    &:before {
      font-size: 0.8rem;
      width: 30px;
    }
  }
`;

export const Voltar = styled.button`
  background: transparent;
  padding: 10px 20px 10px 0;
  border: none;
  display: flex;
  font-size: 1rem;
  margin-bottom: 20px;

  i {
    margin-right: 5px;
  }

  @media (max-width: 768px) {
    margin-left: auto;
    margin-top: -5px;
    font-size: 0.8rem;
  }

  @media (max-width: 576px) {
  }
`;
