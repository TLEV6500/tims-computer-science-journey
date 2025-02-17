import { IterativeN1a, IterativeN2a } from "../concepts/algorithms/analysis/IterativeAlgorithms.ts";
import { Recursive1a, Recursive2a, Recursive3a } from "../concepts/algorithms/analysis/RecursiveAlgorithms.ts";
import { DataLogger } from "../concepts/algorithms/helpers.ts";
import { plot } from "https://deno.land/x/chart/mod.ts";

export default function main() {
    const t1 = new DataLogger<number>();
    const t2 = new DataLogger<number>();
    const t3 = new DataLogger<number>();
    const t4 = new DataLogger<number>();
    const t5 = new DataLogger<number>();
    for (let i = 1; i < 1000; i += 10) {
        t1.log(IterativeN1a(i));
        t2.log(IterativeN2a(i));
        t3.log(Recursive1a(i));
        t4.log(Recursive2a(i));
        t5.log(Recursive3a(i));
    }
    const height = 20;
    console.log("t1\n");
    console.log(plot(t1.data, { height }), '\n', t1.data, '\n');
    console.log("t2\n");
    console.log(plot(t2.data, { height }), '\n', t2.data, '\n');
    console.log("t3\n");
    console.log(plot(t3.data, { height }), '\n', t3.data, '\n');
    console.log("t4\n");
    console.log(plot(t4.data, { height }), '\n', t4.data, '\n');
    console.log("t5\n");
    console.log(plot(t5.data, { height }), '\n', t5.data, '\n');

}