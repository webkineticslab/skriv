var Twig = Twig || require("../twig"),
    twig = twig || Twig.twig;

describe("Twig.js Blocks ->", function() {
    // Test loading a template from a remote endpoint
    it("should load a parent template and render the default values", function() {
        twig({
            id:   'remote-no-extends',
            path: 'test/templates/template.twig',
            async: false
        });

        // Load the template
        twig({ref: 'remote-no-extends'}).render({ }).should.equal( "Default Title - body" );
    });

    it("should load a child template and replace the parent block's content", function(done) {
        // Test loading a template from a remote endpoint
        twig({
            id:   'child-extends',
            path: 'test/templates/child.twig',

            load: function(template) {
                template.render({ base: "template.twig" }).should.equal( "Other Title - child" );
                done();
            }
        });
    });

    it("should have access to a parent block content", function(done) {
        // Test loading a template from a remote endpoint
        twig({
            id:   'child-parent',
            path: 'test/templates/child-parent.twig',

            load: function(template) {
                template.render({
                    base: "template.twig",
                    inner: ':value'
                }).should.equal( "Other Title - body:value:child" );
                done();
            }
        });
    });


    it("should include blocks from another template for horizontal reuse", function(done) {
        // Test horizontal reuse
        twig({
            id:   'use',
            path: 'test/templates/use.twig',

            load: function(template) {
                // Load the template
                template.render({ place: "diner" }).should.equal("Coming soon to a diner near you!" );
                done();
            }
        });
    });

    it("should make the contents of blocks available after they're rendered", function(done) {
        // Test rendering and loading one block
        twig({
            id:   'blocks',
            path: 'test/templates/blocks.twig',

            load: function(template) {
                // Render the template with the blocks parameter
                template.render({ place: "block" }, {output: 'blocks'}).msg.should.equal("Coming soon to a block near you!" );
                done();
            }
        });
    });

    it("should render nested blocks", function(done) {
        // Test rendering of blocks within blocks
        twig({
            id:     'blocks-nested',
            path:   'test/templates/blocks-nested.twig',

            load: function(template) {
                template.render({ }).should.equal( "parent:child" )
                done();
            }
        })
    });

    it("should render extended nested blocks", function(done) {
        // Test rendering of blocks within blocks
        twig({
            id:     'child-blocks-nested',
            path:   'test/templates/child-blocks-nested.twig',

            load: function(template) {
                template.render({ base: "template.twig" }).should.equal( "Default Title - parent:child" );
                done();
            }
        })
    });
    
    it("should be able to extend to a absolute template path", function(done) {
        // Test loading a template from a remote endpoint
        twig({
            base: 'test/templates',
            path: 'test/templates/a/child.twig',

            load: function(template) {
                template.render({ base: "b/template.twig" }).should.equal( "Other Title - child" );
                done();
            }
        });
    });

    describe("block function ->", function() {
        it("should render block content from an included block", function(done) {
            twig({
                path:   'test/templates/block-function.twig',

                load: function(template) {
                    template.render({
                        base: "block-function-parent.twig",
                        val: "abcd" 
                    })
                    .should.equal( "Child content = abcd / Result: Child content = abcd" );

                    done();
                }
            })
        });

        it("should render block content from a parent block", function(done) {
            twig({
                path:   'test/templates/block-parent.twig',

                load: function(template) {
                    template.render({
                        base: "block-function-parent.twig"
                    })
                    .should.equal( "parent block / Result: parent block" );

                    done();
                }
            })
        });
    });
});