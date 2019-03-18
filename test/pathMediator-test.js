var tape = require("tape"),
    rxeb = require("../");

tape("rxeb.PathMediator", function(test) {
    var tree = new rxeb.EventTree();
    var fab = tree.create("fab");

    var group1 = fab.addNode("group1");
    var group2 = fab.addNode("group2");

    var e1 = group1.addNode("e1");
    var e1CO = e1.addTag("co");
    var e1CO2 = e1.addTag("co2");

    var e2 = group1.addNode("e2");
    var e2CO2 = e2.addTag("co2");

    var e3 = group2.addNode("e3");
    var e3CO = e3.addTag("no");

    var mediator = new rxeb.PathMediator(tree);
    mediator.eventFrom("fab.group1.e1", (path, tags) => {
        tags.forEach(tag => console.log(tag.name + "=" + tag.value));
    });
    mediator.emit("fab.group1.e1.CO", "1234");

    test.end();
});
