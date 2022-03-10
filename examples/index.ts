import { UIViewController, IBOutlet, IBAction, ISender } from '../src/Foundation';

class App extends UIViewController {
  @IBOutlet declare textHolder: HTMLElement;

  constructor() {
    super();

    this.textHolder.innerHTML = 'App Initilized Waiting For Button To Click';
  }

  @IBAction private buttonTapped(
    @ISender('click') textChanger: HTMLButtonElement,
    event: MouseEvent
  ) {
    this.textHolder.innerHTML = 'Button Clicked';
    console.log(event.target === textChanger); // true
  }
}

new App();
