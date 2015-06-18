import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    deleteItem: function(id){
      if(confirm("Are you sure ?")){
        this.store.find('resource', id).then(function(resource){
          resource.destroyRecord();
        });
      }
    },
    editItem: function(id){
      this.transitionToRoute('inventory.edit', id);
    },
    cancelIssue: function(id){
      if(confirm("Are you sure ?")){
        this.store.find('resource', id).then(function(resource){
          resource.set('aasm_state', 'available');
          resource.save();
        }); 
      } 
    },
    issueItem: function(id){
      if(confirm("Are you sure ?")){
        this.store.find('resource', id).then(function(resource){
          resource.set('aasm_state', 'issued');
          resource.save();
        }); 
      } 
    }


  }
});
