const EventManager = () => {
  let events: any = [];

  const on = (eventName: string, handler: (data: any) => void) => {
    if (eventName in events) {
      events[eventName].push(handler);
    } else {
      events[eventName] = [handler];
    }
  };

  return { events, on };
};

const trigger = (eventName: string, ...args: any) => {
  var handlers = EventManager().events[eventName];

  try {
    var data = JSON.parse(args);
  } catch (e) {
    (mp as any).trigger("uiException", e.message);
  }
  handlers.forEach((handler: (data: any) => void) => handler(data));
};

export { EventManager, trigger };
