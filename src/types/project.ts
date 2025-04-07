export interface IProjectResponse {
  id: string;
  name: string;
  creator_id: string;
}
export interface IUsersResponse {
  id: string;
  name: string;
  email: string;
}
export interface IAddUserRequest {
  project_id: string;
  email: string;
}
