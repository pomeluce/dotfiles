import { App } from 'astal/gtk3';
import Bar from './widget/Bar';
import style from './style/index.scss';

App.start({
  css: style,
  instanceName: 'js',
  requestHandler(request, res) {
    print(request);
    res('ok');
  },
  main: () => App.get_monitors().map(Bar),
});
