import EventNode from './eventNode';

/**
 * Constructor.
 */
var EventTag = function(name, parent, tree) {
    this.name = name.toUpperCase();
    this.parent = parent;
    this.tree = tree;
    this.path = parent.path + "." + this.name;
    this.value = undefined;
    this.nodes = [];
    this.state = 0;
}

EventTag.prototype = new EventNode();

EventTag.prototype.isTag = function() {
    return true;
}

EventTag.prototype.getTags = function() {
    return [this];
}

EventTag.prototype.getValue = function() {
    return this.value;
}

EventTag.prototype.updateValue = function(value) {
    this.value = value;
    this.setState(1);
    this.parent.setState(1);
    var node = this.parent.parent;
    while(node) {
        if(node.getState() == 0) {
            node.setState(2);
        }
        node = node.parent;
    }
}

export default EventTag;
