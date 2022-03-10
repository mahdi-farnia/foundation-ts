export function toKebabCase(str: string): string {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

export function getFuncParams(func: Function): string[] {
  const funcStr = func.toString(),
    params = funcStr.slice(funcStr.indexOf('(') + 1, funcStr.indexOf(')')).split(',');
  return params.map((param) => param.trim());
}
