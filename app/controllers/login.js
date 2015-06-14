import Ember from 'ember';
import EmberValidations from 'ember-validations';
import ENV from 'library-frontend/config/environment';

export default Ember.Controller.extend(EmberValidations.Mixin,{
  needs: ['navbar'],
  email: null,
  password: null,
  session: Ember.inject.service(),

  validations: {
    email: {
      presence: true
    },
    password: {
      presence: true
    }
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
      var localstorage = this.get('session.localstorage');
      _this.get('session').setAuthHeader();
      Ember.$.post(ENV.APP.API_HOST +'/sessions', creds).then(
        function(response){
          localstorage.set('token',response.token);
          _this.transitionToRoute('home');
        },function(){
          console.log('Error');
        }
      );
    }
  }
});
