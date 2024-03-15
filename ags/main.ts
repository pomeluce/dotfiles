import 'lib/sesstion';
import 'lib/init';
import options from 'options';
import launcher from 'widget/launcher';
import bar from 'widget/bar';
import clipboard from 'widget/clipboard';
import notificationPopups from 'widget/notifications/NotificationPopups';
import osd from 'widget/osd';
import overview from 'widget/overview';
import powermenu from 'widget/powermenu';
import screenCorners from 'widget/bar/ScreenCorners';
import settings from 'widget/settings';
import verification from 'widget/powermenu/Verification';
import { setupDateMenu } from 'widget/datemenu';
import { setupQuickSettings } from 'widget/quicksettings';
import { forMonitors } from 'lib/utils';
import { init } from 'lib/init';

App.config({
  icons: './assets',
  onConfigParsed: () => {
    setupQuickSettings();
    setupDateMenu();
    init();
  },
  closeWindowDelay: {
    launcher: options.transition.value,
    overview: options.transition.value,
    quicksettings: options.transition.value,
    datemenu: options.transition.value,
    clipboard: options.transition.value,
  },
  windows: [
    ...forMonitors(bar),
    ...forMonitors(notificationPopups),
    ...forMonitors(screenCorners),
    ...forMonitors(osd),
    clipboard(),
    launcher(),
    overview(),
    powermenu(),
    verification(),
    settings(),
  ],
});
