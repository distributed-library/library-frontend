import Ember from 'ember';

export default Ember.Route.extend({
  
  model: function(){
    return this.store.find('resource');
  },

  setupController: function(controller){
    this.store.find('usergroup').then(function(user_groups){
      controller.set('user_groups', user_groups);
    });
  }

});
