import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ЕдИзмEnum from '../enums/i-i-s-vsempoka2-ед-изм';

export default FlexberryEnum.extend({
  enum: ЕдИзмEnum,
  sourceType: 'IIS.Vsempoka2.ЕдИзм'
});
