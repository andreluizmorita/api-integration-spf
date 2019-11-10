import styled from "styled-components";

const Container = styled.div`
  height: 42px;
  line-height: 42px;
  padding: 0 20px;
  color: rgba(0, 0, 0, 0.6);
  background: #f55a5a;
  font-size: 0.86rem;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  z-index: 100;
  width: 94%;

  button {
    border: 0;
    background: transparent;

    img {
      height: 14px;
    }
  }

  .form-token {
    display: flex;
    flex: 1;
    flex-direction: row;

    label {
      margin-top: 2px;
    }

    input {
      border: none;
      background: #fafafa;
      padding: 3px 10px;
      color: #f55a5a;
      margin: 10px;
      border-radius: 5px;
      display: flex;
      flex: 2;
    }

    button {
      border: 1px solid #b02121;
      padding: 5px 10px;
      margin: 10px 0;
      color: #b02121;
      border-radius: 5px;
      font-size: 12px;
      margin-left: auto;
    }
  }

  @media (max-width: 768px) {
  }

  @media (max-width: 576px) {
    height: 75%;

    .form-token {
      flex-direction: column;

      input {
        height: 80%;
        display: block;
        font-size: 0.7rem;
        padding: 3px 0;
        margin: 5px 0;
      }
    }
  }
`;

export default Container;
