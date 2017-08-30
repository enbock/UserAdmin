import Container from './Container.js';
import Style from './Style/index.less';
import Locale from './Locale';

export default Object.assign(
  Container,
  {
    Style: Style,
    Locale: Locale
  }
);
