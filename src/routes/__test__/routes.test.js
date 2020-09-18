import request from 'supertest';
import server from '../../App';

it('Returns a 200 status code on get "/"', async () => {
  return request(server).get('/').send().expect(200);
});
