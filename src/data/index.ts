import { data41 } from './modules/4-1';
import { data42 } from './modules/4-2';
import { data43 } from './modules/4-3';
import { data44 } from './modules/4-4';
import { data45 } from './modules/4-5';
import { data46 } from './modules/4-6';

const moduleData: Record<string, any> = {
  '4-1': data41,
  '4-2': data42,
  '4-3': data43,
  '4-4': data44,
  '4-5': data45,
  '4-6': data46,
};

export function getModuleData(id: string): any {
  return moduleData[id] ?? null;
}
