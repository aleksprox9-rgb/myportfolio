import type { Answers, State } from '../constructor.type';

const KEY = "constructor_state";

export type StorageData = {
  step: State;
  currentIndex: number;
  answers: Answers;
}

export function saveState(data: StorageData) {
  localStorage.setItem(KEY, JSON.stringify(data));
}

export function loadState() {
  const raw = localStorage.getItem(KEY);
  return raw ? JSON.parse(raw) as StorageData : null;
}

export function clearState() {
  localStorage.removeItem(KEY);
}