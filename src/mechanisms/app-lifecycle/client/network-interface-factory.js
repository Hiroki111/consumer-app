import NetworkInterface from '../../network/network-interface';
import RestaurantListNetworkInterface from '../../network/interfaces/restaurant-list';

export default function() {
  const networkInterface = new NetworkInterface();
  networkInterface.plug(RestaurantListNetworkInterface);

  return networkInterface.getInterfaces();
}
