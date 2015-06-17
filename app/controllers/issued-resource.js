import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    cancelIssue: function(id){
      this.store.find('issued-resource', id).then(function(resource){
        resource.destroyRecord();
      });
    }
  }
});
