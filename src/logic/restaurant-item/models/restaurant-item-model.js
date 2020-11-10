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
}
