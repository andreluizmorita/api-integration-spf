import styled from "styled-components";

export const Container = styled.div`
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: #282828;
  padding: 12px;
  position: fixed;
  bottom: 0;
  left: 0;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 5px;
  }

  @media (max-width: 576px) {
  }
`;

export const Current = styled.div`
  width: 250px;
  display: flex;
  align-items: center;

  img {
    width: 48px;
    height: 48px;
  }

  div {
    margin-left: 12px;
    display: flex;
    flex-direction: column;

    span {
      font-size: 13px;
      color: #fff;
    }

    small {
      font-size: 11px;
      color: #b3b3b3;
      margin-top: 5px;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }

  @media (max-width: 576px) {
  }
`;

export const Progress = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    margin: 0 auto;
  }
`;

export const Controls = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  button {
    background: transparent;
    border: 0;
    margin: 0 15px;
  }
`;

export const Time = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 5px;

  span {
    font-size: 11px;
    color: #b3b3b3;
  }
`;

export const ProgressSlider = styled.div`
  width: 400px;
  margin: 0 15px;
  display: block;

  @media (max-width: 768px) {
    width: 300px;
  }
`;

export const Volume = styled.div`
  display: flex;
  align-items: center;
  width: 100px;
  margin-right: 20px;

  img {
    margin-right: 5px;
  }

  @media (max-width: 768px) {
    display: none;
  }

  @media (max-width: 576px) {
  }
`;
