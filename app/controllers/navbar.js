import Ember from 'ember';
import localStorage from 'library-frontend/models/local-storage';

export default Ember.Controller.extend({
  
  localstorage: localStorage.create(),

  loggedIn: function(){
    var token = this.get('localstorage.token');
  }.property('localstorage.token'),

  actions: {
    logout: function(){
      this.set('localstorage.token', null);
      //this.set('storage.token',null;)
      this.transitionToRoute('login');
    }
  }
});
