import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import Home from './pages/Home/Home';
import { ChakraProvider } from "@chakra-ui/react";


Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), 
    removeListener: jest.fn(), 
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

process.on('unhandledRejection', (reason, promise) => {

});

global.requestAnimationFrame = function(callback) {
    setTimeout(callback, 0);
  };

describe('testing Home component', ()=> {
    it('signavio is displayed correctly on home page', () => {
      
    const mockName = 'Welcome to SIGNAVIO Connect with your new team members here VIEW SEEDLINGS'
    render( 
    <ChakraProvider>
        <Home /> 
    </ChakraProvider>);
    const homeContainer = screen.getByTestId('homeText')
    expect(homeContainer).toHaveTextContent(mockName)
  });
  it('test click event on the home page', () => {
    const mockCallBack = jest.fn();
    render(
    <ChakraProvider>
      <Home onClickButton={mockCallBack}/>
    </ChakraProvider>);
    const card = screen.getByTestId('homeButton');
    fireEvent.click(card);
    expect(mockCallBack).toBeCalled();
  });
});


