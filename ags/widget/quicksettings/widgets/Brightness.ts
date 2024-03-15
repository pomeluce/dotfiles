import icons from 'lib/icons';
import brightness from 'service/brightness';

const BrightnessSlider = () =>
  Widget.Slider({
    drawValue: false,
    hexpand: true,
    value: brightness.bind('screen'),
    onChange: ({ value }) => (brightness.screen = value),
  });

export const Brightness = () =>
  Widget.Box({
    className: 'brightness',
    children: [
      Widget.Button({
        vpack: 'center',
        child: Widget.Icon(icons.brightness.indicator),
        onClicked: () => (brightness.screen = brightness.screen === 0 ? 0.65 : 0),
        tooltipText: brightness.bind('screen').as(v => `Screen Brightness: ${Math.floor(v * 100)}%`),
      }),
      BrightnessSlider(),
    ],
  });
