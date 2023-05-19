import { ElementSizeType } from "./assets/consts/form.const";

export type OptionalNonNullableObject<T extends object> = {
  [P in keyof Partial<T>]: NonNullable<T[P]>;
};

export type ElementSizeTypeProps = ElementSizeType | undefined;
