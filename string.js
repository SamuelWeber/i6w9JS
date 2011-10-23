/**
 * extend JavaScript String-Object
 * @author Samuel Weber <samuel.weber@massiveart.com>
 * @version 1.0 
 */
Object.extend(String.prototype, {
  /**
   * uppercase first character of a string
   * @return string
   * @author Samuel Weber <samuel.weber@massiveart.com>
   * @version 1.0
   */
  ucfirst: function() {
    return this.charAt(0).toUpperCase() + this.substr(1, this.length);
  },
  
  /**
   * returns a shortened string with '...'
   * appended if required
   * @return string
   * @author Samuel Weber <samuel.weber@massiveart.com>
   * @version 1.0
   */
  excerpt: function(intMaxChars) {
	if(this.length > intMaxChars)
	  return this.substr(0, intMaxChars) + '...';
    return this;
  }
});