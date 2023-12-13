import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ПунктПогрузMixin
} from '../mixins/regenerated/models/i-i-s-vsempoka2-пункт-погруз';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ПунктПогрузMixin, Validations, {
});

defineProjections(Model);

export default Model;
