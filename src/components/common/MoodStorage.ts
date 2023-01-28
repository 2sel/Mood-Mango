export interface DataType {
  // 예시용, 데이터 객체 틀이 만들어지면 교체 예정
  name: string;
  id: string;
  count: number;
  title: string;
  thumbnail: string;
  index: number;
  page: number;
}

export interface PlayListType {
  folderName: string;
  data: DataType;
}

export class moodStorage {
  // 로컬 스토리지에서 데이터 가져오기
  private static storageHistory = localStorage.getItem("mangoHistory");
  private static storagePlayList = localStorage.getItem("mangoPlayList");
  private static storageSearch = localStorage.getItem("mangoSearchList");
  private static storageRank = localStorage.getItem("mangoRank");

  // 로컬 스토리지 데이터를 static 변수에 할당
  private static mangoHistory: DataType[] =
    this.storageHistory !== null ? JSON.parse(this.storageHistory) : []; // 데이터 interface에 내가 본 횟수 추가하기
  private static mangoPlayList: { [key: string]: DataType[] } =
    this.storagePlayList !== null ? JSON.parse(this.storagePlayList) : {}; // 데이터 interface 사용하기
  private static mangoSearchList: string[] =
    this.storageSearch !== null ? JSON.parse(this.storageSearch) : [];
  private static mangoRank: DataType[] =
    this.storageRank !== null ? JSON.parse(this.storageRank) : [];

  /* getter functon*/
  static getMangoHistory() {
    return this.mangoHistory;
  }
  static getMangoPlayList() {
    return this.mangoPlayList;
  }
  static getMangoSearchList() {
    return this.mangoSearchList;
  }
  static getMangoRank() {
    return this.mangoRank;
  }

  /* setter functon*/
  // 히스토리 기록
  static addMangoHistory(param: any) {
    // 내가 들었던 곡
    // 처음 듣는 음악인지 아닌지 찾아보기
    const [data]: any = this.mangoHistory.filter(
      (item) => item.id === param.id
    );

    if (!!data) {
      // 들었던 거임
      // 기존 해당 음악을 지운다.
      const newHistory = this.mangoHistory.filter(
        (item) => item.id !== param.id
      );
      const newRank = this.mangoRank.filter((item) => item.id !== param.id);
      // 배열 맨 앞으로 생성후 count+1 을 한다(가장 많이 들은 음악 작업하기위해).

      this.mangoHistory = [
        {
          ...param,
          count: data.count + 1,
        },
        ...newHistory,
      ];
      this.mangoRank = [{ ...param, count: data.count + 1 }, ...newRank];
    } else {
      // 처음 들음
      this.mangoHistory = [{ ...param, count: 1 }, ...this.mangoHistory];
      this.mangoRank = [{ ...param, count: 1 }, ...this.mangoRank];
    }
    localStorage.setItem("mangoRank", JSON.stringify(this.mangoRank));
    localStorage.setItem("mangoHistory", JSON.stringify(this.mangoHistory));
  }

  // 해당 플레이리스트(폴더)에 영상 추가
  static addMangoPlayList(folderName: string, data: any): boolean {
    if (window.confirm(`${folderName} 에 저장 하시겠습니까?`)) {
      const playList = [...this.mangoPlayList[folderName]];
      if (!!playList.filter((item) => item.id === data.id).length) {
        alert("이미 저장된 음악입니다.");
        return true;
      } else {
        //저장한 기록이 없다면
        this.mangoPlayList[folderName].push(data);

        localStorage.setItem(
          "mangoPlayList",
          JSON.stringify(this.mangoPlayList)
        );
        alert("플레이 리스트에 추가 되었습니다.");
        return false;
      }
    } else {
      return true;
    }
  }
  // 플레이 리스트(폴더) 생성
  static addPlayListFolder(folderName: string): boolean {
    if (!!!folderName) {
      alert("제목을 입력해주세요!");
      return true;
    }
    if (folderName in this.mangoPlayList) {
      alert("같은 플레이리스트가 존재 합니다");
      return true;
    } else {
      this.mangoPlayList[folderName] = [];
      localStorage.setItem("mangoPlayList", JSON.stringify(this.mangoPlayList));
      alert("생성 완료 했습니다.");
      return false;
    }
  }
  // 해당 영상 삭제
  static popMangoPlay(folderName: string, id: string): boolean {
    if (window.confirm("해당 영상을 삭제 하시겠습니까?")) {
      this.mangoPlayList[folderName] = this.mangoPlayList[folderName].filter(
        (item) => item.id !== id
      );

      localStorage.setItem("mangoPlayList", JSON.stringify(this.mangoPlayList));
      return true;
    } else {
      return false;
    }
  }
  // 해당 플레이 리스트(폴더) 삭제
  static popMangoPlayList(folderName: string) {
    if (window.confirm("해당 폴더를 삭제 하시겠습니까?")) {
      delete this.mangoPlayList[folderName];

      localStorage.setItem("mangoPlayList", JSON.stringify(this.mangoPlayList));
    } else {
      return;
    }
  }
  // 해당 플레이 리스트(폴더)에 있는 영상 전체 삭제
  static clearMangoPlay(folderName: string) {
    if (window.confirm(`${folderName} 폴더의 내용을 전체 삭제 하시겠습니까?`)) {
      this.mangoPlayList[folderName] = [];

      localStorage.setItem("mangoPlayList", JSON.stringify(this.mangoPlayList));
    } else {
      return;
    }
  }
  // 해당 기록 삭제
  static popMangoHistory(id: string): boolean {
    if (window.confirm("해당 기록을 삭제하시겠습니까?")) {
      this.mangoHistory = this.mangoHistory.filter((item) => item.id !== id);
      localStorage.setItem("mangoHistory", JSON.stringify(this.mangoHistory));
      return true;
    } else {
      return false;
    }
  }
  // 전체 기록 삭제
  static clearMangoHistory() {
    if (window.confirm("전체 기록을 삭제하시겠습니까?")) {
      this.mangoHistory = [];
      localStorage.setItem("mangoHistory", JSON.stringify(this.mangoHistory));
      return true;
    } else {
      return false;
    }
  }

  static addMangoSearch(key: string): void {
    // 유효성 검사해야함
    // 특수기호가 들어올 경우 팅겨내야함
    this.mangoSearchList.push(key);
    localStorage.setItem(
      "mangoSearchList",
      JSON.stringify(this.mangoSearchList)
    );
  }
}
