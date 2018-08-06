var documentReadyPromise = function () {
  return new Promise((resolve) => $(document).ready(() => resolve()));
};

var isVisible = function (selector) {
  return $(selector).is(":visible") &&
         $(selector).css("visibility") !== "hidden" &&
         $(selector).width() > 0;
};

var waitForElement = function (selector, options={}) {
  options.callback = options.callback || ((element) => {});
  options.timeout = options.timeout || Infinity;
  options.error = options.error || (() => {});
  var ms = 100;
  if ($(selector).length) {
    options.callback($(selector).get(0));
  } else if (options.timeout > 0) {
    setTimeout(() => {
      options.timeout -= ms;
      waitForElement(selector, options);
    }, ms);
  } else {
    options.error();
  }
};

var dispatchClick = function (element) {
  let e = document.createEvent("UIEvents");
  e.initUIEvent("click", true, true, window, 1);
  element.dispatchEvent(e);
};

var universalClick = function (selector, options={}) {
  var callback = options.callback || ((element) => {});
  options.callback = (element) => {
    dispatchClick(element);
    callback();
  };
  options.timeout = options.timeout || 0;
  options.error = options.error || (() => {});
  const element = $(selector).get(0);
  if (element !== undefined) {
    options.callback(element);
  } else if (options.timeout > 0) {
    waitForElement(selector, options);
  }
};

var scrollTo = function (container, selector, options={}) {
  options.duration = options.duration || 500;
  options.callback = options.callback || (() => {});
  $(container).animate(
    {scrollTop: $(selector).offset().top},
    options.duration,
    options.callback);
};
