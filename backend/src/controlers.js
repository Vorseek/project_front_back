import {birthDateToFormatDate, hashPassword} from "./helpers.js";
import Boom from '@hapi/boom';
import database from './database/connection.js';
import uuid from 'uuid';
import jwt from 'jsonwebtoken';


export default {
  register: async ( request, h) => {
    try {

      const { name, surname, email, password, birthDate } = request.payload;
      const id = uuid.v4();
      const alreadyRegistered = await database.user.findOne({ email });

      if (alreadyRegistered) {
        return Boom.badRequest('Пользователь с таким логином уже зарегестрирован');
      }


      database.user.create({
        email,
        name,
        surname,
        password: hashPassword(password),
        birthDate: birthDateToFormatDate(birthDate),
        id,
        token: jwt.sign({ name, surname, birthDate, id }, process.env.SECRET_OR_PRIVATE_KEY)
      });


      return `Ok`;
    } catch (e) {
      console.log(e);
      return Boom.badImplementation('Произошла ошибка при регистрации пользователя попробуйте позднее');
    }
  },

  login: async (request, h) => {
    try {
      const { email, password } = request.payload;

      const foundUser = await database.user.findOne({ email, password: hashPassword(password) });

      if (foundUser) {
        return foundUser.token;
      }

      return Boom.unauthorized('Не верный логин или пароль');
    } catch (e) {
      console.log(e);
      return Boom.badImplementation('Произошла ошибка при авторизации пользователя попробуйте позднее');
    }
  },

  info: async (request, h) => {
    try {
      const searchUserId = await database.user.findOne({ id: request.query.id });
      if (searchUserId) {
        return searchUserId;
      } else if (!searchUserId) {
        return database.user.find();
      }


      return Boom.unauthorized('Упс... Произошла ошибка попробуйте позже');
    } catch (e) {
      console.log(e);
      return Boom.badImplementation('Упс... При получении информации о пользователе произошла ошибка. Попробуйте позднее.');
    }
  },

  editInfo: async (request, h) => {
    try {
      const { id, name, surname, email, password, birthDate } = request.query;

      const searchUserId = await database.user.findOne({ id });
      if (searchUserId) {
        await searchUserId.updateOne({
          name: name || searchUserId.name,
          surname: surname || searchUserId.surname,
          password: hashPassword(password) || searchUserId.password,
          birthDate: birthDateToFormatDate(birthDate) || searchUserId.birthDate,
        });
        return 'ok';
      }

      return Boom.badRequest('Пользователь не найден');
    } catch (e) {
      console.log(e);
      return Boom.badImplementation('Упс. При изменении информации о пользователе произошла ошибка. Попробуйте позднее.');
    }
  },

  userDeleted: async (request, h) => {
    try {
      const id = request.query.id;
      if (id) {
        await database.user.deleteOne({ id });
        return 'ok';
      }
      return Boom.badRequest('Пользователь не найден.');
    } catch (e) {
      console.log(e);
      return Boom.badImplementation('Упс. При удалении пользователя произошла ошибка. Попробуйте позднее.');
    }
  },
  postCreate: async (request) => {
    try {
      const { text, id } = request.payload;
      await database.post.create({
        text,
        id
      })
      return 'ok';
    } catch (e) {
      console.log(e);
      return Boom.badImplementation('Упс. При создании поста произошла ошибка. Попробуйте позднее.');
    }
  }
};