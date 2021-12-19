export const formatDate = (date) => {
  const newDate = new Date(date);
  return newDate.toLocaleDateString();
};
