export type Stage = {
  title: string;
  url: string;
  state: StageState;
};

type StageState = 'valided' | 'banned' | 'none';