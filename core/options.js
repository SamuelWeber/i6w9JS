/**
 * create namespace for i6w9.Core.Options
 * @author Samuel Weber <samuel weber@massiveart.com>
 * @version 1.0
 */
i6w9.Core.Options = {};

Object.extend(i6w9.Core.Options, {
  /**
   * create options-object that takes care
   * about default-values
   * @param Object options
   * @return Object options
   * @author Samuel Weber <samuel.weber@massiveart.com>
   * @version 1.0 
   */
  setOptions: function(options) {
	if(!this.options) {
	  this.options = {};
	}
	Object.extend(this.options, this.constructor.DEFAULT_OPTIONS || {});
	Object.extend(this.options, options);
	return this.options;
  }
});