import DS from 'ember-data';
import ENV from "../config/environment";

export default DS.RESTAdapter.extend({
  session: Ember.inject.service(),
  host: ENV.APP.API_HOST,
  headers: function(){
    return {
      "Authorization": "Bearer " + this.get('session.localstorage.token'),
      "Accept": "application/json; version=1"
    };
  }.property('session.localstorage.token')
});
