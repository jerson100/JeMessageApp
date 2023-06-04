import { FormElementSizeConfig } from "./consts/form.const";
import { RoundedConfig } from "./consts/rounded.const";

export type OptionalNonNullableObject<T extends object> = {
  [P in keyof Partial<T>]: NonNullable<T[P]>;
};

export type ElementSizeTypeProps =
  | keyof typeof FormElementSizeConfig.size
  | undefined;

export type RoundedType = keyof typeof RoundedConfig.rounded | undefined;
