import React from "react";
import styled from "styled-components";

const MoodCategory = () => {
    return (
        <MoodCategoryWrap>
            <CategoryWrap>
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
            </CategoryWrap>
            <MoodPlayDiv>
                <MoodPlayBtn type='submit'>Mood Play</MoodPlayBtn>
            </MoodPlayDiv>
        </MoodCategoryWrap>
    );
};

export default MoodCategory;

const MoodCategoryWrap = styled.form`
    width: 100%;
    box-sizing: border-box;
    margin-top: 70px;
    color: white;
`;

const CategoryWrap = styled.ul`
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
    width: 180px;
    background-color: #2a2a2a;
    color: white;
    font-size: 18px;
    text-align: center;
    padding: 25px 20px;
    border-radius: 15px;

    cursor: pointer;
`;

const MoodPlayDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const MoodPlayBtn = styled.button`
    width: 180px;
    background-color: #ffb52b;
    color: white;
    padding: 25px 20px;
    margin-top: 70px;
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    border-radius: 15px;

    cursor: pointer;
`;
