import { getFuncParams } from '../Utils/String';
import type { EventDetails, IBActionInfo } from './types';

const includesCapture = /^Capture$/i;

function getActions(target: any): Map<string, EventDetails> {
  return (target.__IBActions = target.__IBActions || new Map());
}

export function IBAction(target: any, method: string): void | never {
  const IBActions = getActions(target);

  if (!IBActions.has(method)) throw new SyntaxError(`Method ${method} is not a valid IBAction`);

  IBActions.get(method)!.capture = includesCapture.test(method);
}

export function ISender(event: keyof HTMLElementEventMap): any;
export function ISender(event: string): any;
export function ISender(event: string): any {
  return function (target: any, propKey: string): void {
    const IBActions = getActions(target) as Map<string, IBActionInfo>;

    IBActions.set(propKey, {
      selector: getFuncParams(target[propKey])[0],
      event,
      capture: false
    });
  };
}
