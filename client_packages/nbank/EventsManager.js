var EventManager = {
  events: [],
  on: function (eventName, handler) {
    if (eventName in this.events) {
      this.events[eventName].push(handler);
    } else {
      this.events[eventName] = [handler];
    }
  },
  removeHandler: function (eventName, handler) {
    if (eventName in this.events) {
      var index = this.events[eventName].indexOf(handler);
      this.events[eventName].splice(index, 1);
    }
  },
};

export default EventManager;
