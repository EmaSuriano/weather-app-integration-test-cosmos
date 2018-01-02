import Rain from '../Rain';
import { withBackground } from 'cosmosUtils';
import { RainWithBackground } from './Rain.fixture';

export default {
  component: RainWithBackground,
  props: {
    patchy: false,
    lighting: true,
  },
};
