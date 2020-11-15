export default class RestaurantItemModel {
  static getId(restaurantData) {
    return restaurantData.id;
  }

  static getName(restaurantData) {
    return restaurantData.name;
  }

  static getLogotype(restaurantData) {
    return restaurantData.restaurantLogo;
  }

  static getCuisines(restaurantData) {
    return restaurantData.cuisines;
  }

  static getMinOrderValue(restaurantData) {
    return restaurantData.info.minimumOrderValue;
  }

  static getMedianRate(restaurantData) {
    return restaurantData.info.ratings.score.median;
  }

  static getEstimatedTime(restaurantData) {
    return restaurantData.shipping.estimatedTime;
  }
}
