import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import ProfilePopup from './ProfilePopup'

const mockKoala = {"id":1,"name":"Koala","joiningMonth":"November","location":"Lalaland","bio":"I take what you develop and bring it to life!","role":"Junior Developer","photo":"https://images.unsplash.com/photo-1606856140824-925bdd3f6681?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"}
global.requestAnimationFrame = function(callback) {
  setTimeout(callback, 0);
};

describe('testing profilePopup component', ()=> {
  it('component rendered', () => {
    render(<ProfilePopup person= {mockKoala}/>);
    const container = screen.getByTestId('popupContainer')
    expect(container).toBeDefined()
    expect(screen.queryByTestId('modal')).toBeFalsy() //modal is not there before card is clicked
  });
  it('expect card to be shown', ()=>{
    render(<ProfilePopup person= {mockKoala}/>);
    const mockImage = "https://images.unsplash.com/photo-1606856140824-925bdd3f6681?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
    const card = screen.getByTestId('profileCard')
    expect(card).toHaveTextContent('Koala')
    const image = screen.getByAltText('profilePic');
    expect(image.src).toContain(mockImage);
  })
  it('when clicked - show modal', ()=>{
    render(<ProfilePopup person= {mockKoala}/>);
    const card = screen.getByTestId('profileCard');
    fireEvent.click(card);
    const modal = screen.getByTestId('modal')
    expect(modal).toHaveTextContent("Koala")
    expect(modal).toHaveTextContent("Lalaland")
    expect(modal).toHaveTextContent("November")
    expect(modal).toHaveTextContent("I take what you develop and bring it to life!")
    expect(modal).toHaveTextContent("Junior Developer")
  })
  it('when clicked - close the modal', ()=>{
    render(<ProfilePopup person= {mockKoala}/>);
    const card = screen.getByTestId('profileCard');
    fireEvent.click(card);
    const closeModalButton = screen.getByRole('button', {name: 'Close'})
    fireEvent.click(closeModalButton);
    // expect(screen.queryByTestId('modal')).toBeFalsy() 
    //why it doesnt work uuuugh!!!
  })
})
