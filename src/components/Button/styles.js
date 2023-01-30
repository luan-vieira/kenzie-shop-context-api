import styled from "styled-components";

export const Container = styled.button`
  background: var(--purple);
  color: ${(props) => (props.whiteSchema ? "#f5f5f5" : "#f5f5f5")};

  height: 45px;
  border-radius: 8px;
  border: 1px solid #0c0d0d;
  font-family: "Inter", sans-serif;
  margin-top: 16px;
  width: 100%;
  transition: 0.5s;

  :hover {
    border: 2px solid var(--white);
  }
`;
