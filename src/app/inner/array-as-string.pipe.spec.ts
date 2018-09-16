import { ArrayAsStringPipe } from './array-as-string.pipe';

describe('ArrayAsStringPipe', () => {
  it('create an instance', () => {
    const pipe = new ArrayAsStringPipe();
    expect(pipe).toBeTruthy();
  });
});
