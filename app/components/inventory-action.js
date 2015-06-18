import Ember from 'ember';
import layout from '../templates/components/inventory-action';

export default Ember.Component.extend({
  layout: layout,

  classNames: 'inventory-action',

  isPendingApproval: function(){
    return this.get('item.aasm_state') === 'pending_approval';
  }.property('item.aasm_state'),

  actions: {
    cancelIssue: function(id){
      this.sendAction('cancelIssue', id);
    },
    issueItem: function(id){
      this.sendAction('issueItem', id);
    }
  } 
});
