import Rain from '../Rain';
import { withBackground } from 'cosmosUtils';

export const RainWithBackground = withBackground('white')(Rain);

export default {
  component: RainWithBackground,
  props: {
    patchy: false,
    lighting: false,
  },
};
