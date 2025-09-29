import { GreetingMiddleware } from './greeting.middleware';

describe('GreetingMiddleware', () => {
  it('should be defined', () => {
    expect(new GreetingMiddleware()).toBeDefined();
  });
});
