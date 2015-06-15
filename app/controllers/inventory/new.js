import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    submit: function(){
      var _this = this;
      var resource = this.store.createRecord('resource', {name: this.get('name'), type: this.get('type')});
      resource.save().then(function(group){
        _this.transitionToRoute('inventory');
      })
    }
  }
});
