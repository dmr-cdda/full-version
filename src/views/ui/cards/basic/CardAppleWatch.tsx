// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { Grid, Stack } from '@mui/material'

const CardAppleWatch = () => {
  return (
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
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Button
            variant='contained'
            sx={{ py: 2.5, borderBottomLeftRadius: 0, borderBottomRightRadius: 0, width: '100%' }}
          >
            Add To Cart
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Button
            variant='contained'
            color='error'
            sx={{ py: 2.5, borderTopLeftRadius: 0, borderTopRightRadius: 0, width: '100%' }}
          >
            Purchase
          </Button>
        </Grid>
      </Grid>
    </Card>
  )
}

export default CardAppleWatch
