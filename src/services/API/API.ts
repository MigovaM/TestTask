import {AxiosResponse} from 'axios';
import {axiosConfig} from '../axiosConfig/axiosConfig';
import {IEvent} from '../interfaces/index.interfaces';

class ItemsApiClass {
  async getItems(): Promise<IEvent[] | undefined> {
    try {
      const response = (await axiosConfig.get(
        '/events?per_page=25',
      )) as AxiosResponse<IEvent[]>;
      return response.data;
    } catch (e) {
      console.log('Упс, ошибочка в API.ts getItem', e);
    }
  }
}

export const ItemsApi = new ItemsApiClass();
