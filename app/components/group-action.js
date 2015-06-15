import Ember from 'ember';
import layout from '../templates/components/group-action';

export default Ember.Component.extend({
  layout: layout,

  session: Ember.inject.service(),

  allowDelete: function(){
    return this.get('group.owner_id') === this.get('session.localstorage.user_id');
  }.property('user_groups.@each'),

  joined: function(){
    return this.get('user_groups.content') && 
           this.get('user_groups.content').filterBy('id', this.get('group.id')).length > 0;
  }.property('user_groups.@each'),
  
  actions: {
    deleteGroup: function(id){
      this.sendAction('deleteGroup', id)
    },
    leaveGroup: function(group_id){
      this.sendAction('leaveGroup', group_id)
    },
    joinGroup: function(group_id){
      this.sendAction('joinGroup', group_id)
    }
  }
});
