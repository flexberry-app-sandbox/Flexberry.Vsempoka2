import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-vsempoka2-докум-поставки', 'Unit | Serializer | i-i-s-vsempoka2-докум-поставки', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-vsempoka2-докум-поставки',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-vsempoka2-ед-изм',
    'transform:i-i-s-vsempoka2-статус-заказа',
    'transform:i-i-s-vsempoka2-удовл-кл',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
