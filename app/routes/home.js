import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),

  beforeModel: function(){
    this.controllerFor('session').checkAuthentication();  
  }
});
