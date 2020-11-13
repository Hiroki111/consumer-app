export default class RestaurantListSorting {
  static getSortingTypesArray() {
    return Object.values(RestaurantListSorting.TYPES);
  }

  static getTranslationsMap() {
    return RestaurantListSorting.TRANSLATIONS_MAP;
  }
}

RestaurantListSorting.TYPES = {
  NO_SORTING: 'NO_SORTING',
  ALPHABETICAL_SORTING: 'ALPHABETICAL_SORTING',
  MINIMUM_ORDER_VALUE_SORTING: 'MINIMUM_ORDER_VALUE_SORTING',
  RATING_SORTING: 'RATING_SORTING',
  DELIVERY_TIME_SORTING: 'DELIVERY_TIME_SORTING',
};

RestaurantListSorting.TRANSLATIONS_MAP = {
  NO_SORTING: 'noSorting',
  ALPHABETICAL_SORTING: 'alphabetically',
  MINIMUM_ORDER_VALUE_SORTING: 'byMinimumOrderValue',
  RATING_SORTING: 'byRating',
  DELIVERY_TIME_SORTING: 'byDeliveryTime',
};
