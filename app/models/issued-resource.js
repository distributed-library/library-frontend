import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  name: attr('string'),
  resource_id: attr('string'),
  resource_type: attr('string'),
  aasm_state: attr('string'),
  owner_name: attr('string'),
  group_ids: attr()
});
