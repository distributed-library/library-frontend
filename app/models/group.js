import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  name: attr('string'),
  owner_id: attr('string'),
  session: Ember.inject.service(),
  allowDelete: function(){
    return this.get('owner_id') === this.get('session.localstorage.user_id');
  }.property('owner_id'),
  allowJoin: function(){
    return this.get('owner_id') != this.get('session.localstorage.user_id');
  }.property('owner_id')
});
