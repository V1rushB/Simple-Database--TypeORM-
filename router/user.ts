import express, { Request, Response } from 'express';
import usrs from '../types/user.js';
import { User } from '../db/entity/User.js';

const router = express.Router();

const registerUser = async (req: Request, res: Response) => {
  try {
    const obj: usrs.usr = req.body;
    const found = await User.findOne({where: { username: obj.username }});
    
    if (found) {
      return res.status(401).send('User already exists dude, tryna hack the system?');
    }

    const newUser = new User();
    newUser.username = obj.username;
    newUser.password = obj.password;
    await newUser.save();

    res.status(200).send('User added successfully to the database.');
  } catch (err) {
    console.error(err);
    res.status(400).send('did something wrong just happened..?');
  }
};

router.post('/', registerUser);

export default router;
