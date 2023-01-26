import { FormEvent, useState, useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import MoodPlayBtnModal from "./MoodPlayBtnModal";

const MoodCategory = () => {
  const navigate = useNavigate();

  const [modalOpen, setModalOpen] = useState(false);

  const [isClick, setIsClick] = useState<boolean>(false);
  const categoryKeword = [
    {
      id: 1,
      keyword: "감성",
    },
    {
      id: 2,
      keyword: "드라이브",
    },
    {
      id: 3,
      keyword: "노동요",
    },
    {
      id: 4,
      keyword: "운동",
    },
    {
      id: 5,
      keyword: "기분전환",
    },
  ];

  const onClcikhandler = () => {
    setIsClick(true);
  };

  const handleSubmit = () => {
    if (isClick === false) return setModalOpen(true);
    // 로직 추가 예정

    navigate("/Main");
  };

  return (
    <MoodCategoryForm>
      <MoodCategoryWrap>
        {categoryKeword.map((li) => {
          return (
            <CategoryList key={li.id}>
              <CategoryListBtn
                onClick={onClcikhandler}
                onBlur={() => {
                  setIsClick(false);
                }}
              >
                {li.keyword}
              </CategoryListBtn>
            </CategoryList>
          );
        })}
      </MoodCategoryWrap>
      <MoodPlayDiv>
        <MoodPlayBtn
          type="button"
          onMouseDown={() => {
            handleSubmit();
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
  cursor: pointer;
  &:hover {
    border: 2px #ffb52b solid;
    transform: translateY(3px);
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
