export interface ClientErrors {
  unAuthorized: string[];
  forbidden: string[];
  badRequest: string[];
  notFound: string[];
}

export default interface ResponseCodes {
  clientErrors: ClientErrors;
  serverErrors: string[];
}
