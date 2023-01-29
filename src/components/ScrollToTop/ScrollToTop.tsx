import React, { useState, useEffect } from "react";
// import { AiOutlineArrowUp } from "react-icons/ai";
import styled from "styled-components";
import Icon from "../common/Icon";

interface Props {
  showButton: boolean;
}

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState<boolean>(false);

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const HandleShowButton = () => {
      if (window.scrollY > 150) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", HandleShowButton);
    return () => {
      window.removeEventListener("scroll", HandleShowButton);
    };
  }, []);

  return (
    <>
      <StyleScrollButton showButton={showButton} onClick={scrollToTop}>
        <Icon kind={"top-arrow"} size={40} />
      </StyleScrollButton>
    </>
  );
};

const StyleScrollButton = styled.div`
  z-index: 10;
  position: fixed;
  /* border: solid 2px #ff830a; */
  background-color: transparent;
  bottom: 100px;
  margin: 0 auto;
  right: 0;
  left: 0;
  width: 50px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
  display: ${({ showButton }: Props) => (showButton ? "flex" : "none")};
`;

export default ScrollToTopButton;
