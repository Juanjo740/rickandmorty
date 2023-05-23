const app = require('../src/app');
const session = require('supertest');
const agent = session(app);

describe(`Tets de Rutas`, () => {

    describe(`GET /rickandmorty/character/:id`, () => {

        it(`Responde con status: 200`, async () => {

            const response = await agent.get("/rickandmorty/character/1");
            expect(response.statusCode).toEqual(200);
        })
    })
})

// [1, 2, 3, 4].toBe([1, 2, 3, 4])
//      1233              8273