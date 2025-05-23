import dayjs from '@/utils/dayjs';
import { getBaseUrl, getParams } from '@/helpers/url';

import type { TPostFrontMatter, TPostOgImage } from '@/types';

export const formatDate = (date: string) => {
  if (dayjs(date).isValid()) {
    return dayjs(date, 'YYYY-MM-DD').format('YYYY年MM月DD日');
  }

  return date;
};

export const formatDateRelative = (date: string) => {
  if (dayjs(date).isValid()) {
    const days = dayjs().diff(date, 'days');

    if (days > 6) {
      return formatDate(date);
    }

    if (days > 1) {
      return `${days} 天前`;
    }

    if (days === 1) {
      return `昨天`;
    }

    if (days === 0) {
      return `今天`;
    }
  }

  return date;
};

export const formatDateISO = (date: string) => {
  if (dayjs(date).isValid()) {
    return dayjs(date, 'YYYY-MM-DD').format();
  }

  return date;
};

export const formatLang = (lang: TPostFrontMatter['lang']) => {
  switch (lang) {
    case 'zh':
      return '中文简体';
    case 'zh-TW':
      return '中文繁体';
    case 'en':
      return '英语';
    default:
      return '';
  }
};

export const formatNumber = (number: number): string => number.toLocaleString();

export const getPostOgImageUrl = (data: TPostOgImage) => {
  const getUrl = (aspectRatio?: TPostOgImage['aspectRatio']) => {
    const params = aspectRatio
      ? getParams({ ...data, aspectRatio })
      : getParams(data);

    return encodeURI(`${getBaseUrl()}/api/og-post?${params}`);
  };

  return {
    default: getUrl(),
    '16/9': getUrl('16/9'),
    '4/3': getUrl('4/3'),
    '1/1': getUrl('1/1'),
  };
};

export const getPostStructuredData = ({
  title,
  dateModified,
  datePublished,
  images,
}: {
  title: string;
  images: Array<string>;
  datePublished: string;
  dateModified: string;
}) =>
  JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    image: images,
    datePublished: formatDateISO(datePublished),
    dateModified: formatDateISO(dateModified),
    author: [
      {
        '@type': 'Person',
        name: 'Yulo Han',
        jobTitle: '前端开发',
        url: 'https://www.yulohan.cn/about',
      },
    ],
  });
