import options from 'options';
import PanelButton from '../PanelButton';

const { icon, action } = options.bar.launcher;

const Spinner = () => {
  const child = Widget.Icon({
    icon: icon.icon.bind(),
    className: icon.colored.bind().as(c => (c ? 'colored' : '')),
    css: `
            @keyframes spin {
                to { -gtk-icon-transform: rotate(1turn); }
            }

            image.spinning {
                animation-name: spin;
                animation-duration: 1s;
                animation-timing-function: linear;
                animation-iteration-count: infinite;
            }
        `,
  });

  return Widget.Revealer({
    transition: 'slide_left',
    child,
    revealChild: icon.icon.bind().as(i => Boolean(i)),
  });
};

export default () => {
  return PanelButton({
    window: 'launcher',
    onClicked: action.bind(),
    child: Widget.Box([
      Spinner(),
      // Widget.Icon({
      //   className: icon.colored.bind().as(c => (c ? 'colored' : '')),
      //   visible: ico.bind().as(v => !!v),
      //   icon: ico.bind(),
      //   size: icon.size.bind(),
      // }),
      // Widget.Label({
      //   className: label.colored.bind().as(c => (c ? 'colored' : '')),
      //   visible: label.label.bind().as(v => !!v),
      //   label: label.label.bind(),
      // }),
    ]),
  });
};
