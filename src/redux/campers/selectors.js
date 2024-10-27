export const selectCampers = state => state.campers.items;
export const selectCamperById = state => state.campers.details;
export const selectIsLoading = state => state.campers.isLoading;
export const selectError = state => state.campers.error;
export const campersAdditionalData = state => state.campers;
