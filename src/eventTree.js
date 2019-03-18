import EventPath from './eventPath';

/**
 * Constructor.
 */
var EventTree = function() {
    this.top = [];
    this.nodes = [];
}

EventTree.prototype.create = function(name) {
    var node = new EventPath(name, null, this);
    this.top.push(node);
    this.nodes.push(node);
    return node;
}

EventTree.prototype.queryNode = function(path) {
    return this.nodes.find(n => n.path == path);
}

EventTree.prototype.queryTags = function(name) {
    return this.nodes.filter(n => n.name == name.toUpperCase());
}

EventTree.prototype.queryDirty = function(name) {
    return this.nodes.filter(n => n.state != 0);
}

EventTree.prototype.saveNode = function(node) {
    this.nodes.push(node);
}

export default EventTree;
