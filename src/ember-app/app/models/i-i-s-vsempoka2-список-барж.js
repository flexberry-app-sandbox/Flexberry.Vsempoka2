import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as СписокБаржMixin
} from '../mixins/regenerated/models/i-i-s-vsempoka2-список-барж';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(СписокБаржMixin, Validations, {
});

defineProjections(Model);

export default Model;
