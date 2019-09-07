module.exports = function (sandbox) {
  const _this = this;
  _this.bindEvents = () => {
  };

  _this.render = () => {
    console.log("hello");
  };

  return {
    init: (data = {}) => {
      _this.data = data;

      _this.DOMSelectors = {};
      _this.objects = {
      };
      _this.templates = {};

      _this.bindEvents();
      _this.render();
    },
    destroy: () => {
    },
  };
};
