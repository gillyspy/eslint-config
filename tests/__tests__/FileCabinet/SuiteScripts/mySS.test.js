// eslint-disable-next-line import/no-import-module-exports
import mySS from '../../../code/FileCabinet/SuiteScripts/mySS';

describe('mySS module', () => {
  // eslint-disable-next-line jest/expect-expect,jest/prefer-todo,jest/consistent-test-it
  test.skip('asdf', () => {});
  it.todo('something future', (done) => {
    expect(typeof mySS.record).toBe('object');
    done();
  });
});

// eslint-disable-next-line jest/valid-title
describe(1, () => {
  describe('level2', () => {
    // eslint-disable-next-line jest/valid-title
    describe(' level3', () => {
      // eslint-disable-next-line jest/valid-title
      describe('describe level4', () => {
        describe('level5', () => {
          // eslint-disable-next-line jest/max-nested-describe
          describe('level6', () => {
            // eslint-disable-next-line jest/max-nested-describe
            describe('level7', () => {});
          });
        });
      });
    });
  });
});

// eslint-disable-next-line jest/require-top-level-describe,jest/no-done-callback
test('this has no describe :(', async (done) => {
  await Promise.resolve(true);
  expect('hi').toEqual('hi');
  done();
});

// eslint-disable-next-line jest/no-export
module.exports = {};
