import EmberRouter from '@ember/routing/router';
import config from 'account-test/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {});
Router.map(function () {
  this.route('about');
  this.route('contact', { path: '/getting-in-touch' });
});
