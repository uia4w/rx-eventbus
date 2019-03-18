import EventNode from './eventNode';
import EventTag from './eventTag';

/**
 * Constructor.
 */
var EventPath = function(name, parent, tree) {
    this.name = name.toLowerCase();
    this.parent = parent;
    this.tree = tree;
    this.path = parent ? parent.path + "." + this.name : this.name;
    this.nodes = [];
}

EventPath.prototype = new EventNode();

EventPath.prototype.getTags = function() {
    return this.nodes.filter(n => n.isTag());
}

EventPath.prototype.addTag = function(name) {
    var node = new EventTag(name, this, this.tree);
    this.nodes.push(node);
    this.tree.nodes.push(node);
    return node;
}

EventPath.prototype.addNode = function(name) {
    var node = new EventPath(name, this, this.tree);
    this.nodes.push(node);
    this.tree.nodes.push(node);
    return node;
}

export default EventPath;
