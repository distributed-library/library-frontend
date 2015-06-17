import Ember from 'ember';

export default Ember.Route.extend({

  setupController: function(controller){
    // Ugly hack to unload previous loaded available-resource (https://github.com/emberjs/data/issues/962)
    this.store.unloadAll('issued-resource');
    this.store.find('issued-resource').then(function(resource){
      controller.set('issued-resources', resource.content);
    });
  }
});
