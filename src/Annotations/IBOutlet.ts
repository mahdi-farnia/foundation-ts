export default function IBOutlet(target: any, key: string) {
  const outlets: Set<string> = (target.__IBOutlets = target.__IBOutlets || new Set());

  outlets.add(key);
}
