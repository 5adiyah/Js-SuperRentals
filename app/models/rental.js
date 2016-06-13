import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import {belongsTo} from 'ember-data/relationships';

export default Model.extend({
  owner: attr(),
  city: belongsTo('city', { async: true }),
  type: attr(),
  image: attr(),
  bedrooms: attr()
});
