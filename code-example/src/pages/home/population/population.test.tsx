import configureStore from 'redux-mock-store';
import { mockRedux } from '../../../mockData/mockRedux';
import React from 'react';
import { Provider } from 'react-redux';
import PopulationComponent from './population';
import { render, screen } from '@testing-library/react';

const mockStore = configureStore();
const store = mockStore(mockRedux);

const thisComponent = (
	<Provider store={store}>
		<PopulationComponent population={mockRedux.Population} />
	</Provider>
);

it('matches snapshot', () => {
	const { asFragment } = render(thisComponent);
	expect(asFragment()).toMatchSnapshot();
});

it('Prefectures fetched correctly', () => {
	render(thisComponent);
	const x = screen.getByText(/Number of Year/i);
	expect(x).toBeInTheDocument();
});
