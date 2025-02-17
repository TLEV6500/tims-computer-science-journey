export function IterativeN1a(n: number) {
    let time = 1;
    for (let i = 0; ++time, i < n; ++i, ++time) {
        ++time;
    }
    return time;
}

export function IterativeN2a(n: number) {
    let time = 0;
    for (let i = (++time, 0), j = 0; ++time, i < n; ++i, ++time) {
        for (j = (++time, 0); ++time, j < n; ++j, ++time) ++time;
    }
    return time;
}