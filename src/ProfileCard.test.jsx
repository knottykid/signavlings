import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import ProfileCard from './components/ProfileList/ProfileCard'

describe('testing profileCard component', ()=> {
  it('name is displayed correctly on profile card', () => {
    const mockName = 'Anja'
    render(<ProfileCard name={mockName}/>);
    const card = screen.getByTestId('profileCard')
    expect(card).toHaveTextContent(mockName)
  
  });
  it('uses correct src',  () => {
    const mockImage = "https://images.unsplash.com/photo-1606856140824-925bdd3f6681?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
    render(<ProfileCard image={mockImage}/>);
  
    const image = screen.getByAltText('profilePic');
    expect(image.src).toContain(mockImage);
  });
  it('test click event on the profile card', () => {
    const mockCallBack = jest.fn();
    render(<ProfileCard onClickCard={mockCallBack}/>);
    const card = screen.getByTestId('profileCard');
    fireEvent.click(card);
    expect(mockCallBack).toBeCalled();
  });
})
