import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  const data = (await import(`./data/${locale}.json`)).default;
  const res = {
    messages: data,
  };

  return res;
});
