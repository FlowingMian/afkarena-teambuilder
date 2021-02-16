import { extendTheme } from "@chakra-ui/react"
import colors from './colors'
import ColorScheme from './colorScheme'

const Theme = extendTheme({
    colors,
    components: {
      Tabs : ColorScheme,
      Button : ColorScheme,
      Checkbox : ColorScheme,
      Switch : ColorScheme,
      Progress : ColorScheme,
      Tag : ColorScheme,
    }
  })
export default Theme;