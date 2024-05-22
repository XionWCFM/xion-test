type EventLocation = 'home' | 'landing' | 'fe';

type EventAction = 'click' | 'pop-up' | 'error' | 'view' | 'open' | 'close';

type EventTarget = 'button' | 'cta' | 'toast' | 'dialog' | 'bottom-sheet';

export type EventTuple = [EventLocation, EventTarget, EventAction];

export type EventName = `${EventLocation}_${EventTarget}_${EventAction}`;

export type UserTracker = {
  track: (eventName: EventTuple, eventProperty: string) => Promise<void> | void;
};
