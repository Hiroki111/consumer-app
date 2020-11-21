import { restaurantList } from './restaurants-list-mock-data';
import RestaurantListModel from '../../../logic/restaurants-list/models/restaurant-list-model';
import RestaurantListSortingModel from '../../../logic/restaurant-sorting/models/restaurant-sorting-model';
import RestaurantListFiltering from '../../../logic/restaurant-filtering/models/restaurant-filtering-model';

// ****************** HERE WE ARE EMULATING THINGS **********************
// code from here will never go to production, as we will make real fetch
// **********************************************************************
import orderBy from 'lodash/orderBy';
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const getRestaurantListOrderedByName = restaurants => ({
  ...restaurantList,
  data: orderBy(RestaurantListModel.getDataFromResponse(restaurants), ['name'], ['asc']),
});

const getRestaurantListOrderedByMOV = restaurants => ({
  ...restaurantList,
  data: orderBy(
    RestaurantListModel.getDataFromResponse(restaurants),
    ['info.minimumOrderValue'],
    ['asc'],
  ),
});

const getRestaurantListOrderedByRate = restaurants => ({
  ...restaurantList,
  data: orderBy(
    RestaurantListModel.getDataFromResponse(restaurants),
    ['info.ratings.total'],
    ['desc'],
  ),
});

const getRestaurantListOrderedByDeliveryTime = restaurants => ({
  ...restaurantList,
  data: orderBy(
    RestaurantListModel.getDataFromResponse(restaurants),
    ['shipping.estimatedTime'],
    ['asc'],
  ),
});

const getSelectedCuisineMapForFiltering = selectedCuisine => {
  let selectedCuisineMap = {};
  for (const oldKey in selectedCuisine) {
    const newKey = RestaurantListFiltering.CUISINE_TYPES_TRANSLATIONS_MAP[oldKey];
    selectedCuisineMap[newKey] = selectedCuisine[oldKey];
  }
  return selectedCuisineMap;
};

export default class RestaurantListInterface {
  constructor(params = { name: 'Restaurants' }) {
    const { name } = params;

    this.name = name;
  }

  static async fetch({ sortingType, deliveryType, selectedCuisine }) {
    await delay(2000);

    const selectedCuisineMap = getSelectedCuisineMapForFiltering(selectedCuisine);

    const filteredRestaurantList = {
      ...restaurantList,
      data: restaurantList.data
        .filter(restaurant => {
          return (
            !deliveryType ||
            restaurant.shipping.type.includes(
              RestaurantListFiltering.DELIVERY_TRANSLATIONS_MAP[deliveryType],
            )
          );
        })
        .filter(restaurant => restaurant.cuisines.some(cuisine => selectedCuisineMap[cuisine])),
    };

    switch (sortingType) {
      case RestaurantListSortingModel.TYPES.ALPHABETICAL_SORTING:
        return getRestaurantListOrderedByName(filteredRestaurantList);
      case RestaurantListSortingModel.TYPES.MINIMUM_ORDER_VALUE_SORTING:
        return getRestaurantListOrderedByMOV(filteredRestaurantList);
      case RestaurantListSortingModel.TYPES.RATING_SORTING:
        return getRestaurantListOrderedByRate(filteredRestaurantList);
      case RestaurantListSortingModel.TYPES.DELIVERY_TIME_SORTING:
        return getRestaurantListOrderedByDeliveryTime(filteredRestaurantList);
      default:
        return filteredRestaurantList;
    }
  }

  async fetchList({ sortingType, deliveryType, selectedCuisine }) {
    const list = await RestaurantListInterface.fetch({
      sortingType,
      deliveryType,
      selectedCuisine,
    });

    return list;
  }
}
