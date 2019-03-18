var tape = require("tape"),
    rxeb = require("../");

tape("rxeb.EventTree", function(test) {
    var tree = new rxeb.EventTree();
    var fab = tree.create("fab");
    test.equal(fab.path, "fab");

    var group1 = fab.addNode("group1");
    var group2 = fab.addNode("group2");
    test.equal(group1.path, "fab.group1");
    test.equal(group2.path, "fab.group2");

    var e1 = group1.addNode("e1");
    test.equal(e1.getTags().length, 0);
    var e1CO = e1.addTag("co");
    test.equal(e1.getTags().length, 1);
    var e1CO2 = e1.addTag("co2");
    test.equal(e1.getTags().length, 2);
    test.equal(e1CO2.path, "fab.group1.e1.CO2");
    test.true(e1CO2.isTag());

    var e2 = group1.addNode("e2");
    var e2CO2 = e2.addTag("co2");
    test.equal(e1.getTags().length, 2);
    test.equal(e2.getTags().length, 1);


    var e3 = group2.addNode("e3");
    var e3CO = e3.addTag("no");
    test.equal(e1.getTags().length, 2);
    test.equal(e2.getTags().length, 1);
    test.equal(e3.getTags().length, 1);

    test.equal(tree.queryTags("co").length, 1);
    test.equal(tree.queryTags("co2").length, 2);
    test.equal(tree.queryTags("no").length, 1);
    test.equal(tree.queryTags("no2").length, 0);

    test.end();
});
