import Ember from 'ember';
import localStorage from 'library-frontend/models/local-storage';

export default Ember.Service.extend({
  localstorage: localStorage.create(),

});
