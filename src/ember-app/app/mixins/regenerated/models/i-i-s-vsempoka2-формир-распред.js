import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  номерРаспред: DS.attr('number'),
  докумПоставки: DS.belongsTo('i-i-s-vsempoka2-докум-поставки', { inverse: null, async: false }),
  пунктПогруз: DS.belongsTo('i-i-s-vsempoka2-пункт-погруз', { inverse: null, async: false }),
  списокБарж: DS.belongsTo('i-i-s-vsempoka2-список-барж', { inverse: null, async: false }),
  списокКонтей: DS.belongsTo('i-i-s-vsempoka2-список-контей', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-vsempoka2-формир-распред.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номерРаспред: {
    descriptionKey: 'models.i-i-s-vsempoka2-формир-распред.validations.номерРаспред.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  докумПоставки: {
    descriptionKey: 'models.i-i-s-vsempoka2-формир-распред.validations.докумПоставки.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  пунктПогруз: {
    descriptionKey: 'models.i-i-s-vsempoka2-формир-распред.validations.пунктПогруз.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  списокБарж: {
    descriptionKey: 'models.i-i-s-vsempoka2-формир-распред.validations.списокБарж.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  списокКонтей: {
    descriptionKey: 'models.i-i-s-vsempoka2-формир-распред.validations.списокКонтей.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ФормирРаспредE', 'i-i-s-vsempoka2-формир-распред', {
    номерРаспред: attr('Номер распред', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    списокБарж: belongsTo('i-i-s-vsempoka2-список-барж', 'Список барж', {
      производитель: attr('Производитель', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'производитель' }),
    докумПоставки: belongsTo('i-i-s-vsempoka2-докум-поставки', 'Докум поставки', {
      дата: attr('Дата', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'дата' }),
    списокКонтей: belongsTo('i-i-s-vsempoka2-список-контей', 'Список контей', {
      наимКонтей: attr('Наим контей', { index: 7, hidden: true })
    }, { index: 6, displayMemberPath: 'наимКонтей' }),
    пунктПогруз: belongsTo('i-i-s-vsempoka2-пункт-погруз', 'Пункт погруз', {
      наим: attr('Наим', { index: 9, hidden: true })
    }, { index: 8, displayMemberPath: 'наим' })
  });

  modelClass.defineProjection('ФормирРаспредL', 'i-i-s-vsempoka2-формир-распред', {
    номерРаспред: attr('Номер распред', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    списокБарж: belongsTo('i-i-s-vsempoka2-список-барж', 'Производитель', {
      производитель: attr('Производитель', { index: 2 })
    }, { index: -1, hidden: true }),
    докумПоставки: belongsTo('i-i-s-vsempoka2-докум-поставки', 'Дата', {
      дата: attr('Дата', { index: 3 })
    }, { index: -1, hidden: true }),
    списокКонтей: belongsTo('i-i-s-vsempoka2-список-контей', 'Наим контей', {
      наимКонтей: attr('Наим контей', { index: 4 })
    }, { index: -1, hidden: true }),
    пунктПогруз: belongsTo('i-i-s-vsempoka2-пункт-погруз', 'Наим', {
      наим: attr('Наим', { index: 5 })
    }, { index: -1, hidden: true })
  });
};
