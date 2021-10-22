import {axiosConfig} from '../axiosConfig/axiosConfig';

class ItemsApiClass {
  async getItems(): Promise<any[] | undefined> {
    try {
      const response = await axiosConfig.get('/events?per_page=25');
      return response.data;
    } catch (e) {
      console.log('Упс, ошибочка в API.ts getItem', e);
    }
  }
}

export const ItemsApi = new ItemsApiClass();
