import ApplicationAdapter from './application';
import Ember from 'ember';

export default ApplicationAdapter.extend({
  pathForType: function(type) {
    return Ember.String.underscore(type);
  }
});
