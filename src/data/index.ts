import { data42 } from './modules/4-2';

const moduleData = {
  '4-2': data42,
} as const;

export type AnyModuleData = (typeof moduleData)[keyof typeof moduleData];

export function getModuleData(id: string): AnyModuleData | null {
  return (moduleData as Record<string, AnyModuleData>)[id] ?? null;
}
