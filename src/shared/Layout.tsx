import React from "react";
import styled from "styled-components";
import Navbar from "../components/common/Navbar";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <StyledWrap>
      <Navbar />
      <StyleChildWrap>{children}</StyleChildWrap>
    </StyledWrap>
  );
};

const StyledWrap = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #fff;
  display: flex;
  flex-direction: row;
`;

const StyleChildWrap = styled.div`
  padding-left: 100px;
  margin-bottom: 12rem;
  width: 100%;
`;

export default Layout;
