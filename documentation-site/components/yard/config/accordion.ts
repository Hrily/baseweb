import {Accordion, Panel} from 'baseui/accordion';
import {PropTypes} from '../const';
import {TConfig} from '../types';

const AccordionConfig: TConfig = {
  imports: {
    'baseui/accordion': {named: ['Accordion']},
  },
  scope: {
    Accordion,
    Panel,
  },
  theme: [],
  props: {
    children: {
      value: `<Panel title="Panel 1">
  Content 1
</Panel>
<Panel title="Panel 2">
  Content 2
</Panel>
<Panel title="Panel 3">
  Content 3
</Panel>`,
      type: PropTypes.ReactNode,
      description: `An array of Panel components.`,
      imports: {
        'baseui/accordion': {named: ['Panel']},
      },
    },
    onChange: {
      value: '({expanded}) => console.log(expanded)',
      type: PropTypes.Function,
      description: 'Called when a panel is expanded.',
    },
    disabled: {
      value: false,
      type: PropTypes.Boolean,
      description: 'Renders component in disabled state.',
    },
    overrides: {
      value: undefined,
      type: PropTypes.Overrides,
      description: 'Lets you customize all aspects of the component.',
      names: ['Content', 'Header', 'PanelContainer', 'Root', 'ToggleIcon'],
      sharedProps: {
        $disabled: 'disabled',
      },
    },
  },
};

export default AccordionConfig;
