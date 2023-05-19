export type OptionalNonNullableObject<T extends object> = {
  [P in keyof Partial<T>]: NonNullable<T[P]>;
};
