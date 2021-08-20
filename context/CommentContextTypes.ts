export interface Comment {
  flowerId: string;
  id: string;
  title: string;
  name: string;
  message: string;
  timeStamp: string;
}

export interface CommentContextTypes {
  comments: Comment[];
  commentEditMode: boolean;
  commentEditData: Comment | null;
  setCommentsHandler: (comments: Comment[]) => void;
  getCommentsHandler: (flowerId: string) => void;
  populateCommentEditFields: (comment: Comment) => void;
  clearEditMode: () => void;
}
