type ValueProps = {
  height?: number;
  uri?: string;
  width?: number;
  fileName?: string;
  type?: string;
  fileSize?: number;
};

export const setImageUndefined = (values: ValueProps): ValueProps => {
  values.height = undefined;
  values.uri = undefined;
  values.width = undefined;
  values.fileName = undefined;
  values.type = undefined;
  values.fileSize = undefined;

  return values;
};
