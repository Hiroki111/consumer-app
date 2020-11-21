export default class RestaurantListFiltering {
  static getDeliveryTypesArray() {
    return Object.values(RestaurantListFiltering.DELIVERY_TYPES);
  }

  static getDeliveryTypeTranslationsMap() {
    return RestaurantListFiltering.DELIVERY_TRANSLATIONS_MAP;
  }

  static getCuisineTypesArray() {
    return Object.values(RestaurantListFiltering.CUISINE_TYPES);
  }

  static getCuisineTranslationsMap() {
    return RestaurantListFiltering.CUISINE_TYPES_TRANSLATIONS_MAP;
  }
}

RestaurantListFiltering.DELIVERY_TYPES = {
  DELIVERY: 'DELIVERY',
  PICKUP: 'PICKUP',
};

RestaurantListFiltering.DELIVERY_TRANSLATIONS_MAP = {
  DELIVERY: 'delivery',
  PICKUP: 'pickup',
};

RestaurantListFiltering.CUISINE_TYPES = {
  JAPANESE: 'JAPANESE',
  PIZZA: 'PIZZA',
  ITALIAN: 'ITALIAN',
  SUSHI: 'SUSHI',
  BURGER: 'BURGER',
  FRENCH: 'FRENCH',
};

RestaurantListFiltering.CUISINE_TYPES_TRANSLATIONS_MAP = {
  JAPANESE: 'japanese',
  PIZZA: 'pizza',
  ITALIAN: 'italian',
  SUSHI: 'sushi',
  BURGER: 'burger',
  FRENCH: 'french',
};
