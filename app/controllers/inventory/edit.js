import Ember from 'ember';

export default Ember.Controller.extend({

  inventoryTypes: ['book'],

  selectedType: 'book',

  userGroupsList: function(){
    return this.get('user_groups.content');
  }.property('user_groups.@each'),

  selectedGroupsList: function(){
    return this.get('resource_groups.content');
  }.property('resource_groups.@each'),

  actions: {
    submit: function(){
      var _this = this;
      var resource = this.get('model');
      resource.setProperties(
        {
          name: this.get('name'), 
          resource_type: this.get('selectedType'),
          group_ids: $.map(this.get('selectedGroupsList'), function(group){return group.id})
        }
      );
      resource.save().then(function(group){
        _this.transitionToRoute('inventory');
      })
    }
  }
});
