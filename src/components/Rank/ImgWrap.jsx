import React from "react";
import styled from "styled-components";
import Icon from "../common/Icon";


const ImgWrap = ({ overdiplay, src }) => {
  return (
    <Img>
      <img src={src}></img>
      {overdiplay && (
        <Overview>
          <Icon kind="play" size={20}></Icon>
        </Overview>
      )}
        {overdiplay ? 
          <Overview>
            <Icon kind="play" size={20}></Icon>
          </Overview>
        : ""}
    </Img>
  );
};

export default ImgWrap;

const Img = styled.div`
  display: flex;
  img {
    margin-right: 20px;
    width: 60px;
    height: 60px;
    object-fit: cover;
    object-position: center;
  }
`;

const Overview = styled.div`
  left: -80px;
  width: 60px;
  height: 60px;
  position: relative;
  background-color: hsl(100 0% 0% / 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
`;
