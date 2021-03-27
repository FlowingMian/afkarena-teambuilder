
export interface Profile {
  id: string,
  name: string,
  readAt: string,
  heroCollection: Array<string>,
  compositions?: string,
  createdAt: string,
  updatedAt: string,
  readonly: boolean
}