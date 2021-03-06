import React from 'react';
import { render, screen } from '@testing-library/react';
import HeaderComponent from './header';

const thisComponent = <HeaderComponent></HeaderComponent>;

it('matches snapshot', () => {
	const { asFragment } = render(thisComponent);
	expect(asFragment()).toMatchSnapshot();
});

it('contains tiltle', () => {
	render(thisComponent);
	const x = screen.getByText(/ι½ιεΊη/i);
	expect(x).toBeInTheDocument();
});
