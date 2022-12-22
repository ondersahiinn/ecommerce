export const errorParser = (result: any) => {
  return {
    message: result.message,
    status: 'error',
  };
};
