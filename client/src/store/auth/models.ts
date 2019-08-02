export class User {
  token: string; //
  userId: string; // 117409121563628234963
  email: string; // jasonxrowland@gmail.com

  picture?: string;
  name?: string; // Jason Rowland
  familyName?: string; // Rowland
  givenName?: string; // Jason

  constructor(token: string, userId: string, email: string) {
    this.token = token;
    this.userId = userId;
    this.email = email;
  }
}
