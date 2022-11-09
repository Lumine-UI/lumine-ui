import ViewImpl from "./components/View";

export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}

export {ViewImpl as View};