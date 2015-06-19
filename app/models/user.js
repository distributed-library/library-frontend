import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  username: attr('string'),
  email: attr('string'),
  password: attr('string')
});
