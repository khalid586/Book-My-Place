import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axios from 'axios';
import PlacesPage from './PlacesPage';

// Mocking axios.post for addPhotoByLink function
jest.mock('axios');

describe('PlacesPage Component', () => {
  test('renders PlacesPage component', () => {
    render(<PlacesPage />);
    // You can add more specific assertions based on your UI
    expect(screen.getByText('Add new place')).toBeInTheDocument();
  });

  test('adds photo by link', async () => {
    // Mocking the axios post method
    axios.post.mockResolvedValueOnce({ data: 'mockedFileName.jpg' });

    render(<PlacesPage />);
    
    const linkInput = screen.getByPlaceholderText('Add photos using link');
    const addButton = screen.getByText('Add Photo');

    // Simulate user input and click
    fireEvent.change(linkInput, { target: { value: 'https://example.com/photo.jpg' } });
    fireEvent.click(addButton);

    // Wait for axios.post to be called and update the state
    await waitFor(() => expect(axios.post).toHaveBeenCalled());

    // Assert that the photo has been added
    expect(screen.getByAltText('Added Photo')).toBeInTheDocument();
  });

  // Add more tests for other functionalities as needed
});
