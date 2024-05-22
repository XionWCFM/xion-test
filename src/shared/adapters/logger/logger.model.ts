export type UserTracker = {
  track: (eventName: string, eventProperty: string) => Promise<void> | void;
};

export type EventName = 'sign-up' | 'click' | 'error';
