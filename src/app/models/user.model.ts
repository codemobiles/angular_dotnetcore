export class User {
  username: string;
  password: string;
  position: string;
}

export interface ResponseRegister {
  result: string;
  message: string;
}

export interface ResponseLogin {
  token: string;
  message: string;
}
