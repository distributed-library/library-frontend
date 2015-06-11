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
    username: {
      presence: true
    },
    password: {
      presence: true
    },
    password_confirmation: {
      presence: true
    }
  },
  actions: {
    submit: function(){
      console.log('after submit');
    }
  }
});
