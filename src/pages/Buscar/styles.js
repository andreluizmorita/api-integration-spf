import styled from "styled-components";

export const Content = styled.div`
  @media (max-width: 768px) {
    font-size: 0.6rem;
  }

  @media (max-width: 576px) {
    .buscando {
      font-size: 1rem;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-top: 40px;
  margin-bottom: 60px;
  font-size: 1rem;

  label {
    display: flex;
    flex: 1;
    padding-bottom: 5px;
  }

  input {
    background: transparent;
    color: #fafafa;
    font-size: 3.43rem;
    border: none;
    border-bottom: 1px solid #999999;
    padding: 8px 4px;
  }

  input::placeholder {
    color: #999999;
  }

  @media (max-width: 768px) {
    margin-top: 60px;
    margin-bottom: 20px;
    font-size: 1rem;

    input {
      font-size: 1.2rem;
      margin: 10px 0;
    }
  }

  @media (max-width: 576px) {
  }
`;
