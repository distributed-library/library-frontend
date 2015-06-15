import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    deleteGroup: function(id){
      if(confirm("Are you sure ?")){
        this.store.find('group', id).then(function(group){
          group.destroyRecord();
        });
      }
    },
    leaveGroup: function(group_id){
      if(confirm("Are you sure ?")){
        this.store.find('usergroup', group_id).then(function(groupuser){
          groupuser.destroyRecord();
        })
      } 
    },
    joinGroup: function(group_id){
      var groupuser = this.store.createRecord('usergroup', {id: group_id});
      groupuser.save();
    }
  }
});
