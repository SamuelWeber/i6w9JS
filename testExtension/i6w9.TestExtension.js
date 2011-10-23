(function(i6w9) {
  /**
   * TestExtension
   * @author Samuel Weber <samuel.weber@massiveart.com>
   * @version 1.0.0
   */
  i6w9.TestExtension = Class.create(
    i6w9.Core.Options,
    i6w9.Core.TestCoreModule, {
	NAME: 'i6w9.TestExtension',
	initialize: function(element, options) {
	  this.element = $(element);
	  this.id = this.element.id || null;
	  this.setOptions(options);
	  var B = i6w9.UI.Behavior, behaviors = [B.Hover, B.Focus, B.Down];
	  i6w9.UI.addBehavior(this.element, behaviors);
    }
  });

  /**
   * default-options for extension
   * musst be extended here
   * @author Samuel Weberb <samuel.weber@massiveart.com>
   * @version 1.0
   */
  Object.extend(i6w9.TestExtension, {
	DEFAULT_OPTIONS: {
	  'god': 'Eric Clapton'  
  	}
  });
  
})(i6w9);