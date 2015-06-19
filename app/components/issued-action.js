import Ember from 'ember';
import layout from '../templates/components/issued-action';

export default Ember.Component.extend({
  layout: layout,

  isPendingApproval: function(){
    return this.get('item.aasm_state') === 'pending_approval';
  }.property('item.aasm_state'),

  actions: {
    cancelIssue: function(id){
      this.sendAction('cancelIssue', id);
    },
    returnItem: function(id){
      this.sendAction('returnItem', id);
    }
  }

});
