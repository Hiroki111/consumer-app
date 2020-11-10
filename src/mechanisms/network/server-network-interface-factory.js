import NetworkInterface from './network-interface';
import RestaurantListNetworkInterface from './interfaces/restaurant-list';

export default function() {
  const networkInterface = new NetworkInterface();
  networkInterface.plug(RestaurantListNetworkInterface);

  return networkInterface.getInterfaces();
}
