import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  
  checkAuthentication: function(){
    if(!this.get('session.isLoggedIn')){
      this.transitionToRoute('login');
    }
  }

});
