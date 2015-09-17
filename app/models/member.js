import DS from 'ember-data';
var attr = DS.attr;

export default DS.Model.extend({
  username: attr('string'),
  email: attr('string'),
  first_name: attr('string'),
  last_name: attr('string'),
  short_bio: attr('string'),
});
