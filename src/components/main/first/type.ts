export type MainFirstType = {
    page: number,
    count: number,
    direction: string
    // allScrollCount: number;
    // setAllScroll: React.Dispatch<React.SetStateAction<number>>;
  }

export interface MainFirst {
  allScroll: MainFirstType,
  setAllScroll: React.Dispatch<React.SetStateAction<MainFirstType>>
}