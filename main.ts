import { overrideThemes } from 'markedit-theming';
import { basicLight } from 'cm6-theme-basic-light';
import { basicDark } from 'cm6-theme-basic-dark';

overrideThemes({
  light: { extension: basicLight },
  dark: { extension: basicDark },
  options: { settingsKey: 'extension.markeditThemeBasic' },
});
