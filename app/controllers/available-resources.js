import Ember from 'ember';

export default Ember.Controller.extend({
  items: function(){
    return this.get('available-resources');
  }.property('available-resources.@each')
});
