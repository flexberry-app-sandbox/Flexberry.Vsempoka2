import {
  defineNamespace,
  defineProjections,
  Model as ПунктПогрузкиMixin
} from '../mixins/regenerated/models/i-i-s-vsempoka2-пункт-погрузки';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПунктПогрузкиMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
