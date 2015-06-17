import ApplicationAdapter from './application';
import ENV from "../config/environment";

export default ApplicationAdapter.extend({
  pathForType: function(type) {
    return Ember.String.underscore(type);
  }
});
