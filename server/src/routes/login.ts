import { Request, Response, Router } from 'express';
import User from '../db/User';
import { GoogleProfile, verify } from '../lib/google-api';

const router = Router();

const findOrCreateGoogleUser = async (payload: GoogleProfile): Promise<User> => {
  const [user, created] = await User.findOrCreate({
    where: { googleId: payload.userId },
    defaults: {
      name: payload.name,
      email: payload.email,
      givenName: payload.given_name,
      familyName: payload.family_name,
      picture: payload.picture,
      locale: payload.locale,
    },
  });
  return user;
};

router.post('/', async (req: Request, res: Response) => {
  const token: string = req.body.token;
  const payload: GoogleProfile = await verify(token);
  const user: User = await findOrCreateGoogleUser(payload);
  res.json(user);
});

export default router;
