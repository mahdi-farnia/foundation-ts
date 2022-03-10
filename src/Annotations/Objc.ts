function objc(target: any, method: string, descriptor: PropertyDescriptor) {
  const Objc = (target.__Objc = target.__Objc || []);
  Objc.push({ method, fn: descriptor.value });
}

export default objc;
