/**
 * extend JavaScript Array-Object
 * @author Samuel Weber <samuel.weber@massiveart.com>
 * @version 1.0 
 */
Object.extend(Array.prototype, {
  /**
   * return true if the array is empty otherwise false
   * @return boolean
   * @author Samuel Weber <samuel.weber@massiveart.com>
   * @version 1.0
   */
  isEmpty: function() {
	return !this.length;
  },
	
  /**
   * return true if value is inside the array
   * @param mixed
   * @return boolean
   * @author Samuel Weber <samuel.weber@massiveart.com>
   * @version 1.0
   */
  inArray:function(value) {
  	var ret = false;
	this.each(function(i) {
	  if(i == value && typeof i == typeof value) {
		ret = true;
		throw $break;
	  }
	});
	return ret;
  }
});