import { restaurantList } from './restaurants-list-mock-data';
import RestaurantListModel from '../../../logic/restaurants-list/models/restaurant-list-model';
import RestaurantListSortingModel from '../../../logic/restaurant-sorting/models/restaurant-sorting-model';

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

export default class RestaurantListInterface {
  constructor(params = { name: 'Restaurants' }) {
    const { name } = params;

    this.name = name;
  }

  static async fetch({ sortingType }) {
    await delay(2000);
    switch (sortingType) {
      case RestaurantListSortingModel.TYPES.NO_SORTING:
        return restaurantList;
      case RestaurantListSortingModel.TYPES.ALPHABETICAL_SORTING:
        return getRestaurantListOrderedByName(restaurantList);
      case RestaurantListSortingModel.TYPES.MINIMUM_ORDER_VALUE_SORTING:
        return getRestaurantListOrderedByMOV(restaurantList);
      default:
        return restaurantList;
    }
  }

  async fetchList({ sortingType }) {
    const list = await RestaurantListInterface.fetch({ sortingType });

    return list;
  }
}
