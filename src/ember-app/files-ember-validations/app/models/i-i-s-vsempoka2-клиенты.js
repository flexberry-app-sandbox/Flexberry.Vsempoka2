import {
  defineNamespace,
  defineProjections,
  Model as КлиентыMixin
} from '../mixins/regenerated/models/i-i-s-vsempoka2-клиенты';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(КлиентыMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
