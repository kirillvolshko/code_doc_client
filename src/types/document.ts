export interface IDocumentsResponse {
  id: string;
  title: string;
}
export interface IDocumentResponse {
  id: string;
  content: string;
  created_at: string;
  creator: { id: string; name: string };
  project_id: string;
  title: string;
  updated_at: string | null;
  editor: { id: string; name: string } | null;
}
export interface IDocumentRequestCreate {
  title: string;
  content: string;
  creator_id: string;
  project_id: string;
}
export interface IDocumentRequestEdit {
  title: string;
  content: string;
  updated_id: string;
}
