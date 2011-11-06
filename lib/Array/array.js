/**
 * Title: Array
 * Array.prototype jQuery extension.
 *
 */
/**
 * section: Functions
 *
 * Array additional functions available
 */
(function ()
{
  if (!Array.prototype.diff)
  {

    /**
     * function: diff
     *
     * Function which returns the result of the subtraction method applied to
     * sets (mathematical concept).
     *
     * Parameters:
     *  ([array]/,[arrayn]/) - List of Arrays to test diffs
     *
     * Returns:
     *  New Array with diff elements
     *
     * Usage:
     *
     * (start code)
     * var a = ['aa', 'bb', 'cc', 'dd', 'ee'];
     * var b = ['bb', 'dd'];
     *	
     * var result_a = a.diff(b); //-> ['aa', 'cc', 'ee']
     * (end)
     *
     * See the *array_test.js* for more examples.
     *
     */

    Array.prototype.diff = function ( /*([array]/,[arrayn]/)*/ )
    {
      "use strict";

      if (this === void 0 || this === null) throw new TypeError();

      var base_array = Object(this);

      $.each(arguments, function (count, test_array)
      {
        if (!$.isArray(test_array)) throw new TypeError();

        base_array = $.grep(base_array, function (a)
        {
          return !($.inArray(a, test_array) + 1)
        });
      });

      return base_array;
    };
  }
})(jQuery);