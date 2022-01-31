// Temp file
export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
}

export interface IPost {
  id: string;
  authorId: string;
  title: string;
  content: string;
}

export interface IComment {
  id: string;
  postId: string;
  authorId: string;
  comment: string;
}

export const Users = new Map<string, IUser>();
export const Posts = new Map<string, IPost>();
export const Comments = new Map<string, IComment>();
