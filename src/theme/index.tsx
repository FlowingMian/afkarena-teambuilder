import { extendTheme } from "@chakra-ui/react"
import colors from './colors'
import ColorScheme from './colorScheme'
import Tabs from "./Tabs";
import Table from "./Table";

const Theme = extendTheme({
    colors,
    components: {
      Table: Table,
      Tabs : Tabs,
      Button : ColorScheme,
      Checkbox : ColorScheme,
      Switch : ColorScheme,
      Progress : ColorScheme,
      Tag : ColorScheme,
    }
  })
export default Theme;