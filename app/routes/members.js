import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    return this.store.find('group', params.group_id);
  },

  setupController: function(controller, model){
    this.store.find('member', {group_id: model.get('id')}).then(function(members){
      controller.set('members', members);
    });
  }
});
