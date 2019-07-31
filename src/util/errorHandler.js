export const getError = err => {
  if (err && err.response && err.response.data && err.response.data.error)
    return err.response.data.error;
  return false;
};
