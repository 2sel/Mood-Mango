import React from "react";
import { useEffect } from "react";
import { authenticate, loadClient, execute } from "../api/youtubeapi";
import styled from "styled-components";
import { getMusic } from "../redux/modules/rank";
import { useAppDispatch } from "../hooks/hooks";
import { useAppSelector } from "../hooks/hooks";

const Rank = () => {
  const dispatch = useAppDispatch();

  const { rank } = useAppSelector((state) => state.rank);

  useEffect(() => {
    dispatch(getMusic());
  }, []);

  console.log(rank);
  return <div></div>;
};

export default Rank;

const Button = styled.button``;
