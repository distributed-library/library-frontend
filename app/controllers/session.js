import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  
  checkAuthentication: function(){
    if(this.get('session.isLoggedIn')){
      this.get('session').setAuthHeader();
    }else{
      this.transitionToRoute('login');
    }
  }

});
