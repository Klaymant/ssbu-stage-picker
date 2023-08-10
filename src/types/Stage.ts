export type Stage = {
  title: string;
  url: string;
  state: StageState;
};

export type StageState =
  | 'valided'
  | 'picked'
  | 'banned'
  | 'none';
