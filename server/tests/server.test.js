const request = require('supertest');
const expect = require('expect');

const { app } = require('./../server');
const { ToDo } = require('./../models/todo');

beforeEach((done) => {
    ToDo.remove({}).then(() => done());
});

describe('POST/Todos', () => {
    it('Should create a new Todo', (done) => {
        var text = 'Test todo text';

        request(app)
            .post('/todos')
            .send({ text })
            .expect(200)
            .expect((res) => {
                expect(res.body.text).toBe(text);
            })
            .end((err, res) => {
                if (err) {
                    return done(err);
                }

                ToDo.find().then((todos) => {
                    expect(todos.length).toBe(1);
                    expect(todos[0].text).toBe(text);
                    done();
                }).catch((e) => done(e));
            });
    });


    it('Should not create todo with invalid body data', (done) => {
        request(app)
        .post('/todos')
        .send({})
        .expect(400)
        .end((err, res) => {
            if(err) {
                return done(err);
            }
            ToDo.find().then((todos) => {
                expect(todos.length).toBe(0);
                done();
            }).catch((e) => done(e));
        });
   
    });
});