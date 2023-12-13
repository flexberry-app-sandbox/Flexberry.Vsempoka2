import {
  defineNamespace,
  defineProjections,
  Model as ПунктПогрузMixin
} from '../mixins/regenerated/models/i-i-s-vsempoka2-пункт-погруз';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПунктПогрузMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
