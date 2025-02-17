import { For } from "../helpers.ts";

export function Recursive1a(n: number, time: number = 0) {
    ++time;
    if (n <= 1) return ++time;
    return Recursive1a(n / 2, time);
}

export function Recursive2a(n: number, time: number = 0) {
    if (n <= 1) return ++time;
    for (let i = 0; i < n; ++i) ++time;
    return Recursive1a(n / 2, time);
}

export function Recursive3a(n: number, time: number = 0): number {
    if (n <= 1) return ++time;
    // console.log("n=", n)
    For.use()?.setBody(() => Recursive3a(n / 2, time));
    return For.use(For.use() ? undefined : new For(0, n, (i) => i + 1, () => Recursive3a(n / 2, time)))!.run() + time;
}