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
  this.route('members', {path: '/group/:group_id/members'});
  this.route('available-resources');
  this.route('inventory', function(){
    this.route('new');
  });
  this.route('inventory.edit', {path: '/inventory/:item_id/edit'});
  this.route('issued-resource');
  this.route('profile');
});

export default Router;
