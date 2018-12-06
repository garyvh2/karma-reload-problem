import { deepCompare } from './deepCompare'

describe('deepCompare', () => {
  it('should perform primitive equality', () => {
    expect(deepCompare(1, 1)).toBeTruthy();
    expect(deepCompare(true, true)).toBeTruthy();
  })
  it('should detect non equal primitives', () => {
    expect(deepCompare(1, 2)).toBeFalsy();
    expect(deepCompare(true, false)).toBeFalsy();
  })
})