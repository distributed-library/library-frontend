import Ember from 'ember';

export default Ember.Route.extend({

  session: Ember.inject.service(),

  model: function(){
    return this.store.find('user', this.get('session.localstorage.user_id'));
  },

  setupController: function(controller, model){
    this.store.find('group').then(function(groups){
      controller.set('groups', groups);
    });
    this.store.find('usergroup').then(function(user_groups){
      controller.set('user_groups', user_groups);
    });
  }
});
