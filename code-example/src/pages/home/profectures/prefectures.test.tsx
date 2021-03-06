import configureStore from 'redux-mock-store';
import { mockRedux } from '../../../mockData/mockRedux';
import { Provider } from 'react-redux';
import ProfecturesComponent from './prefectures';
import { render, screen } from '@testing-library/react';

const mockStore = configureStore();
const store = mockStore(mockRedux);

const thisComponent = (
	<Provider store={store}>
		<ProfecturesComponent
			prefectures={mockRedux.Prefectures}
			population={mockRedux.Population}
		/>
	</Provider>
);

it('matches snapshot', () => {
	const { asFragment } = render(thisComponent);
	expect(asFragment()).toMatchSnapshot();
});

it('Prefectures fetched correctly', () => {
	render(thisComponent);
	let formControlLabel = screen.getByLabelText('北海道') as HTMLInputElement;
	expect(formControlLabel.checked).toEqual(false);
});
