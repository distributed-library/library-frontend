import Ember from 'ember';
import pagedArray from 'ember-cli-pagination/computed/paged-array';


export default Ember.ArrayController.extend({
  queryParams: ["page", "perPage"],
  page: 1,
  perPage: 10,
  pagedContent: pagedArray('content', {pageBinding: "page", perPageBinding: "perPage"}),
  totalPagesBinding: "pagedContent.totalPages",

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
