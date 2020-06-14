import userSchema from './userSchema.js';
import postSchema from './postSchema.js';
import commentSchema from './commentSchema.js';
import mongoose from 'mongoose';

const host = process.env.MONGO_HOST || 'localhost';
const port = process.env.MONGO_PORT || 27017;
const dbName = 'dbSite';

const uri = `mongodb://${host}:${port}/${dbName}`;

mongoose.connect(uri, {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', (err) => {
  console.error('Упс... Ошибка при подключении к Монге', err);
});

db.once('open', () => {
  console.log('Класс!! Подключились к Монге');
});

const user = mongoose.model('user', userSchema);
const post = mongoose.model('post', postSchema);
const comment = mongoose.model('comment', commentSchema);

export default {
  // post, admin, comment
  user,
  post,
  comment,
}
