import React from "react";
import styled from "styled-components";
import Icon from "../components/common/Icon";
import MoodCategory from "../components/Mood/MoodCategory";

const Moods = () => {
    return (
        <MoodsPageWrap>
            <MoodsPageHeaderTitle>
                <Title>당신이 듣고 싶은 무드를 선택해주세요 </Title>
                <Icon kind={"smile"} />
            </MoodsPageHeaderTitle>
            <MoodCategory />
        </MoodsPageWrap>
    );
};

export default Moods;

const MoodsPageWrap = styled.div`
    background-color: #000000;
    height: 100vh;
    width: 100%;
    padding: 50px;
    box-sizing: border-box;
`;

const MoodsPageHeaderTitle = styled.div`
    width: 100%;
    margin-top: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Title = styled.div`
    color: white;
    font-size: 25px;
    font-weight: 600;
`;
