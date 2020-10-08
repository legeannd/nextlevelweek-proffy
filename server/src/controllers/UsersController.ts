import { Request, Response } from 'express';
import {hash} from 'bcrypt';

import db from '../database/connection';

export default class UsersController {
  async index (request: Request, response: Response) {

  }

  async create (request: Request, response: Response) {
    const { name, email, password } = request.body;

    const userAlreadyExists = await db.from('users').select('*').where("email", email).first();
    
    if ( userAlreadyExists ) {
      return response.status(400).json({
        error: 'Email already exists'
      });
    }

    if ( !email.includes("@")) {
      return response.status(400).json({
        error: 'Invalid email'
      });
    }

    const trx = await db.transaction();
    try {
      
      const hashedPassword = await hash(password, 10);

      await trx('users').insert({
        name, 
        email, 
        password: hashedPassword,
        avatar: '',
        whatsapp: '',
        bio: ''
      });

      await trx.commit();


      return response.status(200).json({
        message: 'User created successfully' 
      }); 
    } catch (err) {
      await trx.rollback();

      return response.status(400).json({
        error: 'Unexpected error while creating new user \n' + err 
      });
    }
  }
}