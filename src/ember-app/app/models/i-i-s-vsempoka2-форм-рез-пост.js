import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ФормРезПостMixin
} from '../mixins/regenerated/models/i-i-s-vsempoka2-форм-рез-пост';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ФормРезПостMixin, Validations, {
});

defineProjections(Model);

export default Model;
