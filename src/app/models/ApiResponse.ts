export interface ApiFailureResponse {
  code?: string;
  message: string;
  detail?: string;
}

export default interface ApiResponse<T> extends ApiFailureResponse {
  status: string;
  data: T;
}
