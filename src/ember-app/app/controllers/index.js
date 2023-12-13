import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.vsempoka2.caption'),
          title: i18n.t('forms.application.sitemap.vsempoka2.title'),
          children: [{
            link: 'i-i-s-vsempoka2-форм-рез-пост-l',
            caption: i18n.t('forms.application.sitemap.vsempoka2.i-i-s-vsempoka2-форм-рез-пост-l.caption'),
            title: i18n.t('forms.application.sitemap.vsempoka2.i-i-s-vsempoka2-форм-рез-пост-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-vsempoka2-пункт-погруз-l',
            caption: i18n.t('forms.application.sitemap.vsempoka2.i-i-s-vsempoka2-пункт-погруз-l.caption'),
            title: i18n.t('forms.application.sitemap.vsempoka2.i-i-s-vsempoka2-пункт-погруз-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-vsempoka2-товары-l',
            caption: i18n.t('forms.application.sitemap.vsempoka2.i-i-s-vsempoka2-товары-l.caption'),
            title: i18n.t('forms.application.sitemap.vsempoka2.i-i-s-vsempoka2-товары-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-vsempoka2-список-барж-l',
            caption: i18n.t('forms.application.sitemap.vsempoka2.i-i-s-vsempoka2-список-барж-l.caption'),
            title: i18n.t('forms.application.sitemap.vsempoka2.i-i-s-vsempoka2-список-барж-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-vsempoka2-список-контей-l',
            caption: i18n.t('forms.application.sitemap.vsempoka2.i-i-s-vsempoka2-список-контей-l.caption'),
            title: i18n.t('forms.application.sitemap.vsempoka2.i-i-s-vsempoka2-список-контей-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-vsempoka2-клиенты-l',
            caption: i18n.t('forms.application.sitemap.vsempoka2.i-i-s-vsempoka2-клиенты-l.caption'),
            title: i18n.t('forms.application.sitemap.vsempoka2.i-i-s-vsempoka2-клиенты-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-vsempoka2-докум-поставки-l',
            caption: i18n.t('forms.application.sitemap.vsempoka2.i-i-s-vsempoka2-докум-поставки-l.caption'),
            title: i18n.t('forms.application.sitemap.vsempoka2.i-i-s-vsempoka2-докум-поставки-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-vsempoka2-формир-распред-l',
            caption: i18n.t('forms.application.sitemap.vsempoka2.i-i-s-vsempoka2-формир-распред-l.caption'),
            title: i18n.t('forms.application.sitemap.vsempoka2.i-i-s-vsempoka2-формир-распред-l.title'),
            children: null
          }, {
            link: 'i-i-s-vsempoka2-пункт-погрузки-l',
            caption: i18n.t('forms.application.sitemap.vsempoka2.i-i-s-vsempoka2-пункт-погрузки-l.caption'),
            title: i18n.t('forms.application.sitemap.vsempoka2.i-i-s-vsempoka2-пункт-погрузки-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-vsempoka2-организация-l',
            caption: i18n.t('forms.application.sitemap.vsempoka2.i-i-s-vsempoka2-организация-l.caption'),
            title: i18n.t('forms.application.sitemap.vsempoka2.i-i-s-vsempoka2-организация-l.title'),
            icon: 'briefcase',
            children: null
          }]
        }
      ]
    };
  }),
})