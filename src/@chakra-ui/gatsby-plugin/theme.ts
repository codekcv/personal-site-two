import { extendTheme } from '@chakra-ui/react'

const theme = {
  styles: {
    global: {
      'html, body': {
        fontFamily:
          '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
        backgroundImage:
          'linear-gradient(90deg, transparent 0%, transparent 8%,rgba(90, 90, 90,0.05) 8%, rgba(90, 90, 90,0.05) 21%,transparent 21%, transparent 100%),linear-gradient(45deg, transparent 0%, transparent 23%,rgba(90, 90, 90,0.05) 23%, rgba(90, 90, 90,0.05) 37%,transparent 37%, transparent 100%),linear-gradient(0deg, transparent 0%, transparent 37%,rgba(90, 90, 90,0.05) 37%, rgba(90, 90, 90,0.05) 49%,transparent 49%, transparent 100%),linear-gradient(90deg, rgb(255,255,255),rgb(255,255,255))',
        backgroundColor: 'aliceblue',
        color: 'gray.600',
        msOverflowStyle: 'none',
        scrollbarWidth: 'none',
        '::-webkit-scrollbar': {
          display: 'none'
        },
        overflowX: 'hidden'
      },
      a: {
        color: 'inherit',
        textDecoration: 'underline'
      }
    }
  },
  colors: {
    primary: 'rebeccapurple'
  }
}

export default extendTheme(theme)
