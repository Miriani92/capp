export const setColumns = () => {};
const flatten = (obj: any) => {
  let result: any = {};
  for (const i in obj) {
    if (typeof obj[i] === "object" && !Array.isArray(obj[i])) {
      const temp = flatten(obj[i]);
      for (const j in temp) {
        result[j] = temp[j];
      }
    } else {
      result[i] = obj[i];
    }
  }
  return result;
};

export const flattendData = (users: any) => {
  const flattenUserData = users.map((user: any) => {
    return flatten(user);
  });
  return flattenUserData;
};
