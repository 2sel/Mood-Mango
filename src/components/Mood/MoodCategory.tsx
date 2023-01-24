import React from "react";
import styled from "styled-components";

const MoodCategory = () => {
    return (
        <BackgroundForm>
            <MoodCategoryWrap>
                <CategoryList>
                    <CategoryListBtn>우울한</CategoryListBtn>
                </CategoryList>
                <CategoryList>
                    <CategoryListBtn>차분한</CategoryListBtn>
                </CategoryList>
                <CategoryList>
                    <CategoryListBtn>신나는</CategoryListBtn>
                </CategoryList>
                <CategoryList>
                    <CategoryListBtn>조용한</CategoryListBtn>
                </CategoryList>
                <CategoryList>
                    <CategoryListBtn>격렬한</CategoryListBtn>
                </CategoryList>
            </MoodCategoryWrap>
            <MoodPlayDiv>
                <MoodPlayBtn type='submit'>Mood Play</MoodPlayBtn>
            </MoodPlayDiv>
        </BackgroundForm>
    );
};

export default MoodCategory;

const BackgroundForm = styled.form`
    width: 100%;
    margin-top: 80px;
    color: white;
`;

const MoodCategoryWrap = styled.ul`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
`;

const CategoryList = styled.li`
    list-style: none;
`;

const CategoryListBtn = styled.button`
    font-family: "Noto Sans KR", sans-serif;
    width: 160px;
    background-color: #2a2a2a;
    color: white;
    font-size: 18px;
    text-align: center;
    padding: 25px 20px;
    border-radius: 15px;

    cursor: pointer;

    &:hover {
        border: 2px #ffb52b solid;
        transform: translateY(3px);
    }
`;

const MoodPlayDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const MoodPlayBtn = styled.button`
    font-family: "Noto Sans KR", sans-serif;
    width: 160px;
    background-color: #ffb52b;
    color: white;
    padding: 25px 20px;
    margin-top: 70px;
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    border-radius: 15px;

    cursor: pointer;

    &:hover {
        transform: translateY(3px);
    }
`;
