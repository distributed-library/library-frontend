import Ember from 'ember';

export default Ember.Route.extend({

  session: Ember.inject.service(),

  model: function(){
    return this.store.find('user', this.get('session.localstorage.user_id'));
  },

  setupController: function(controller){
    this.store.find('group').then(function(groups){
      controller.set('groups', groups);
    });
    // Ugly hack to unload previous loaded usergroup (https://github.com/emberjs/data/issues/962)
    this.store.unloadAll('usergroup');
    this.store.find('usergroup').then(function(user_groups){
      controller.set('user_groups', user_groups);
    });
  }
});
