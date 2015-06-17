import Ember from 'ember';
import layout from '../templates/components/issued-action';

export default Ember.Component.extend({
  layout: layout,

  isPendingApproval: function(){
    return this.get('aasm_state') == 'pending_approval';
  },

  actions: {
    cancelIssue: function(id){
      this.sendAction('cancelIssue', id);
    }
  }

});
