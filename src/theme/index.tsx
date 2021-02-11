import { extendTheme } from "@chakra-ui/react"
import colors from './colors'
import ColorScheme from './colorScheme'

const Theme = extendTheme({
    colors,
    // styles: {
    //   global: {
    //     body: {
    //       background: "gray.200",
    //     }
    //   }
    // },
    components: {
      Tabs : ColorScheme,
      Button : ColorScheme,
      Switch : ColorScheme,
      Progress : ColorScheme,
    }
  })
export default Theme;