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

const Icon = ({ kind, style, size = 25, handler }: IconType) => {
  switch (kind) {
    case "smile":
      return (
        <StyleIconWrap>
          <AiFillSmile style={style} size={size} />
        </StyleIconWrap>
      );
    case "music":
      return (
        <StyleIconWrap>
          <BiMusic style={style} size={size} />
        </StyleIconWrap>
      );
    case "cloud":
      return (
        <StyleIconWrap onClick={handler}>
          <BiCloud style={style} size={size} />
        </StyleIconWrap>
      );
    case "search":
      return (
        <StyleIconWrap>
          <BiSearch style={style} size={size} />
        </StyleIconWrap>
      );
    case "play":
      return (
        <StyleIconWrap>
          <IoPlay style={style} size={size} />
        </StyleIconWrap>
      );
    case "skipback":
      return (
        <StyleIconWrap>
          <IoPlaySkipBack style={style} size={size} />
        </StyleIconWrap>
      );
    case "skipforward":
      return (
        <StyleIconWrap>
          <IoPlaySkipForward style={style} size={size} />
        </StyleIconWrap>
      );
    case "volume":
      return (
        <StyleIconWrap>
          <IoVolumeHigh style={style} size={size} />
        </StyleIconWrap>
      );
    case "playerhide":
      return (
        <StyleIconWrap>
          <IoChevronDown style={style} size={size} />
        </StyleIconWrap>
      );
    case "pause":
      return (
        <StyleIconWrap>
          <IoPause style={style} size={size} />
        </StyleIconWrap>
      );
    default:
      return <p>"케이스문 확인욤~"</p>;
  }
};
const StyleIconWrap = styled.div`
  color: #fff;
  text-align: center;
`;
export default Icon;
