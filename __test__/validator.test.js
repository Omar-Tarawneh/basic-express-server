'use strict';
const supertest = require('supertest');
const server = require('../src/server.js');
const request = supertest(server.app);

describe('Server valditor', () => {
  it('handle server error', async () => {
    const response = await request.get('/person');
    expect(response.status).toEqual(500);
  });
  it('handle valid name and route', async () => {
    const response = await request.get('/person').query({ name: 'omar' });
    expect(response.status).toEqual(200);
    expect(response.body).toStrictEqual({ name: 'omar' });
  });
});
