import { observable, action } from 'mobx';
import { setClassProps } from '../utils/helpers';

export default class AppStore {
	@observable
	example = {
		name: '',
	};
	
	@action
	setClassProps = (arr, self = this) => setClassProps(arr, self);
}
