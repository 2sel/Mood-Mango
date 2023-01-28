import styled from "styled-components";

export const Introduce = styled.div`
  display: block;
  text-align: center;
  margin-top: 100px;
`;

export const Clear = styled.p<{
  display: number;
  marginTop?: number;
  marginLeft?: number;
  width?: number;
  marginRight?: number;
}>`
  color: grey;
  font-size: 15px;
  display: ${(props) => (!!props.display ? "flex" : "none")};
  margin-top: ${(props) => (props.marginTop ? `${props.marginTop}px` : "0px")};
  margin-left: ${(props) =>
    !!props.marginLeft ? `${props.marginLeft}px` : "auto"};
  margin-right: ${(props) =>
    !!props.marginRight ? `${props.marginRight}px` : "auto"};

  width: ${(props) => (!!props.width ? `${props.width}px` : "60px")};
  /* margin-left: auto;
  margin-right: auto; */
  /* width: 400px;1350px */
`;

export const Alarm = styled.p`
  font-size: 20px;
`;
export const IconArea = styled.div`
  border-radius: 50%;
  background-color: #ff830a;
  position: relative;
  border: 1px solid #ff830a;
  width: 90px;
  height: 90px;
  margin: 90px auto;
`;
