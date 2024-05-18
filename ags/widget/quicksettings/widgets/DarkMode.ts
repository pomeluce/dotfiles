import { SimpleToggleButton } from '../ToggleButton';
import icons from 'lib/icons';
import options from 'options';

const {
  scheme: { mode },
} = options.theme;

export const DarkModeToggle = () =>
  SimpleToggleButton({
    icon: mode.bind().as(s => icons.color[s]),
    label: mode.bind().as(s => (s === 'dark' ? 'Dark' : 'Light')),
    toggle: () => (mode.value = mode.value === 'dark' ? 'light' : 'dark'),
    connection: [mode, () => mode.value === 'dark'],
  });
