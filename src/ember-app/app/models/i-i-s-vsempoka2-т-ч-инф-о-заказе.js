import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ТЧИнфОЗаказеMixin
} from '../mixins/regenerated/models/i-i-s-vsempoka2-т-ч-инф-о-заказе';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ТЧИнфОЗаказеMixin, Validations, {
});

defineProjections(Model);

export default Model;
