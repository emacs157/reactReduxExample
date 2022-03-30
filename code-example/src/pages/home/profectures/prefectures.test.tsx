import configureStore from 'redux-mock-store';
import { mockRedux } from '../../../mockData/mockRedux';
import React from 'react';
import { Provider } from 'react-redux';
import TestRenderer from 'react-test-renderer';
import ProfecturesComponent from './prefectures';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

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

it('renders correctly', () => {
    const tree = TestRenderer.create(thisComponent).toJSON();
    expect(tree).toMatchSnapshot();
});

it('Prefectures fetched correctly', () => {
    render(thisComponent);
    const checkBox = screen.getByLabelText('北海道') as HTMLInputElement;
    expect(checkBox.checked).toEqual(false);
    userEvent.click(checkBox);
    expect(checkBox.checked).toEqual(true);
});
