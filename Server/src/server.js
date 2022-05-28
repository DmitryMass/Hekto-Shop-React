import fastify from './index';
import db from './db';

(async () => {
  try {
    await fastify.listen(3001);
    await db.authenticate(); // проверка дб в консоле при npm run-e
  } catch (err) {
    console.log(err);
  }
})();
