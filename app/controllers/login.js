import Ember from 'ember';
import EmberValidations from 'ember-validations';
import localStorage from 'library-frontend/models/local-storage';

export default Ember.Controller.extend(EmberValidations.Mixin,{
  email: null,
  password: null,
  localstorage: localStorage.create(),

  validations: {
    email: {
      presence: true
    },
    password: {
      presence: true
    }
  },
  setAuthHeader: function(token) {
    // remove settings
    Ember.$(document).ajaxSend(function(event, xhr) {
      xhr.setRequestHeader("Authorization", "Bearer " + token);
      xhr.setRequestHeader("Accept", "application/json; version=1 ");
    });
  },

  prepare_creds: function(){
    var creds = {};
    creds['email'] = this.email;
    creds['password'] = this.password;
    return { user: creds };
  },

  actions: {
    submit: function(){
      var _this = this;
      var creds = _this.prepare_creds();
      _this.setAuthHeader('');
      Ember.$.post('http://localhost:3000/sessions', creds).then(
        function(response){
          _this.set('localstorage.token',response.token);
          _this.setAuthHeader(response.token);
          _this.transitionToRoute('home');
        },function(){
          console.log('Error');
        }
      );
    }
  }
});
