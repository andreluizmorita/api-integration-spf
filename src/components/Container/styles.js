import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 15px 20px;

  img.logo {
    width: 40px;
    height: 40px;
    position: absolute;
  }

  .content {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 0 80px 0 80px;
  }

  @media (max-width: 768px) {
  }

  @media (max-width: 576px) {
    padding: 5px;

    img.logo {
      top: 10px;
      left: 10px;
    }

    .content {
      padding: 0 20px 0 20px;
    }
  }
`;
