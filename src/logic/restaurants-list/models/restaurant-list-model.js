import get from 'lodash/get';

export default class RestaurantsListModel {
  static getDataFromResponse(response) {
    return get(response, 'data', []);
  }

  static getMetaFromResponce(responce) {
    return get(responce, 'meta', {});
  }

  static getAggregatesFromResponce(responce) {
    return get(responce, 'aggregates', {});
  }
}
