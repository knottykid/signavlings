import { render, screen } from '@testing-library/react';
import React from 'react';
import ProfileCard from './components/ProfileList/ProfileCard'

test('renders learn react link', () => {
  render(<ProfileCard name='whatever'/>);
});
