// declare the namespace for this example
var example = {};

example.Application = Class.extend({
  NAME: "example.Application",

  init: function () {
    this.view = new example.View("canvas");
    this.toolbar = new example.Toolbar("toolbar", this.view);

    // layout FIRST the body
    this.appLayout = $("#container").layout({
      north: {
        resizable: false,
        closable: false,
        spacing_open: 0,
        spacing_closed: 0,
        size: 60,
        paneSelector: "#navbar",
      },

      center: {
        resizable: true,
        closable: true,
        resizeWhileDragging: true,
        paneSelector: "#content",
      },
    });

    //
    this.contentLayout = $("#content").layout({
      north: {
        resizable: false,
        closable: false,
        spacing_open: 0,
        spacing_closed: 0,
        size: 50,
        paneSelector: "#toolbar",
      },
      west: {
        resizable: true,
        closable: true,
        resizeWhileDragging: true,
        paneSelector: "#navigation",
      },
      center: {
        resizable: false,
        closable: false,
        spacing_open: 0,
        spacing_closed: 0,
        paneSelector: "#canvas",
      },
    });
  },
});
