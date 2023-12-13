import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-vsempoka2-организация', 'Unit | Model | i-i-s-vsempoka2-организация', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-vsempoka2-докум-поставки',
    'model:i-i-s-vsempoka2-клиенты',
    'model:i-i-s-vsempoka2-организация',
    'model:i-i-s-vsempoka2-пункт-погруз',
    'model:i-i-s-vsempoka2-пункт-погрузки',
    'model:i-i-s-vsempoka2-список-барж',
    'model:i-i-s-vsempoka2-список-контей',
    'model:i-i-s-vsempoka2-т-ч-инф-о-заказе',
    'model:i-i-s-vsempoka2-товары',
    'model:i-i-s-vsempoka2-форм-рез-пост',
    'model:i-i-s-vsempoka2-формир-распред',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
