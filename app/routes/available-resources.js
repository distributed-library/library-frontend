import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),

  model: function(){
    return this.store.find('user', this.get('session.localstorage.user_id'));
  },

  setupController: function(controller){
    // Ugly hack to unload previous loaded available-resource (https://github.com/emberjs/data/issues/962)
    this.store.unloadAll('available-resource');
    this.store.find('available-resource').then(function(resource){
      controller.set('available-resources', resource.content);
    });
  }
});
