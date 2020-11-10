export function hocName(functionName, BaseComponent) {
  const baseName = BaseComponent.displayName || BaseComponent.name || 'BaseComponent';
  return `${functionName}(${baseName})`;
}
