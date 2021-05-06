import { EventEmitter } from "events";

const emitter = new EventEmitter();

// Typed Event Management Exercise

// dispatch(new UserAddedEvent(props))
// addListener(UserAddedEvent, (e) => {
// autocompletion for e
// })

// TO BUILD FROM GROUND UP

class Event<T = null> {
  public readonly data: T;

  constructor(...args: T extends null ? [] : [T]) {}
}

class UserAddedEvent extends Event<{
  userId: string;
}> {}

type Constructor<T> = {
  new (...args: any[]): T;
};

class EventDispatcher {
  dispatch(event: Event<any>) {
    // find the listeners
    // call the listeners function with it
  }

  addListener<T>(eventClass: Constructor<T>, handler: (event: T) => void) {}
}

const dispatcher = new EventDispatcher();

dispatcher.addListener(UserAddedEvent, (event) => {
  event.data.userId;
});

dispatcher.dispatch(
  new UserAddedEvent({
    userId: "XXX",
  })
);

class ProcessShutdownEvent extends Event {}
new ProcessShutdownEvent();
