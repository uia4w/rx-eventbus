import EventTree from './eventTree';
import EventPath from './eventPath';
import EventTag from './eventTag';
import { Subject } from 'rxjs';

/**
 * Constructor.
 */
var PathMediator = function(tree) {
    this.tree = tree;
    this.pubs = {};

}

PathMediator.prototype.emit = function(tagPath, value) {
    var tag = this.tree.queryNode(tagPath);
    if(!tag.isTag()) {
        return;
    }

    tag.updateValue(value);
    var subject = this.pubs[tag.parent.path];
    if(subject) {
        subject.next(tag.parent.getTags());
    }
}

PathMediator.prototype.eventFrom = function(path, observer) {
    var subject = new Subject();
    this.pubs[path] = subject;
    subject.subscribe({
        next: (tags) => observer(path, tags)
    });
}

export default PathMediator;
