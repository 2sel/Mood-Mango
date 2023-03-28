# Mood Mango🥭

![로고](https://github.com/2sel/Mood-Mango/blob/main/public/logo.png)

## 소개

유튜브 api를 사용하여 활용하는 상황에 따라 재생 목록 내의 노래를 뮤직 플레이어을 통해 필터링하여 들을 수 있고 해당 노래들의 인기 순, 기록, 검색 등을 통해 노래의 현황을 알 수 있는 웹페이지를 만들었습니다
<br />

[배포링크](https://mood-mango-re.vercel.app/)

[시연영상](https://www.youtube.com/watch?v=s-vX3oWpU94)

<br />

## 기간

2023.01.20(금) ~ 2023.01.29(일)

<br />

# 팀원 소개

| 김예슬                            | 고현석                               | 김우상                                  | 이학경                                    | 한지은                              |
| --------------------------------- | ------------------------------------ | --------------------------------------- | ----------------------------------------- | ----------------------------------- |
| [Github](https://github.com/2sel) | [Github](https://github.com/sukpo61) | [Github](https://github.com/freesian12) | [Github](https://github.com/suwoncityBoy) | [Github](https://github.com/yjyyls) |

<br />

# 우리팀 규칙

**변수명, css 스타일 초기화**

- reset.css를 사용하여 css 설정 통일
- 변수명 통일(파스칼 케이스)
  - 함수명은 동사+명사 addReview
  - 그 외 컴포넌트 명은 알아보기 쉽게 작성하기

**깃 협업**

- gitflow 방식으로 협업
  main > dev >개인 브랜치
- push, PR, Merge 할 경우 슬랙에 공유하기

**커밋 컨벤션**

- fix : 코드 혹은 버그 수정 시 작성
- feat : 새로운 기능 추가 시 작성
- docs : 문서를 추가했을 때 작성
- style : 단순하게 스타일을 변경할 때 작성
- refactor : 코드를 리팩토링해서 개선했을 때 작성

<br />

# 기술스택

`styled-components`, `react` , `redux toolkit`, `axios`, `typescript`

<br />

# 폴더구조

```
📦 public
📦 src
 ┣ 📂 api
 ┣ 📂 components
 ┃ ┣ 📂 common
 ┃ ┣ 📂 main
 ┃ ┣ 📂 mood
 ┃ ┣ 📂 mypage
 ┃ ┣ 📂 rank
 ┃ ┗ 📂 search
 ┣ 📂 hooks
 ┣ 📂 redux
 ┣ 📂 shared
 ┃ ┣ 📂 layout
 ┃ ┗ 📂 router
 ┣ 📜 app
 ┣ 📜 insdex
 ┗ 📜 tsconfig.json
```

<br />

# 기능 구현

- 메인(무드 선택/ 무드플레이)

  - 무드를 선택하여 원하는 장르의 음악을 선택가능
  - 선택된 노래들을 들을 수 있는 플레이어를 가동 가능

- 인기차트
  - api를 이용해서 가져온 정보들을 통해 조회수, 좋아요 수를 반영하여 인기 순대로 정리
  - 선택된 노래들을 들을 수 있는 플레이어를 가동 가능
- 무드 저장소

  - 메인/인기차트에서 클릭된 노래들의 현황을 알 수 있도록 정리

- 검색
  - 메인/ 인기차트에 있는 노래들을 제목을 필터링하여 검색 가능

<br />

# kpt 회고 & 기능 코드리뷰 & 소감

[무드망고 노션 SA](https://brazen-hub-8df.notion.site/b8c71cf751fe4f63a2e36f0981e8cf14)

[kpt 회고](https://velog.io/@2sel/230130-KDT-%ED%9A%8C%EA%B3%A0%EB%A1%9D)
