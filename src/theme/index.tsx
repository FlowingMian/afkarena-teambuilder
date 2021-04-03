import { extendTheme } from '@chakra-ui/react';
import colors from './colors';
import ColorScheme from './ColorScheme';
import Link from './Link';
import Button from './Button';
import Tabs from './Tabs';
import Table from './Table';

const Theme = extendTheme({
  colors,
  components: {
    Link : Link,
    Table: Table,
    Tabs : Tabs,
    Button : Button,
    Checkbox : ColorScheme,
    Switch : ColorScheme,
    Progress : ColorScheme,
    Tag : ColorScheme,
  }
});
export default Theme;