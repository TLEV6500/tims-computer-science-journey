import { Chart, ChartData } from "npm:chart.js";

export function drawLineChart<H extends HTMLElement>(parent: H, data: ChartData): Chart {
    let canvas: HTMLCanvasElement;
    if (parent instanceof HTMLCanvasElement) canvas = parent;
    else canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error("Failed to get context");
    const chart = new Chart(ctx, {
        type: 'line',
        data: data,
    });
    return chart;
}