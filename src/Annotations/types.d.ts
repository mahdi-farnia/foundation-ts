import type UIViewController from '../UIKit/UIViewController';

export declare interface EventDetails {
  capture: boolean;
}

export declare interface IBActionInfo extends EventDetails {
  event: string;
  selector: string;
}

export declare interface UIViewControllerClass {
  new (...args: any[]): UIViewController;
  main: Function;
}
