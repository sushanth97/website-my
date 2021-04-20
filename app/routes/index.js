import Route from '@ember/routing/route';
import ENV from 'website-my/config/environment';

const API_BASE_URL = ENV.BASE_API_URL;

export default class TasksRoute extends Route {
  model = async () => {
    const response = await fetch(`${API_BASE_URL}/users/self`, {
      credentials: 'include',
    });
    const status = await response.json();

    return status.status;
  };
}
