import Ember from 'ember';
import LoadingSliderMixin from '../mixins/loading-slider';

export default Ember.Route.extend(LoadingSliderMixin,{

  session: Ember.inject.service(),

  beforeModel: function(transition){
    if(transition.targetName === 'index'){
      var localstorage = this.get('session.localstorage');
      if(localstorage === null || localstorage.get('token') === null){
        this.transitionTo('login');
      }else{
        this.transitionTo('home');
      }
    }
  }

});
