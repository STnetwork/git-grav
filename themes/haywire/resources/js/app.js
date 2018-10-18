
// Include polyfill for Vue (IE)
import "babel-polyfill";

/**
By Me ---------------------------------------------------------
*/

import Vue from 'vue';
import VueProgressBar from 'vue-progressbar';
import Buefy from 'buefy';
import anchorJS from 'anchor-js';
import VmBackTop from 'vue-multiple-back-top';
//import 'buefy/lib/buefy.css';
//import hljs from 'highlight.js';
/**
By Me ---------------------------------------------------------
*/

/**
By Me ---------------------------------------------------------
*/

Vue.config.devtools = true

Vue.component(VmBackTop.name, VmBackTop);

Vue.use(Buefy);

const options = {
  color: '#bffaf3',
  failedColor: '#874b4b',
  thickness: '5px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'top',
  inverse: false
}

Vue.use(VueProgressBar, options);

// register service worker

//(function() {
//  if('serviceWorker' in navigator) {
//    navigator.serviceWorker.register("/sw.js",{scope:"/"});
//  }
//})();

(function() {
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js', {scope:"/"}).then(function(registration) {
    // registration worked
    console.log('Registration succeeded.');
    registration.register().then(function(boolean) {
      // if boolean = true, unregister is successful
    });
  }).catch(function(error) {
    // registration failed
    console.log('Registration failed with ' + error);
  });
}
})();

//Conf AnchorJS

window.addEventListener('DOMContentLoaded', function(){
  new anchorJS({placement: 'left',visible: 'always',icon: '#'}).add('');
});

/**
By Me ---------------------------------------------------------
*/

// Load all of this project's JavaScript dependencies including Vue
window.Vue = require('vue');

/**
 * Create a fresh Vue application instance and attach it to
 * the page. You may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('navbar', require('./components/Navbar.vue'));
Vue.component('vueprogressbar', require('./components/Progressbar.vue'));

const app = new Vue({
    el: '#app'
});
