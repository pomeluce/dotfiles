import icons from 'lib/icons';
import options from 'options';
import { bash, dependencies } from 'lib/utils';

const iconVisible = Variable(false);

const MAX = options.launcher.sh.max;
const BINS = `${Utils.CACHE_DIR}/binaries`;
bash('{ IFS=:; ls -H $PATH; } | sort ').then(bins => Utils.writeFile(bins, BINS));

async function query(filter: string) {
  if (!dependencies('fzf')) return [] as string[];

  return bash(`cat ${BINS} | fzf -f ${filter} | head -n ${MAX}`)
    .then(str => Array.from(new Set(str.split('\n').filter(i => i)).values()))
    .catch(err => {
      print(err);
      return [];
    });
}

const run = (args: string) => {
  Utils.execAsync(args)
    .then(out => {
      print(`:sh ${args.trim()}:`);
      print(out);
    })
    .catch(err => {
      Utils.notify('ShRun Error', err, icons.app.terminal);
    });
};

const Item = (bin: string) => {
  return Widget.Box(
    {
      attribute: { bin },
      vertical: true,
    },
    Widget.Separator(),
    Widget.Button({
      child: Widget.Label({
        label: bin,
        hpack: 'start',
      }),
      className: 'sh-item',
      onClicked: () => {
        Utils.execAsync(bin);
        App.closeWindow('launcher');
      },
    }),
  );
};

export const Icon = () => {
  const icon = Widget.Icon({
    icon: icons.app.terminal,
    className: 'spinner',
  });

  return Widget.Revealer({
    transition: 'slide_left',
    child: icon,
    revealChild: iconVisible.bind(),
  });
};

export const ShRun = () => {
  const list = Widget.Box<ReturnType<typeof Item>>({
    vertical: true,
  });

  const revealer = Widget.Revealer({
    child: list,
  });

  const filter = async (term: string) => {
    iconVisible.value = Boolean(term);

    if (!term) revealer.revealChild = false;

    if (term.trim()) {
      const found = await query(term);
      list.children = found.map(Item);
      revealer.revealChild = true;
    }
  };

  return Object.assign(revealer, { filter, run });
};
