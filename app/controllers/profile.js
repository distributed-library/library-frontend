import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  actions: {
    submit: function(){
      var user = this.get('model');
      console.log(this.get('model'), user);
      var _this = this;

      user.save().then(function(){
        _this.transitionToRoute('home');
      });
    },
    cancel: function(){
      this.transitionToRoute('home');
    }
  }

});
