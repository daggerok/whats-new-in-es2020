import { expect, it } from '@jest/globals';

it('should import dynamic lazy module', async () => {
  const dynamicModule = await import('../src/dynamic-module.js');
  const total = await dynamicModule.sum(1, 2, 3);
  await expect(total).toBe(6);
});
