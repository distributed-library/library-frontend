import Ember from 'ember';

export default Ember.Controller.extend({
  
  session: Ember.inject.service(),

  actions: {
    logout: function(){
      this.get('session').clearSession();
      this.transitionToRoute('login');
    },

    login: function(){
      this.transitionToRoute('login');
    },

    profile: function(){
      this.transitionToRoute('profile');
    }
  }
});
