import { OAuth2Client } from 'google-auth-library';

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export interface GoogleProfile {
  userId: string;
  email: string;
  name: string;
  picture: string;
  given_name: string;
  family_name: string;
  locale: string;
}

export const verify = async (token: string): Promise<GoogleProfile> => {
  try {
    console.log('token: ', token);
    console.log('GOOGLE_CLIENT_ID: ', process.env.GOOGLE_CLIENT_ID);
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID!,
    });
    const payload: any = ticket.getPayload() || { sub: undefined };
    console.log('payload: ', payload);
    const userId: any = payload.sub;

    return {
      userId: payload.sub,
      email: payload.email,
      name: payload.name,
      picture: payload.picture,
      given_name: payload.given_name,
      family_name: payload.family_name,
      locale: payload.locale,
    };
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export default verify;
