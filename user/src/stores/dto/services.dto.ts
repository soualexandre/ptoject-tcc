export const getOtherServicesDTO = (
  autoCompleteRequest: AutoCompleteRequestFromApi,
): AutoCompleteRequestParams => {
  const other_services =
    autoCompleteRequest.other_services &&
    autoCompleteRequest.other_services.map((value) => ({
      ...value,
      is_selected: false,
      input_value: '',
      input_amount: '',
    }));

  return { ...autoCompleteRequest, other_services };
};
