import { select } from './testUtils';

describe('testUtils', () => {
  test('select()', () => {
    const sampleId = 'sampleId';
    expect(select(sampleId)).toBe('[data-test="sampleId"]');
  });
});
