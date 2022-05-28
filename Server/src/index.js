import Fastify from 'fastify';
//
import { hash, compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
//
import User from './models/User';
import { validationSchemeLogin, validationSchemeRegister } from './validation';

const SECRET_KEY = 'this is secret key';
//
const fastify = Fastify({
  logger: true,
});

fastify.register(import('@fastify/cors'));
fastify.register(import('@fastify/multipart'), {
  addToBody: true,
});
fastify.register(import('@fastify/cookie'));

// register
fastify.post('/register', validationSchemeRegister, async (request, reply) => {
  const { username, email, password } = request.body;

  //   console.log(await User.findOne({ where: { email } })); need Null

  if (await User.findOne({ where: { email } })) {
    return reply
      .status(400)
      .send({ info: 'Email already exist', name: 'email' });
  } else {
    const user = new User({
      username,
      email,
      password: await hash(password, 10),
    });
    await user.save();
    return reply.send({ info: 'Success' });
  }
});

fastify.post('/login', validationSchemeLogin, async (request, reply) => {
  const { email, password } = request.body;

  const user = await User.findOne({ where: { email } });

  if (!user) {
    return reply.status(404).send({ info: 'User not found', name: 'email' });
  } else if (user && (await compare(password, user.password))) {
    return reply.send({
      token: await sign(
        { email, id: user.id, username: user.username },
        SECRET_KEY,
        {
          expiresIn: '24h',
        }
      ),
      email: user.email,
      username: user.username,
    });
  } else {
    return reply
      .status(403)
      .send({ info: 'Incorrect Password', name: 'password' });
  }
});

// testing requst
fastify.get('/hello', (request, reply) => {
  return reply.send('world');
});

export default fastify;
