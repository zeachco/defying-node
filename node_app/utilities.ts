import leftpad from "leftpad";

interface Cpu {
  model: string;
  speed: number;
  times: { user: number; nice: number; sys: number; idle: number; irq: number };
}

export function simplifyCpuName(cpu: Cpu) {
  return [cpu.model, leftpad(cpu.speed, ".", 5)].join(" ");
}
