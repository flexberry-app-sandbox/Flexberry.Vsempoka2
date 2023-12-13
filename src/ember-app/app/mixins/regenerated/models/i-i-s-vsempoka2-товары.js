import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  едИзм: DS.attr('i-i-s-vsempoka2-ед-изм'),
  масса: DS.attr('decimal'),
  наимТовара: DS.attr('string'),
  произв: DS.attr('string'),
  цена: DS.attr('decimal')
});

export let ValidationRules = {
  едИзм: {
    descriptionKey: 'models.i-i-s-vsempoka2-товары.validations.едИзм.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  масса: {
    descriptionKey: 'models.i-i-s-vsempoka2-товары.validations.масса.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  наимТовара: {
    descriptionKey: 'models.i-i-s-vsempoka2-товары.validations.наимТовара.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  произв: {
    descriptionKey: 'models.i-i-s-vsempoka2-товары.validations.произв.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  цена: {
    descriptionKey: 'models.i-i-s-vsempoka2-товары.validations.цена.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТоварыE', 'i-i-s-vsempoka2-товары', {
    наимТовара: attr('Наим товара', { index: 0 }),
    произв: attr('Произв', { index: 1 }),
    едИзм: attr('Ед изм', { index: 2 }),
    цена: attr('Цена', { index: 3 }),
    масса: attr('Масса', { index: 4 })
  });

  modelClass.defineProjection('ТоварыL', 'i-i-s-vsempoka2-товары', {
    наимТовара: attr('Наим товара', { index: 0 }),
    произв: attr('Произв', { index: 1 }),
    едИзм: attr('Ед изм', { index: 2 }),
    цена: attr('Цена', { index: 3 }),
    масса: attr('Масса', { index: 4 })
  });
};
