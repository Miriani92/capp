export const getPieData = (users: any) => {
  let config: any = [];
  let pieTitleConfig: any = {};
  let obj: any = {};
  users.forEach((item: any) => {
    const { city } = item;
    if (obj[city]) {
      obj[city] = obj[city] + 1;
      const percent = Number(((obj[city] / users.length) * 100).toFixed(0));
      pieTitleConfig[city] = percent;
    } else {
      obj[city] = 1;
    }
  });
  for (const key in pieTitleConfig) {
    const obj = {
      type: key.toUpperCase(),
      value: pieTitleConfig[key],
    };
    config.push(obj);
  }
  return config;
};
