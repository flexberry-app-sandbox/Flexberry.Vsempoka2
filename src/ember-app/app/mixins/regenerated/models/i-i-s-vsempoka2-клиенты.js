import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  иНН: DS.attr('number'),
  наимЗаказа: DS.attr('string'),
  пунктПостав: DS.attr('string'),
  расСчет: DS.attr('number'),
  телефон: DS.attr('number')
});

export let ValidationRules = {
  иНН: {
    descriptionKey: 'models.i-i-s-vsempoka2-клиенты.validations.иНН.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наимЗаказа: {
    descriptionKey: 'models.i-i-s-vsempoka2-клиенты.validations.наимЗаказа.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  пунктПостав: {
    descriptionKey: 'models.i-i-s-vsempoka2-клиенты.validations.пунктПостав.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  расСчет: {
    descriptionKey: 'models.i-i-s-vsempoka2-клиенты.validations.расСчет.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  телефон: {
    descriptionKey: 'models.i-i-s-vsempoka2-клиенты.validations.телефон.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КлиентыE', 'i-i-s-vsempoka2-клиенты', {
    наимЗаказа: attr('Наим заказа', { index: 0 }),
    иНН: attr('ИНН', { index: 1 }),
    телефон: attr('Телефон', { index: 2 }),
    пунктПостав: attr('Пункт постав', { index: 3 }),
    расСчет: attr('Рас счет', { index: 4 })
  });

  modelClass.defineProjection('КлиентыL', 'i-i-s-vsempoka2-клиенты', {
    наимЗаказа: attr('Наим заказа', { index: 0 }),
    иНН: attr('ИНН', { index: 1 }),
    телефон: attr('Телефон', { index: 2 }),
    пунктПостав: attr('Пункт постав', { index: 3 }),
    расСчет: attr('Рас счет', { index: 4 })
  });
};
