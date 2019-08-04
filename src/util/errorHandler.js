export const getError = err => {
  if (!err || !err.response || !err.response.data || !err.response.data.error)
    return false;

  const { error } = err.response.data;

  switch (typeof error) {
    case 'string':
      return error;
    default: {
      if (error.length && error.length > 0) return error[0];

      return false;
    }
  }
};
