import { configure } from 'mobx';
import AppStore from './AppStore';

configure({ enforceActions: 'observed' });

const appStore = new AppStore();

export default {
  appStore,
};
