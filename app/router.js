import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('signup');
  this.route('home');
  this.resource('groups', function(){
    this.route('new');
  });
  this.route('available-resources');
  this.route('inventory', function(){
    this.route('new');
  });
  this.route('inventory.edit', {path: '/inventory/:item_id/edit'});
});

export default Router;
