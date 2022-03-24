export interface BoardMember {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  boardId: number;
  userId: number;
}

export interface Member {
  id: number;
  username: string;
  createdAt: Date;
  updatedAt: Date;
  BoardMember: BoardMember;
}

export interface MemberForm {
  username: string,
  boardId:  number
}

//multiple pick diffirent interface
 export type CreateBoardMemberRequest = Pick<MemberForm, "username" | "boardId"> 

