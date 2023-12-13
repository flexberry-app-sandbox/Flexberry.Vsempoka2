import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  адрес: DS.attr('string'),
  наименППогр: DS.attr('string')
});

export let ValidationRules = {
  адрес: {
    descriptionKey: 'models.i-i-s-vsempoka2-пункт-погрузки.validations.адрес.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  наименППогр: {
    descriptionKey: 'models.i-i-s-vsempoka2-пункт-погрузки.validations.наименППогр.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПунктПогрузкиE', 'i-i-s-vsempoka2-пункт-погрузки', {
    наименППогр: attr('Наимен п погр', { index: 0 }),
    адрес: attr('Адрес', { index: 1 })
  });

  modelClass.defineProjection('ПунктПогрузкиL', 'i-i-s-vsempoka2-пункт-погрузки', {
    наименППогр: attr('Наимен п погр', { index: 0 }),
    адрес: attr('Адрес', { index: 1 })
  });
};
