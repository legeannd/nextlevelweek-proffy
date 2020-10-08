import { Request, Response } from 'express';
import { compare } from 'bcrypt';
import { sign, verify } from 'jsonwebtoken';
import db from '../database/connection';

export default class SessionController {
  async index(request: Request, response: Response){
    const { authorization } = request.headers; 

    try {
      if (!authorization) {
        throw new Error('No token');
      }
  
      const [, token] = authorization.split(' ');

      const decoded = verify(token, 'secret');

      
  
      return response.status(200).json({ user: (decoded as any).userData});
    } catch (err) {
      return response.status(400).json({
        error: 'Token error'
      })
    }
  }

  async create(request: Request, response: Response){
    const { email, password } = request.body;

    try {
      const user = await db('users').where({email}).first();

      if (!user) {
        throw new Error('Wrong email or password');
      }

      const comparedPassword = await compare(password, user.password);

      if (!comparedPassword) {
        throw new Error('Wrong email or password');
      }

      const userData = {
        id: user.id, 
        name: user.name, 
        email: user.email
      }

      const token = sign({ userData }, 'secret', { expiresIn: '1d' })
      
      return response.status(200).json(token);
    } catch (err) {
      return response.status(400).json({
        error: 'Error while creating session'
      })
    }

  }
}