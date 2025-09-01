// Environment variable access with fallbacks
type EnvKey = 'VITE_API_URL' | 'VITE_ENABLE_ANALYTICS';

const env = {
  get: (key: EnvKey, defaultValue: string = ''): string => {
    return import.meta.env[key] ?? defaultValue;
  },
  getBoolean: (key: EnvKey, defaultValue: boolean = false): boolean => {
    const value = import.meta.env[key];
    if (value === undefined) return defaultValue;
    return value === 'true' || value === '1';
  },
  getNumber: (key: EnvKey, defaultValue: number = 0): number => {
    const value = import.meta.env[key];
    if (value === undefined) return defaultValue;
    const num = Number(value);
    return isNaN(num) ? defaultValue : num;
  },
};

export default env;
