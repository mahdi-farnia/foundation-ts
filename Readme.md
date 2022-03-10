# Typescript Foundation

This package is implementation of swift Ui Foundation for typescript.

## Table of Contents

- [Typescript Foundation](#typescript-foundation)
  - [Table of Contents](#table-of-contents)
  - [Annotators](#annotators)
    - [IBAction: Interface Builder Action](#ibaction-interface-builder-action)
    - [IBOutlet: Interface Builder Outlet](#iboutlet-interface-builder-outlet)
    - [Main](#main)
    - [Objc](#objc)

## Annotators

### IBAction: Interface Builder Action

> ```ts
> @IBAction methodName(@ISender('<event name>') sender: Element, event: Event);
> ```

```html
<button id="btn-id">Click me</button>
```

```ts
import { IBAction, ISender, UIViewController } from 'Foundation/Foundation';

class App extends UIViewController {
  @IBAction buttonTapped(@ISender('click') btnId: HTMLButtonElement, event: MouseEvent) {
    // ...
  }
  // Use Event Bubbling
  @IBAction buttonTappedCapture(@ISender('click') btnId: HTMLButtonElement, event: MouseEvent) {
    // ...
  }
}
```

### IBOutlet: Interface Builder Outlet

> ```ts
> @IBOutlet declare elementId: Element;
> ```

```html
<div id="element-id"></div>
```

```ts
import { IBOutlet, UIViewController } from 'Foundation/Foundation';

class App extends UIViewController {
  @IBOutlet declare elementId: Element;

  constrcutor() {
    super();
    console.log(this.elementId);
  }
}
```

### Main

> Calls static member `main` of class

```ts
import { main, UIViewController } from 'Foundation/Foundation';

@main
class App extends UIViewController {
  constructor() {
    super();
  }

  // Required!
  static main() {
    new App();
  }
}
```

### Objc

> Binds method to `this`

```ts
class App extends UIViewController {
  constructor() {
    super();

    document.addEventListener('DOMContentLoaded', this.greet);
  }

  @objc greet(e: Event, method: Function) {
    console.log(`Hello ${this.name}`);

    document.removeEventListener('DOMContentLoaded', method);

    // Will NOT work!
    document.removeEventListener('DOMContentLoaded', this.greet);
  }
}
```
