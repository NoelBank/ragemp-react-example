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

export function trigger(eventName, args) {
  var handlers = EventManager.events[eventName];
  try {
    var data = JSON.parse(args);
  } catch (e) {
    mp.trigger("uiException", e.message);
  }

  console.log(EventManager.events);
  handlers.forEach((handler) => handler(data));
}

export default EventManager;
