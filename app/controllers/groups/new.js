import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    submit: function(){
      var _this = this;
      var group = this.store.createRecord('group', {name: this.get('name')});
      group.save().then(function(){
        _this.transitionToRoute('groups');
      })
    }
  }
});
