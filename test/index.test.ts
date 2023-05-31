describe("consistency-test", () => {
  it("happy path", () => {
    expect("string one").toMatchInlineSnapshot('"string one"')
  })
})
