import Ember from 'ember';
import StorageObject from 'ember-local-storage/local/object';
 
export default StorageObject.extend({
  storageKey: 'Distributedlibrary',
  initialContent: {
    token: null
  }
});
