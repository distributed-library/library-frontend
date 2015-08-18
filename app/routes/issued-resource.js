import Ember from 'ember';

export default Ember.Route.extend({

  setupController: function(controller){
    this.store.find('issued-resource').then(function(resource){
      controller.set('issued-resources', resource);
    });
  }
});
