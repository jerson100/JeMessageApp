import { FormElementSizeConfig } from "./assets/consts/form.const";
import { RoundedConfig } from "./assets/consts/rounded.const";

export type OptionalNonNullableObject<T extends object> = {
  [P in keyof Partial<T>]: NonNullable<T[P]>;
};

export type ElementSizeTypeProps =
  | keyof typeof FormElementSizeConfig.size
  | undefined;

export type RoundedType = keyof typeof RoundedConfig.rounded | undefined;
