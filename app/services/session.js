import Ember from 'ember';
import localStorage from 'library-frontend/models/local-storage';

export default Ember.Service.extend({
  localstorage: localStorage.create(),

  isLoggedIn: function(){
    return this.get('localstorage.token') != null;
  }.property('localstorage.token'),

  setAuthHeader: function(){
    var _this = this;
    Ember.$(document).ajaxSend(function(event, xhr) {
      xhr.setRequestHeader("Authorization", "Bearer " + _this.get('localstorage.token'));
      xhr.setRequestHeader("Accept", "application/json; version=1 ");
    });
  },

  clearSession: function(){
    this.set('localstorage.token', null);
  },

  setLocalStorage: function(response){
    this.set('localstorage.token',response.token);
    this.set('localstorage.user_id',response.user_id);
  }
});
