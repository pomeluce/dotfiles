import { App } from 'astal/gtk3';
import { Button, ButtonProps } from 'astal/gtk3/widget';

type PanelButtonProps = ButtonProps & {
  target?: string;
  flat?: boolean;
};

export default function PanelButton({ target = '', flat, child, setup: setupProp, ...rest }: PanelButtonProps) {
  const setup = (self: Button) => {
    let open = false;

    self.toggleClassName('panel-button');
    self.toggleClassName(target);

    // self.hook(options.bar.flatButtons, () => {
    //   self.toggleClassName('flat', flat ?? options.bar.flatButtons.value);
    // });

    // self.hook(App, (_, win, visible) => {
    //   if (win !== target) return;
    //
    //   if (open && !visible) {
    //     open = false;
    //     self.toggleClassName('active', false);
    //   }
    //
    //   if (visible) {
    //     open = true;
    //     self.toggleClassName('active');
    //   }
    // });

    setupProp && setupProp(self);
  };
  return (
    <button setup={setup} {...rest}>
      <box>{child}</box>
    </button>
  );
}
