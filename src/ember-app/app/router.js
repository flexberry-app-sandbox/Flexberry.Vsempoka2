import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-vsempoka2-докум-поставки-l');
  this.route('i-i-s-vsempoka2-докум-поставки-e',
  { path: 'i-i-s-vsempoka2-докум-поставки-e/:id' });
  this.route('i-i-s-vsempoka2-докум-поставки-e.new',
  { path: 'i-i-s-vsempoka2-докум-поставки-e/new' });
  this.route('i-i-s-vsempoka2-клиенты-l');
  this.route('i-i-s-vsempoka2-клиенты-e',
  { path: 'i-i-s-vsempoka2-клиенты-e/:id' });
  this.route('i-i-s-vsempoka2-клиенты-e.new',
  { path: 'i-i-s-vsempoka2-клиенты-e/new' });
  this.route('i-i-s-vsempoka2-организация-l');
  this.route('i-i-s-vsempoka2-организация-e',
  { path: 'i-i-s-vsempoka2-организация-e/:id' });
  this.route('i-i-s-vsempoka2-организация-e.new',
  { path: 'i-i-s-vsempoka2-организация-e/new' });
  this.route('i-i-s-vsempoka2-пункт-погруз-l');
  this.route('i-i-s-vsempoka2-пункт-погруз-e',
  { path: 'i-i-s-vsempoka2-пункт-погруз-e/:id' });
  this.route('i-i-s-vsempoka2-пункт-погруз-e.new',
  { path: 'i-i-s-vsempoka2-пункт-погруз-e/new' });
  this.route('i-i-s-vsempoka2-пункт-погрузки-l');
  this.route('i-i-s-vsempoka2-пункт-погрузки-e',
  { path: 'i-i-s-vsempoka2-пункт-погрузки-e/:id' });
  this.route('i-i-s-vsempoka2-пункт-погрузки-e.new',
  { path: 'i-i-s-vsempoka2-пункт-погрузки-e/new' });
  this.route('i-i-s-vsempoka2-список-барж-l');
  this.route('i-i-s-vsempoka2-список-барж-e',
  { path: 'i-i-s-vsempoka2-список-барж-e/:id' });
  this.route('i-i-s-vsempoka2-список-барж-e.new',
  { path: 'i-i-s-vsempoka2-список-барж-e/new' });
  this.route('i-i-s-vsempoka2-список-контей-l');
  this.route('i-i-s-vsempoka2-список-контей-e',
  { path: 'i-i-s-vsempoka2-список-контей-e/:id' });
  this.route('i-i-s-vsempoka2-список-контей-e.new',
  { path: 'i-i-s-vsempoka2-список-контей-e/new' });
  this.route('i-i-s-vsempoka2-товары-l');
  this.route('i-i-s-vsempoka2-товары-e',
  { path: 'i-i-s-vsempoka2-товары-e/:id' });
  this.route('i-i-s-vsempoka2-товары-e.new',
  { path: 'i-i-s-vsempoka2-товары-e/new' });
  this.route('i-i-s-vsempoka2-форм-рез-пост-l');
  this.route('i-i-s-vsempoka2-форм-рез-пост-e',
  { path: 'i-i-s-vsempoka2-форм-рез-пост-e/:id' });
  this.route('i-i-s-vsempoka2-форм-рез-пост-e.new',
  { path: 'i-i-s-vsempoka2-форм-рез-пост-e/new' });
  this.route('i-i-s-vsempoka2-формир-распред-l');
  this.route('i-i-s-vsempoka2-формир-распред-e',
  { path: 'i-i-s-vsempoka2-формир-распред-e/:id' });
  this.route('i-i-s-vsempoka2-формир-распред-e.new',
  { path: 'i-i-s-vsempoka2-формир-распред-e/new' });
});

export default Router;
