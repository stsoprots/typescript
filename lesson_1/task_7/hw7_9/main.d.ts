export {};
declare global {
    interface Array<T> {
        myForEach(callback: (value: T) => void): void;
        myFilter(callback: (value: T) => boolean): T[];
    }
}
//# sourceMappingURL=main.d.ts.map