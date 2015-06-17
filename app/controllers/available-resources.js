import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    issueItem: function(id){
      var _this = this;
      this.store.find('available-resource', id).then(function(resource){
        var issue = _this.store.createRecord('issued-resource', resource._data);
        issue.save();
        resource.deleteRecord();
      });

    }
  }
});
