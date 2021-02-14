import { extendTheme } from "@chakra-ui/react"
import colors from './colors'
import ColorScheme from './colorScheme'
import Popover from './Popover'

const Theme = extendTheme({
    colors,
    components: {
      Tabs : ColorScheme,
      Button : ColorScheme,
      Switch : ColorScheme,
      Progress : ColorScheme,
      Popover : Popover,
    }
  })
export default Theme;