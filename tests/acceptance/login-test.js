import Ember from 'ember';
import {
  module,
  test
} from 'qunit';
import startApp from 'library-frontend/tests/helpers/start-app';
import Pretender from 'pretender';

var application;
var server;

module('Acceptance: Login', {
  beforeEach: function() {
    application = startApp();
    server = new Pretender(function(){
      this.post("/sessions", function(){
        return [200, {}, JSON.stringify({token: '12345678'})];
      });
    });
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
    server.shutdown();
  }
});

test('visiting /login', function(assert) {
  visit('/login');
  fillIn('.form-horizontal input[type="email"]', 'anil@gmail.com');
  fillIn('.form-horizontal input[type="password"]', '12345678');
  click('.form-horizontal button[type="submit"]');
  andThen(function() {
    assert.equal(find('.form-horizontal button[type="submit"]').length, 1, 'Successfull Login');
  });
});
