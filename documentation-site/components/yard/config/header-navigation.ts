import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationItem,
  StyledNavigationList,
} from 'baseui/header-navigation';
import {StyledLink} from 'baseui/link';
import {Button} from 'baseui/button';
import {PropTypes} from '../const';
import {TConfig} from '../types';

const HeaderNavigationConfig: TConfig = {
  imports: {
    'baseui/header-navigation': {
      named: ['HeaderNavigation', 'ALIGN'],
    },
    'baseui/link': {
      named: ['StyledLink'],
    },
    'baseui/button': {
      named: ['Button'],
    },
  },
  scope: {
    HeaderNavigation,
    ALIGN,
    StyledNavigationItem,
    StyledNavigationList,
    StyledLink,
    Button,
  },
  theme: ['headerNavigationFill'],
  props: {
    children: {
      value: `<StyledNavigationList $align={ALIGN.left}>
<StyledNavigationItem>Uber</StyledNavigationItem>
</StyledNavigationList>
<StyledNavigationList $align={ALIGN.center} />
<StyledNavigationList $align={ALIGN.right}>
<StyledNavigationItem>
<StyledLink href="#basic-link1">Tab Link One</StyledLink>
</StyledNavigationItem>
<StyledNavigationItem>
<StyledLink href="#basic-link2">Tab Link Two</StyledLink>
</StyledNavigationItem>
</StyledNavigationList>
<StyledNavigationList $align={ALIGN.right}>
<StyledNavigationItem>
<Button>Get started</Button>
</StyledNavigationItem>
</StyledNavigationList>
`,
      type: PropTypes.ReactNode,
      description: 'Header navigation content.',
    },
    overrides: {
      value: undefined,
      type: PropTypes.Overrides,
      description: 'Lets you customize all aspects of the component.',
      names: ['Root'],
      sharedProps: {},
    },
  },
};

export default HeaderNavigationConfig;
