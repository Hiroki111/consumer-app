import RestaurantListSortingModel from '../../../../logic/restaurant-sorting/models/restaurant-sorting-model';
import RestaurantListFiltering from '../../../../logic/restaurant-filtering/models/restaurant-filtering-model';
import { initialSelectedCuisine } from '../../../../logic/restaurant-filtering/ducks/restaurant-filtering-reducer';
import networkInterfaceFactory from '../../../../mechanisms/network/server-network-interface-factory';
import * as restaurantListMockData from '../restaurants-list-mock-data';

const network = networkInterfaceFactory();

const createMockRestaurant = ({
  id,
  name = 'Test',
  slug = 'test',
  restaurantLogo = '',
  cuisines = ['japanese', 'pizza', 'italian', 'sushi', 'burger', 'french'],
  shipping = { type: ['delivery', 'pickup'], estimatedTime: 10 },
  info = {
    open: true,
    minimumOrderValue: 100,
    ratings: { total: 100, score: { median: 2.5, average: 2.5 } },
  },
}) => ({ id, name, slug, restaurantLogo, cuisines, shipping, info });

const createFetchListParmeter = ({
  sortingType = RestaurantListSortingModel.TYPES.NO_SORTING,
  deliveryType = RestaurantListFiltering.DELIVERY_TYPES.DELIVERY,
  selectedCuisine = initialSelectedCuisine(RestaurantListFiltering.getCuisineTypesArray()),
}) => ({ sortingType, deliveryType, selectedCuisine });

describe('RestaurantListInterface', () => {
  it('fetches a sorted restaurant list - NO_SORTING', async () => {
    const mockList = [
      createMockRestaurant({ id: 1 }),
      createMockRestaurant({ id: 2 }),
      createMockRestaurant({ id: 3 }),
    ];
    restaurantListMockData.restaurantList = { data: mockList };

    const restaurantsListResponse = await network.Restaurants.fetchList(
      createFetchListParmeter({ sortingType: RestaurantListSortingModel.TYPES.NO_SORTING }),
    );

    expect(restaurantsListResponse.data[0].id).toEqual(1);
    expect(restaurantsListResponse.data[1].id).toEqual(2);
    expect(restaurantsListResponse.data[2].id).toEqual(3);
    expect(restaurantsListResponse.data.length).toEqual(3);
  });

  it('fetches a sorted restaurant list - ALPHABETICAL_SORTING', async () => {
    const mockList = [
      createMockRestaurant({ id: 1, name: 'A' }),
      createMockRestaurant({ id: 2, name: 'C' }),
      createMockRestaurant({ id: 3, name: 'B' }),
    ];
    restaurantListMockData.restaurantList = { data: mockList };

    const restaurantsListResponse = await network.Restaurants.fetchList(
      createFetchListParmeter({
        sortingType: RestaurantListSortingModel.TYPES.ALPHABETICAL_SORTING,
      }),
    );

    expect(restaurantsListResponse.data[0].id).toEqual(1);
    expect(restaurantsListResponse.data[1].id).toEqual(3);
    expect(restaurantsListResponse.data[2].id).toEqual(2);
    expect(restaurantsListResponse.data.length).toEqual(3);
  });

  it('fetches a sorted restaurant list - MINIMUM_ORDER_VALUE_SORTING', async () => {
    const mockList = [
      createMockRestaurant({ id: 1, info: { minimumOrderValue: 300 } }),
      createMockRestaurant({ id: 2, info: { minimumOrderValue: 100 } }),
      createMockRestaurant({ id: 3, info: { minimumOrderValue: 200 } }),
    ];
    restaurantListMockData.restaurantList = { data: mockList };

    const restaurantsListResponse = await network.Restaurants.fetchList(
      createFetchListParmeter({
        sortingType: RestaurantListSortingModel.TYPES.MINIMUM_ORDER_VALUE_SORTING,
      }),
    );

    expect(restaurantsListResponse.data[0].id).toEqual(2);
    expect(restaurantsListResponse.data[1].id).toEqual(3);
    expect(restaurantsListResponse.data[2].id).toEqual(1);
    expect(restaurantsListResponse.data.length).toEqual(3);
  });

  it('fetches a sorted restaurant list - RATING_SORTING', async () => {
    const mockList = [
      createMockRestaurant({
        id: 1,
        info: { ratings: { total: 100, score: { median: 1.5, average: 2.5 } } },
      }),
      createMockRestaurant({
        id: 2,
        info: { ratings: { total: 100, score: { median: 2.5, average: 2.5 } } },
      }),
      createMockRestaurant({
        id: 3,
        info: { ratings: { total: 100, score: { median: 5.0, average: 2.5 } } },
      }),
    ];
    restaurantListMockData.restaurantList = { data: mockList };

    const restaurantsListResponse = await network.Restaurants.fetchList(
      createFetchListParmeter({ sortingType: RestaurantListSortingModel.TYPES.RATING_SORTING }),
    );

    expect(restaurantsListResponse.data[0].id).toEqual(3);
    expect(restaurantsListResponse.data[1].id).toEqual(2);
    expect(restaurantsListResponse.data[2].id).toEqual(1);
    expect(restaurantsListResponse.data.length).toEqual(3);
  });

  it('fetches a sorted restaurant list - DELIVERY_TIME_SORTING', async () => {
    const mockList = [
      createMockRestaurant({ id: 1, shipping: { type: ['delivery', 'pickup'], estimatedTime: 0 } }),
      createMockRestaurant({ id: 2, shipping: { type: ['delivery', 'pickup'], estimatedTime: 5 } }),
      createMockRestaurant({
        id: 3,
        shipping: { type: ['delivery', 'pickup'], estimatedTime: 10 },
      }),
    ];
    restaurantListMockData.restaurantList = { data: mockList };

    const restaurantsListResponse = await network.Restaurants.fetchList(
      createFetchListParmeter({
        sortingType: RestaurantListSortingModel.TYPES.DELIVERY_TIME_SORTING,
      }),
    );

    expect(restaurantsListResponse.data[0].id).toEqual(1);
    expect(restaurantsListResponse.data[1].id).toEqual(2);
    expect(restaurantsListResponse.data[2].id).toEqual(3);
    expect(restaurantsListResponse.data.length).toEqual(3);
  });

  it('fetches a filtered restaurant list - DELIVERY_TYPES', async () => {
    const mockList = [
      createMockRestaurant({ id: 1, shipping: { type: ['delivery'] } }),
      createMockRestaurant({ id: 2, shipping: { type: ['pickup'] } }),
      createMockRestaurant({ id: 3, shipping: { type: ['delivery', 'pickup'] } }),
      createMockRestaurant({ id: 4, shipping: { type: [] } }),
    ];
    restaurantListMockData.restaurantList = { data: mockList };

    const restaurantsListResponseDelivery = await network.Restaurants.fetchList(
      createFetchListParmeter({ deliveryType: RestaurantListFiltering.DELIVERY_TYPES.DELIVERY }),
    );
    expect(restaurantsListResponseDelivery.data[0].id).toEqual(1);
    expect(restaurantsListResponseDelivery.data[1].id).toEqual(3);
    expect(restaurantsListResponseDelivery.data.length).toEqual(2);

    const restaurantsListResponsePickup = await network.Restaurants.fetchList(
      createFetchListParmeter({ deliveryType: RestaurantListFiltering.DELIVERY_TYPES.PICKUP }),
    );
    expect(restaurantsListResponsePickup.data[0].id).toEqual(2);
    expect(restaurantsListResponsePickup.data[1].id).toEqual(3);
    expect(restaurantsListResponsePickup.data.length).toEqual(2);
  });

  it('fetches a filtered restaurant list - CUISINE_TYPES', async () => {
    const mockList = [
      createMockRestaurant({
        id: 1,
        cuisines: ['japanese', 'pizza', 'italian', 'sushi', 'burger', 'french'],
      }),
      createMockRestaurant({ id: 2, cuisines: ['pizza', 'italian', 'sushi', 'burger', 'french'] }),
      createMockRestaurant({ id: 3, cuisines: ['italian', 'sushi', 'burger', 'french'] }),
      createMockRestaurant({ id: 4, cuisines: ['sushi', 'burger', 'french'] }),
      createMockRestaurant({ id: 5, cuisines: ['burger', 'french'] }),
      createMockRestaurant({ id: 6, cuisines: ['french'] }),
      createMockRestaurant({ id: 7, cuisines: [] }),
    ];
    restaurantListMockData.restaurantList = { data: mockList };

    const allCuisines = {
      JAPANESE: true,
      PIZZA: true,
      ITALIAN: true,
      SUSHI: true,
      BURGER: true,
      FRENCH: true,
    };
    const restaurantsListResponseAll = await network.Restaurants.fetchList(
      createFetchListParmeter({ selectedCuisine: allCuisines }),
    );
    expect(restaurantsListResponseAll.data[0].id).toEqual(1);
    expect(restaurantsListResponseAll.data[1].id).toEqual(2);
    expect(restaurantsListResponseAll.data[2].id).toEqual(3);
    expect(restaurantsListResponseAll.data[3].id).toEqual(4);
    expect(restaurantsListResponseAll.data[4].id).toEqual(5);
    expect(restaurantsListResponseAll.data[5].id).toEqual(6);
    expect(restaurantsListResponseAll.data.length).toEqual(6);

    const pizzaAndSushi = {
      JAPANESE: false,
      PIZZA: true,
      ITALIAN: false,
      SUSHI: true,
      BURGER: false,
      FRENCH: false,
    };
    const restaurantsListResponsePizzaAndSushi = await network.Restaurants.fetchList(
      createFetchListParmeter({ selectedCuisine: pizzaAndSushi }),
    );
    expect(restaurantsListResponsePizzaAndSushi.data[0].id).toEqual(1);
    expect(restaurantsListResponsePizzaAndSushi.data[1].id).toEqual(2);
    expect(restaurantsListResponsePizzaAndSushi.data[2].id).toEqual(3);
    expect(restaurantsListResponsePizzaAndSushi.data[3].id).toEqual(4);
    expect(restaurantsListResponsePizzaAndSushi.data.length).toEqual(4);

    const italianAndBurger = {
      JAPANESE: false,
      PIZZA: false,
      ITALIAN: true,
      SUSHI: false,
      BURGER: true,
      FRENCH: false,
    };
    const restaurantsListResponseItalianAndBurger = await network.Restaurants.fetchList(
      createFetchListParmeter({ selectedCuisine: italianAndBurger }),
    );
    expect(restaurantsListResponseAll.data[0].id).toEqual(1);
    expect(restaurantsListResponseAll.data[1].id).toEqual(2);
    expect(restaurantsListResponseAll.data[2].id).toEqual(3);
    expect(restaurantsListResponseAll.data[3].id).toEqual(4);
    expect(restaurantsListResponseAll.data[4].id).toEqual(5);
    expect(restaurantsListResponseItalianAndBurger.data.length).toEqual(5);
  });
});
