export interface ICommentResponse {
  id: string;
  creator: { id: string; name: string };
  content: string;
  created_at: string;
  doc_id: string;
}
export interface ICommentRequest {
  content: string;
  creator_id: string;
  doc_id: string;
}
