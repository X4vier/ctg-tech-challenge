export type ToDo = {
  title: string;
  body: string;
  createdAt: Date;
  deletedAt: Date | null;
  $loki: number;
};
