import css from 'style';
import matugen from './matugen';
import hyprland from './hyprland';
import gtk from './gtk';
import lowBattery from './battery';
import swww from './swww';
import notifications from './notifications';

export const init = async () => {
  try {
    gtk();
    css();
    matugen();
    lowBattery();
    notifications();
    hyprland();
    css();
    swww();
  } catch (error) {
    logError(error);
  }
};
