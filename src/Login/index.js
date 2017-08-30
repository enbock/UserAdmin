import Container from './Container.js';
import Event from './Event';
import Locale from './Locale';
import Reducer from './Reducer';

export default Object.assign(
  Container,
  {
    Event: Event,
    Locale: Locale,
    Reducer: Reducer
  }
);
