import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),
  model: function(){
    return this.store.find('user', this.get('session.localstorage.user_id'));
  }

});
