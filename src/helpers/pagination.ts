import { ProductsEntity } from "../mocked_data/shopResponse";

const nextVariant = (
  item: ProductsEntity,
  currentVariantindex: number
): number => {
  if (!item.Variants) {
    return 0;
  }

  if (
    currentVariantindex !== -1 &&
    item.Variants.length - 1 > currentVariantindex
  ) {
    return currentVariantindex + 1;
  } else {
    return 0;
  }
};
const previousVariant = (
  item: ProductsEntity,
  currentVariantindex: number
): number => {
  if (!item.Variants) {
    return 0;
  }

  if (currentVariantindex !== -1 && currentVariantindex !== 0) {
    return currentVariantindex - 1;
  } else {
    return item.Variants.length - 1;
  }
};

export default { previousVariant, nextVariant };
