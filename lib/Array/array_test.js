// test suite for Array.prototype.diff
module("Array.prototype.diff");

test("test loaded", function ()
{
  expect(1);
  ok(Array.prototype.diff, "Array.prototype.diff loaded");
});

test("test with one array (contained numbers)", function ()
{
  expect(2);

  var a = [10, 20, 30, 40, 50];
  var b = [20, 40];

  var result_a = a.diff(b);
  var result_b = b.diff(a);

  deepEqual(result_a, [10, 30, 50], "diff work and return new array with elements");
  deepEqual(result_b, [], "diff work and return new empty array");

});

test("test with one array (contained strings)", function ()
{
  expect(2);

  var a = ['aa', 'bb', 'cc', 'dd', 'ee'];
  var b = ['bb', 'dd'];

  var result_a = a.diff(b);
  var result_b = b.diff(a);

  deepEqual(result_a, ['aa', 'cc', 'ee'], "diff work and return new array with elements");
  deepEqual(result_b, [], "diff work and return new empty array");

});


test("test with some arrays", function ()
{
  expect(1);

  var a = [10, 40, 'aa', 'bb', 'cc', 20, 30, 'dd', 'ee', 'ff', 50];
  var b1 = ['bb', 'dd'];
  var b2 = [10];
  var b3 = ['ee', 30];

  var result = a.diff(b3, b2, b1);

  deepEqual(result, [40, 'aa', 'cc', 20, 'ff', 50], "diff work with some array in arguments");

});

test("test with empty array", function ()
{
  expect(3);

  var a = [];
  var b = ['one'];

  var result_a = a.diff(b);
  var result_b = b.diff(a);
  var result_c = a.diff(a);

  deepEqual(result_a, [], "empty to non-empty");
  deepEqual(result_b, ['one'], "non-empty to empty");
  deepEqual(result_c, [], "empty to empty");

});


test("test error on mismatch type", function ()
{
  expect(2);

  raises(function ()
  {
    [].diff('string')
  }, TypeError, 'mismatch types throw error on string');
  raises(function ()
  {
    [].diff([], {})
  }, TypeError, 'mismatch types throw error on object');

});