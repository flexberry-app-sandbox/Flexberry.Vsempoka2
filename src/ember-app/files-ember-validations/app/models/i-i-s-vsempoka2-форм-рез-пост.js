import {
  defineNamespace,
  defineProjections,
  Model as ФормРезПостMixin
} from '../mixins/regenerated/models/i-i-s-vsempoka2-форм-рез-пост';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ФормРезПостMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
