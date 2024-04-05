export type MainFourType = {
    page: number,
    count: number,
    direction: string
    // allScrollCount: number;
    // setAllScroll: React.Dispatch<React.SetStateAction<number>>;
  }

export interface MainFour {
  allScroll: MainFourType,
  setAllScroll: React.Dispatch<React.SetStateAction<MainFourType>>
}