import React from "react";
import styled from "styled-components";
import Navbar from "../components/common/Navbar";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <StyledWrap>
      <StyleChildWrap>{children}</StyleChildWrap>
      <Navbar />
    </StyledWrap>
  );
};

const StyledWrap = styled.div`
  position: relative;
  width: 100%;
  min-height: 100%;
  background-color: #000;
  display: flex;
  flex-direction: row;
`;

const StyleChildWrap = styled.div`
  padding-left: 100px;
  width: 100%;
`;

export default Layout;
