import { Serializer as ТЧИнфОЗаказеSerializer } from
  '../mixins/regenerated/serializers/i-i-s-vsempoka2-т-ч-инф-о-заказе';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ТЧИнфОЗаказеSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
