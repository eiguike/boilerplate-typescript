import { sum } from './sum';

describe('when apply something', () => {
    it('adds', () => {
        expect(sum(3,4)).toEqual(7);
    });
});
