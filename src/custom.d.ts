interface EventManager {
  events: {};
  on: (eventName: string, handler: (...props: any) => void) => void;
  removeHandler: (eventName: string, handler: (...props: any) => void) => void;
}

interface MpWithCEF extends Mp {
  trigger: (eventName: string, ...params: int | string) => void;
}

declare module "*.svg" {
  const content: any;
  export default content;
}

declare var EventManager: EventManager;
declare const mp: MpWithCEF;
