import styled from "styled-components";

export const Content = styled.div`
  @media (max-width: 768px) {
    margin-top: 30px;
  }

  @media (max-width: 576px) {
  }
`;

export const UlAlbums = styled.ul`
  width: 100%;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 30px;
  margin-bottom: 1.6rem;

  li {
    display: flex;
    flex-direction: column;
    transition: all 500ms;

    &:hover {
      opacity: 0.6;
    }
  }

  li img {
    width: 100%;
    height: auto;
    background-size: cover;
    border-radius: 4px;
  }

  li strong {
    display: block;
    margin: 10px 0 5px;
    font-size: 1.14rem;
    text-align: center;
    color: #fafafa;
    font-weight: normal;
  }

  li p {
    margin: 0;
    padding: 0;
    font-size: 1rem;
    text-align: center;
    color: #999;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
    margin-bottom: 15px;

    li strong {
      font-size: 0.95rem;
      text-align: center;
      display: block;
    }

    li p {
      font-size: 0.85rem;
      text-align: center;
    }
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;
    margin-bottom: 10px;

    li strong {
      font-size: 0.75rem;
    }

    li p {
      font-size: 0.7rem;
    }
  }
`;
