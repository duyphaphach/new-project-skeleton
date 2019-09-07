import * as OfflinePluginRuntime from 'offline-plugin/runtime';
import application from './core/application';
import pageHome from './pages/home';
import './../styles/styles.less'

OfflinePluginRuntime.install();

// application
const applicationModules = [
  // modules
  // pages
  { name: 'pageHome', content: pageHome, isActive: $('.page-home').length > 0 },
];

applicationModules.forEach(({
                              name,
                              content,
                              isActive,
                            }) => {
  if (isActive) {
    application.register(name, content);
  }
});

$(() => {
  application.start();
});

