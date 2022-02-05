import request from "supertest";
import app from '../src/app.js'

describe('POST /time', () => {
    it('returns status code 200 if time is sended', async() => {
        const data = {
            time: "20:43:00",
            timezone: -3
        }

        await request(app)
            .post('/api/time')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            //expect(res.statusCode).toEqual(200);
    });    
});


