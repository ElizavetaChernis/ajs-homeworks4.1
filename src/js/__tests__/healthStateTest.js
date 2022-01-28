import healthState from '../healthState';

test.each([
  ['Маг', 100, 'healthy'],
  ['Маг', 70, 'healthy'],
  ['Маг', 16, 'wounded'],
  ['Маг', 30, 'wounded'],
  ['Маг', 50, 'wounded'],
  ['Маг', 13, 'critical'],
  ['Маг', 5, 'critical'],
  ['Маг', 0, 'critical'],
])(
  'should return the right state of health',
  (name, health, expected) => {
    const received = healthState({ name, health });
    expect(received).toBe(expected);
  },
);