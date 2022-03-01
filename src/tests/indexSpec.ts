import supertest from 'supertest';
import app from '../index';

const request = supertest(app);
describe('Test endpoint responses', () => {
  it('gets the api endpoint', async () => {
    const response = await request.get('/api');
    expect(response.status).toBe(200);

  }
  );
  it('gets the main endpoint /', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);

  });
  it('gets the /api/image endpoint with error input file is missing', async () => {
    const response = await request.get('/api/images?fileName=sfdsfdsf&width=200&height=300');
    expect(response.status).toBe(500);

  });
  it('gets the /api/image endpoint with error input width is incorrect', async () => {
    const response = await request.get('/api/images?fileName=bigCat&width=&height=300');
    expect(response.status).toBe(500);

  });
  it('gets the /api/image endpoint with succesful conversion', async () => {
    const response = await request.get('/api/images?fileName=bigCat&width=200&height=300');
    expect(response.status).toBe(200);

  });
});
