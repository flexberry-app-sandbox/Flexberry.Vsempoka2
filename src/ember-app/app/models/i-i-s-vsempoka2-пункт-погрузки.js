import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ПунктПогрузкиMixin
} from '../mixins/regenerated/models/i-i-s-vsempoka2-пункт-погрузки';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ПунктПогрузкиMixin, Validations, {
});

defineProjections(Model);

export default Model;
