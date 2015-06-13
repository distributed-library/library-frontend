import Ember from 'ember';

export default Ember.Controller.extend({
  
  session: Ember.inject.service(),

  localstorage: function(){
    return this.get('session.localstorage');
  }.property(),

  loggedIn: function(){
    var token = this.get('localstorage.token');
    return token != null;
  }.property('localstorage.token'),

  actions: {
    logout: function(){
      var storage = this.get('localstorage');
      storage.set('token', null);
      this.transitionToRoute('login');
    }
  }
});
