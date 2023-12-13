import {
  defineNamespace,
  defineProjections,
  Model as ТЧИнфОЗаказеMixin
} from '../mixins/regenerated/models/i-i-s-vsempoka2-т-ч-инф-о-заказе';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТЧИнфОЗаказеMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
