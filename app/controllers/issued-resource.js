import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    cancelIssue: function(id){
      this.store.find('issued-resource', id).then(function(resource){
        resource.destroyRecord();
      });
    },
    returnItem: function(id){
      if(confirm("Are you sure ?")){
        this.store.find('resource', id).then(function(resource){
          resource.set('aasm_state', 'available');
          resource.save();
        }); 
        this.store.find('issued-resource', id).then(function(resource){
          resource.deleteRecord();
        });
      } 
    }
  }

});
