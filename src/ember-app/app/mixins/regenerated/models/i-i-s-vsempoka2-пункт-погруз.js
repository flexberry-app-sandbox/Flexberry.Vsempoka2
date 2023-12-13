import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  адрес: DS.attr('string'),
  наим: DS.attr('string')
});

export let ValidationRules = {
  адрес: {
    descriptionKey: 'models.i-i-s-vsempoka2-пункт-погруз.validations.адрес.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  наим: {
    descriptionKey: 'models.i-i-s-vsempoka2-пункт-погруз.validations.наим.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПунктПогрузE', 'i-i-s-vsempoka2-пункт-погруз', {
    наим: attr('Наим', { index: 0 }),
    адрес: attr('Адрес', { index: 1 })
  });

  modelClass.defineProjection('ПунктПогрузL', 'i-i-s-vsempoka2-пункт-погруз', {
    наим: attr('Наим', { index: 0 }),
    адрес: attr('Адрес', { index: 1 })
  });
};
