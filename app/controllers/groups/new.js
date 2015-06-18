import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.Controller.extend(EmberValidations.Mixin,{
  validations: {
    name: {
      presence: true
    }
  },

  actions: {
    submit: function(){
      var _this = this;
      var group = this.store.createRecord('group', {name: this.get('name')});
      group.save().then(function(group){
        var usergroup = _this.store.createRecord('usergroup', {id: group.id});
        usergroup.save().then(function(){
          _this.transitionToRoute('groups');
        });
      });
    }
  }
});
