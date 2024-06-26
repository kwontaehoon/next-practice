export type MainThreeType = {
    page: number,
    count: number,
    direction: string,
    state: boolean
    // allScrollCount: number;
    // setAllScroll: React.Dispatch<React.SetStateAction<number>>;
  }

export interface MainThree {
  allScroll: MainThreeType,
  setAllScroll: React.Dispatch<React.SetStateAction<MainThreeType>>
}