import {AxiosResponse} from 'axios';
import {networkClient} from '../networkClient/networkClient';
import {IEvent} from '../interfaces/index.interfaces';

class ItemsApiClass {
  async getItems(): Promise<IEvent[]> {
    const response = (await networkClient.get(
      '/events?per_page=25',
    )) as AxiosResponse<IEvent[]>;
    return response.data;
  }
}

export const ItemsApi = new ItemsApiClass();
