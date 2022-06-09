declare namespace API {
  type Id = number;
  type Date = number;
  type Type = string;

  type Stories = number[];

  type Comments = number[];

  interface Story {
    id: Id;
    by?: string;
    descendants?: number;
    kids?: Comments;
    score?: number;
    time?: Date;
    title?: string;
    type?: Type;
    url?: string;
  };

  interface Comment {
    id: Id,
    parent: Story["id"],
    by: string,
    kids?: Comments;
    text?: string,
    time?: Date;
    type?: Type;
  }
}
