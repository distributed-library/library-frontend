import Ember from 'ember';

export default Ember.Controller.extend({

  session: Ember.inject.service(),

  bodyWrapperClass: function(){
    if(this.get('session.isLoggedIn')){
      return "page-wrapper";
    }else{
      return "login";
    }
  }.property('session.localstorage.token')
});
