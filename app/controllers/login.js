import Ember from 'ember';
import EmberValidations from 'ember-validations';
import ENV from 'library-frontend/config/environment';

export default Ember.Controller.extend(EmberValidations.Mixin,{
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
      _this.get('session').setAuthHeader();
      _this.send('loading');
      Ember.$.post(ENV.APP.API_HOST +'/sessions', creds).then(
        function(response){
          _this.get('session').setLocalStorage(response);
          _this.transitionToRoute('groups');
          _this.store.unloadAll();
          _this.send('finished');
        },function(xhr){
          _this.set('errors', xhr.responseJSON.errors);
          _this.send('finished');
          console.log('Error');
        }
      );
    }
  }
});
