import Container from './Container.js';
import Style from './Style/index.less';
import Locale from './Locale';
import Event from './Event';
import Storage from "./Storage";

export default Object.assign(
  Container,
  {
    Event: Event,
    Locale: Locale,
    Style: Style,
    Storage: Storage
  }
);
