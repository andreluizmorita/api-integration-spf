import styled from "styled-components";

export const AlbumContent = styled.div`
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

  .album .album-artistas {
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

    .album .album-artistas {
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

  ol li {
    counter-increment: item;
    position: relative;
    padding-bottom: 20px;
    cursor: pointer;
  }

  ol li.active {
    color: #999;
  }

  ol li.disabled {
    color: #999;
    cursor: default;
  }

  ol li:before {
    margin-right: 10px;
    content: counter(item) " .";
    color: white;
    width: 25px;
    text-align: right;
    display: inline-block;
    color: #999999;
    font-size: 1rem;
  }

  ol li span {
    position: absolute;
    right: 0;
    color: #999999;
  }

  @media (max-width: 768px) {
  }

  @media (max-width: 576px) {
    display: block;
    padding-left: 0;
    font-size: 0.8rem;

    ol li:before {
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
