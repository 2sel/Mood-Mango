import React from "react";
import styled from "styled-components";
import Icon from "../components/common/Icon";
import MoodCategory from "../components/Mood/MoodCategory";

const Moods = () => {
    return (
        <Background>
            <MoodsPageHeaderTitle>
                <Title>
                    당신이 듣고 싶은 무드를 선택해주세요 &nbsp;
                    <Icon kind={"smile"} style={{fontSize: '27px'}} />
                </Title>
            </MoodsPageHeaderTitle>

            {/* 무드 카테고리 리스트 버튼 컴포넌트 */}
            <MoodCategory />
            
        </Background>
    );
};

export default Moods;

const Background = styled.div`
    font-family: "Noto Sans KR", sans-serif;
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
    display: flex;
    font-size: 27px;
    font-weight: 600;
`;
