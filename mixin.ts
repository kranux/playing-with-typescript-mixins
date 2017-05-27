type Constructor<T> = new (...args: any[]) => T;
type Constructable = Constructor<{}>;

export function Timestamped<TBase extends Constructable>(Base: TBase) {
    return class Timestamped extends Base {
        public timestamp = Date.now();
    };
}
