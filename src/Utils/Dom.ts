export function selectById(id: string): HTMLElement {
  let elem;
  return (elem = document.getElementById(id))
    ? elem
    : (() => {
        throw new Error(`Element with id ${id} not found`);
      })();
}
