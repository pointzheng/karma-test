
const request = require('supertest');
const { expect } = require('chai')

describe('API test using mocha and chai', function() {
  it('GET test', function (done) {
    request('https://jsonplaceholder.typicode.com')
      .get('/todos/1')
      .set('Content-Type', 'application/json')  // set header内容
      .expect(200)                              // 断言希望得到返回http状态码
      .end(function (err, res) {                // 返回结果
        if (err) throw err;
        console.info('GET body:', res.text)     
        expect(JSON.parse(res.text).userId).to.equal(1)
        done()
      })
  });

  it('POST test', function (done) {
    request('https://jsonplaceholder.typicode.com')
      .post('/posts')
      .set('Content-Type', 'application/json; charset=UTF-8') 
      .send({ // body内容
        title: 'foo',
        body: 'bar',
        userId: 1,
      })
      .expect(200) 
      .end(function (err, res) {
        console.info('POST body:', res.text) // 返回结果
        expect(JSON.parse(res.text).userId).to.equal(1)
        done()
      })
  });

  it('okapi API test', function(done) {
    request('http://222.29.77.76:9130')
      .get('/_/proxy/modules')
      .expect(200)
      .end(function(err, res) {
        console.log('Okapi body:', res.body)
        done()
      });
  })
});
