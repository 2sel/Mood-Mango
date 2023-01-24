import React from "react";
import { AiFillSmile } from "react-icons/ai";
import { BiMusic, BiCloud, BiSearch } from "react-icons/bi";
import {
  IoPlay,
  IoPlaySkipBack,
  IoPlaySkipForward,
  IoVolumeHigh,
  IoChevronDown,
  IoPause,
} from "react-icons/io5";

import styled, { CSSObject } from "styled-components";

interface IconType {
  kind: string; // 아이콘 이름
  style?: CSSObject; // 아이콘 스타일
  size?: number; // 아이콘 사이즈
  handler?: React.MouseEventHandler<HTMLDivElement>;
}

const Icon = (props: IconType) => {
  switch (props.kind) {
    case "smile":
      return (
        <StyleIconWrap>
          <AiFillSmile style={props.style} size={props.size} />
        </StyleIconWrap>
      );
    case "music":
      return (
        <StyleIconWrap>
          <BiMusic style={props.style} size={props.size} />
        </StyleIconWrap>
      );
    case "cloud":
      return (
        <StyleIconWrap onClick={props.handler}>
          <BiCloud style={props.style} size={props.size} />
        </StyleIconWrap>
      );
    case "search":
      return (
        <StyleIconWrap>
          <BiSearch style={props.style} size={props.size} />
        </StyleIconWrap>
      );
    case "play":
      return (
        <StyleIconWrap>
          <IoPlay style={props.style} size={props.size} />
        </StyleIconWrap>
      );
    case "skipback":
      return (
        <StyleIconWrap>
          <IoPlaySkipBack style={props.style} size={props.size} />
        </StyleIconWrap>
      );
    case "skipforward":
      return (
        <StyleIconWrap>
          <IoPlaySkipForward style={props.style} size={props.size} />
        </StyleIconWrap>
      );
    case "volume":
      return (
        <StyleIconWrap>
          <IoVolumeHigh style={props.style} size={props.size} />
        </StyleIconWrap>
      );
    case "playerhide":
      return (
        <StyleIconWrap>
          <IoChevronDown style={props.style} size={props.size} />
        </StyleIconWrap>
      );
    case "pause":
      return (
        <StyleIconWrap>
          <IoPause style={props.style} size={props.size} />
        </StyleIconWrap>
      );
    default:
      return <p>"케이스문 확인욤~"</p>;
  }
};
const StyleIconWrap = styled.div`
  font-size: 25px;
  color: #fff;
  text-align: center;
`;
export default Icon;
