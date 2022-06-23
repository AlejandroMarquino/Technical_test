import { render, screen } from '@testing-library/react'
import Home from '../pages/index'
import { requestVenueForEvent } from '../pages/index'
import '@testing-library/jest-dom'

describe('Home', () => {
  it('renders a the header 1', () => {
    render(<Home />)

    const h1 = screen.getByTestId('header')

    expect(h1).toBeInTheDocument()
  })
  it('fetches Venue For Event', async () => {
    expect(await requestVenueForEvent(null)).toBe(undefined)
  })
})