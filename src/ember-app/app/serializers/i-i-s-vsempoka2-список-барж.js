import { Serializer as СписокБаржSerializer } from
  '../mixins/regenerated/serializers/i-i-s-vsempoka2-список-барж';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СписокБаржSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
