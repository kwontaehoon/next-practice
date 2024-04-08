export type MainTwoType = {
    page: number,
    count: number,
    direction: string
    // allScrollCount: number;
    // setAllScroll: React.Dispatch<React.SetStateAction<number>>;
}

export type MainTwoText = string;

export interface MainTwo {
  allScroll: MainTwoType,
  setAllScroll: React.Dispatch<React.SetStateAction<MainTwoType>>
}