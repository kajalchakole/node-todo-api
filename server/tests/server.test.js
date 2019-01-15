const request = require('supertest');
const expect = require('expect');

const { app } = require('./../server');
const { ToDo } = require('./../models/todo');

const todos = [{
    text: "First test todo"
}, {
    text: "Second test todo"
}];

beforeEach((done) => {
    ToDo.remove({}).then(() => {
        return ToDo.insertMany(todos)
    }).then(() => done());
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

                ToDo.find({text}).then((todos) => {
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
                expect(todos.length).toBe(2);
                done();
            }).catch((e) => done(e));
        });
   
    });
});

describe('GET todos route', () => {
    it('Should get all todos', (done) => {
        request(app)
        .get('/todos')
        .expect(200)
        .expect((res) => {
            expect(res.body.todos.length).toBe(2);
        })
        .end(done);
    });
})