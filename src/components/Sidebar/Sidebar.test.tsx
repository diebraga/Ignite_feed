import { render } from '@testing-library/react'
import { Sidebar } from '.'


describe("Sidebar", () => {
  it("Should be able to render sidebar correctly", () => {
    render(
      <Sidebar />
    )
  })
})
