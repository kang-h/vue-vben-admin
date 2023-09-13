import type { DropMenu } from '../components/Dropdown';
import type { LocaleSetting, LocaleType } from '/#/config';

export const LOCALE: { [key: string]: LocaleType } = {
  KO_KR: 'ko-KR',
  EN_US: 'en-US',
  ZH_CN: 'zh_CN',
};

export const localeSetting: LocaleSetting = {
  showPicker: true,
  // Locale
  locale: LOCALE.KO_KR,
  // Default locale
  fallback: LOCALE.KO_KR,
  // available Locales
  availableLocales: [LOCALE.KO_KR, LOCALE.ZH_CN, LOCALE.EN_US],
};

// locale list
export const localeList: DropMenu[] = [
  {
    text: '한국어',
    event: LOCALE.KO_KR,
  },
  {
    text: 'English',
    event: LOCALE.EN_US,
  },
  {
    text: '简体中文',
    event: LOCALE.ZH_CN,
  },
];
