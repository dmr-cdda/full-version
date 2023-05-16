// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { ButtonGroup, ThemeProvider } from '@mui/material'

import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  components: {
    MuiToggleButtonGroup: {
      styleOverrides: {
        grouped: {
          '&:not(:last-of-type)': {
            border: 'none'
          }
        }
      }
    }
  }
})

const CardAppleWatch = () => {
  return (
    <ThemeProvider theme={theme}>
      <Card>
        <CardMedia sx={{ height: '9.375rem' }} image='/images/cards/watch-on-hand.jpg' />
        <CardContent sx={{ p: theme => `${theme.spacing(3, 5.25, 4)} !important` }}>
          <Typography variant='h5' sx={{ mb: 2 }}>
            Apple Watch
          </Typography>
          <Typography sx={{ mb: 2 }}>$249.40</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            3.1GHz 6-core 10th-generation Intel Core i5 processor, Turbo Boost up to 4.5GHz
          </Typography>
        </CardContent>
        <ButtonGroup
          variant='contained'
          fullWidth
          sx={{ borderTopLeftRadius: 0, borderBottomRightRadius: 0, border: 'none' }}
        >
          <Button color='error'>Buy Now</Button>
          <Button color='success'>Add to cart</Button>
        </ButtonGroup>
      </Card>
    </ThemeProvider>
  )
}

export default CardAppleWatch
