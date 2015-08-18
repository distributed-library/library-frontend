import Ember from 'ember';

import pagedArray from 'ember-cli-pagination/computed/paged-array';

export default Ember.ArrayController.extend({
  queryParams: ["page", "perPage"],
  page: 1,
  perPage: 10,
  pagedContent: pagedArray('content', {pageBinding: "page", perPageBinding: "perPage"}),
  totalPagesBinding: "pagedContent.totalPages",

  actions: {
    issueItem: function(id){
      var _this = this;
      this.store.find('available-resource', id).then(function(resource){
        var issue = _this.store.createRecord('issued-resource', resource.get('data'));
        issue.set('resource_id', resource.get('id'));
        issue.save();
        resource.deleteRecord();
      });
    }
  }
});
