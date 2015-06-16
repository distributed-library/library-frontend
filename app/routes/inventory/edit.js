import Ember from 'ember';

export default Ember.Route.extend({
  
  model: function(params){
    return this.store.find('resource', params.item_id);
  },

  setupController: function(controller, model){
    var _this = this;
    this.store.find('usergroup').then(function(user_groups){
      controller.set('user_groups', user_groups);
    });
    this.store.find('resourcegroup', {resource_id: model.get('id')}).then(function(resource_groups){
      controller.set('resource_groups', resource_groups);
    });
    this._super(controller,model);
  }

});
