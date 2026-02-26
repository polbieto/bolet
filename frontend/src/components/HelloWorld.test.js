import { render, screen, fireEvent } from '@testing-library/vue'
import HelloWorld from './HelloWorld.vue'
import { describe, it, expect } from 'vitest'

describe('HelloWorld', () => {
  it('renders properly', () => {
    render(HelloWorld, { props: { msg: 'Hello Vitest' } })
    expect(screen.getByText('Hello Vitest')).toBeInTheDocument()
  })

  it('increments count when button is clicked', async () => {
    render(HelloWorld, { props: { msg: 'Hello Vitest' } })
    
    const button = screen.getByRole('button', { name: /count is 0/i })
    expect(button).toBeInTheDocument()

    await fireEvent.click(button)

    expect(screen.getByRole('button', { name: /count is 1/i })).toBeInTheDocument()
  })
})