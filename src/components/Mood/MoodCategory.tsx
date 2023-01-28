import { FormEvent, useState, useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import MoodPlayBtnModal from "./MoodPlayBtnModal";
import { getCategories } from "../../redux/modules/categories";
import { getClickButton } from "../../redux/modules/Navbar";

const categories = ["감성", "드라이브", "공부", "운동", "기분전환"];

const MoodCategory = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [modalOpen, setModalOpen] = useState(false);
  const [isClick, setIsClick] = useState<boolean>(false);
  const [clickedCategory, setClickedCategory] = useState(categories[0]);

  const onClcikhandler = (keyword: string) => {
    setIsClick(true);
    setClickedCategory(keyword);
  };

  const handleSubmit = (keyword: string) => {
    if (isClick === false) return setModalOpen(true);
    dispatch(getCategories(keyword));
    dispatch(getClickButton(true));
    navigate("/Main");
  };

  return (
    <MoodCategoryForm>
      <MoodCategoryWrap>
        {categories.map((category) => {
          return (
            <CategoryList key={category}>
              <CategoryListBtn
                onClick={() => {
                  onClcikhandler(category);
                }}
                onBlur={() => {
                  setIsClick(false);
                }}
              >
                {category}
              </CategoryListBtn>
            </CategoryList>
          );
        })}
      </MoodCategoryWrap>
      <MoodPlayDiv>
        <MoodPlayBtn
          type="button"
          onMouseDown={() => {
            handleSubmit(clickedCategory);
          }}
        >
          Mood Play
        </MoodPlayBtn>
      </MoodPlayDiv>

      {/* 모달창 */}
      {modalOpen && <MoodPlayBtnModal setModalOpen={setModalOpen} />}
    </MoodCategoryForm>
  );
};

export default MoodCategory;

const MoodCategoryForm = styled.div`
  width: 100%;
  margin-top: 80px;
  color: white;
`;

const MoodCategoryWrap = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  /* flex-wrap: wrap; */
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
  box-sizing: border-box;
  cursor: pointer;
  &:hover {
    border: 2px #ffb52b solid;
  }

  &:focus {
    background-color: #ffb52b;
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
