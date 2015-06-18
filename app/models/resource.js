import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  name: attr('string'),
  resource_type: attr('string'),
  aasm_state: attr('string'),
  issuer_name: attr('string'),
  group_ids: attr(),
  state: function(){
    var aasm_state = this.get('aasm_state');
    if(aasm_state === 'available'){
      return aasm_state;
    }else{
      return aasm_state + ' for ' + this.get('issuer_name');
    }
  }.property('aasm_state')
});
