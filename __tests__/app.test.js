const request = require('supertest');
const app = require('../index');

describe('API basic tests', () => {
  test('GET /health -> 200 and ok', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ status: 'ok' });
  });

  test('GET /hello -> 200 and message', async () => {
    const res = await request(app).get('/hello');
    expect(res.statusCode).toBe(200);
    expect(res.body.msg).toMatch(/CI\/CD Lab/);
  });
});
