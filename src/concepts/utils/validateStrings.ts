export function isYes(str: string) {
    return /(\bY|y)(ES|es)?\b/.test(str);
}

export function isNo(str: string) {
    return /(\bN|n)(O|o)?\b/.test(str);
}