import type { IBActionInfo } from '../Annotations/types';
import { selectById } from '../Utils/Dom';
import { toKebabCase } from '../Utils/String';

class UIViewController {
  private declare __IBActions: Map<string, IBActionInfo>;
  private declare __IBOutlets: Set<string>;
  private declare __Objc: { method: string; fn: Function }[];

  constructor() {
    this.__defineActions();
    this.__defineOutlets();
    this.__defineObjc();
    Reflect.deleteProperty(this, '__defineActions');
    Reflect.deleteProperty(this, '__defineOutlets');
    Reflect.deleteProperty(this, '__defineObjc');
  }

  private __defineActions() {
    if (!this.__IBActions) return;

    for (const [method, info] of this.__IBActions) {
      const { selector, event, capture } = info,
        elem = selectById(toKebabCase(selector));

      // @ts-ignore
      elem.addEventListener(event, (e) => this[method](elem, e), capture);
    }

    Reflect.deleteProperty(this, '__IBActions');
  }

  private __defineOutlets() {
    if (!this.__IBOutlets) return;

    for (const selector of this.__IBOutlets) {
      Reflect.defineProperty(this, selector, {
        value: selectById(toKebabCase(selector)),
        writable: true,
        configurable: true
      });
    }

    Reflect.deleteProperty(this, '__IBOutlets');
  }

  private __defineObjc() {
    if (!this.__Objc) return;

    for (const { method, fn } of this.__Objc) {
      Reflect.defineProperty(this, method, {
        value: (...args: any[]) => fn.apply(this, args),
        writable: true,
        configurable: true
      });
    }

    Reflect.deleteProperty(this, '__Objc');
  }
}

export default UIViewController;
