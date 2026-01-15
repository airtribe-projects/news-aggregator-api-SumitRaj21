const store = new Map();

exports.set = (key, value, ttl = 300) => {
  store.set(key, { value, exp: Date.now() + ttl * 1000 });
};

exports.get = (key) => {
  const data = store.get(key);
  if (!data || Date.now() > data.exp) return null;
  return data.value;
};
