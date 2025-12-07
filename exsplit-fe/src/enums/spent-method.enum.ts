export const SplitMethod = {
  eq: "Equally Splitted",
  ueq: "Unequally Splitted"
} as const;

export type SplitMethod = keyof typeof SplitMethod;