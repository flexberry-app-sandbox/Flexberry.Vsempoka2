import {
  defineNamespace,
  defineProjections,
  Model as ДокумПоставкиMixin
} from '../mixins/regenerated/models/i-i-s-vsempoka2-докум-поставки';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ДокумПоставкиMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
