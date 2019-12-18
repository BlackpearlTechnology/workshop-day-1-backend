const request = require('supertest')

const app = require('../src/app')
const Video = require('../src/api/models/Video')

// Dummy data
const validEntry = {
  title: 'Valid title',
  description: 'Valid desc',
  uploader: 'Valid uploader'
}

beforeAll(async () => {
  await Video.deleteMany()
  await new Video(validEntry).save()
})

// * GET ==> /api/videos - Fetch all videos
test('Should fetch all videos', async () => {
  await request(app)
    .get('/api/videos')
    .expect(200)
})

// * POST ==> /api/videos - Add video
test('Should add a video', async () => {
  await request(app)
    .post('/api/videos')
    .send(validEntry)
    .expect(201)
})

// ? See https://dev.to/nedsoft/testing-nodejs-express-api-with-jest-and-supertest-1km6
