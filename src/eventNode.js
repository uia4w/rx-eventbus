/**
 * Constructor.
 */
var EventNode = function() {
    this.left = 0;
    this.right = 0;
}

EventNode.prototype.isTag = function() {
    return false;
}

EventNode.prototype.addTag = function(name) {
    return null;
}

EventNode.prototype.addNode = function(name) {
    return null;
}

EventNode.prototype.getValue = function() {
    return null;
}

EventNode.prototype.updateValue = function(value) {
}

EventNode.prototype.flush = function() {
    this.state = 0;
}

EventNode.prototype.getState = function() {
    return this.state;
}

EventNode.prototype.setState = function(state) {
    this.state = state;
}

/**
EventNode.prototype.buildBound = function(leftBound) {
    this.left = leftBound + 1;
    this.right = this.left;
    this.nodes.forEach(n => this.right = buildBound(this.right));
    this.right++;
    return this.right;
}
*/

export default EventNode;
