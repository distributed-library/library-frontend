import Ember from 'ember';

export default Ember.Route.extend({

  session: Ember.inject.service(),

  beforeModel: function(transition){
    if(transition.targetName === 'index'){
      var localstorage = this.get('session.localstorage');
      if(localstorage === null || localstorage.get('token') === null){
        this.transitionTo('login');
      }else{
        this.transitionTo('home');
      }
    }
  }

});
