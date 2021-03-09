import React from 'react'
import CardItem from '../card-item/card-item.component'
import { Grid } from '@material-ui/core'
import './card-collection.styles.scss'

const CardCollection = () => (
    <Grid item container>
        <CardItem 
        id = 'user-name-1'
        imageUrl='https://th.bing.com/th/id/OIP.r3S64hdXtjvgmdM0Iik2KgHaI8?w=200&h=241&c=7&o=5&dpr=1.5&pid=1.7'
        imageTitle='Marcus Aurelius'
        userName='Marcus Aurelius'
        userRole='Philosopher'/>
        <CardItem 
        id = 'user-name-2'
        imageUrl='https://upload.wikimedia.org/wikipedia/commons/8/8f/Gaius_Iulius_Caesar_%28Vatican_Museum%29.jpg'
        imageTitle='Julius Caeser'
        userName='Julius Caeser'
        userRole='Emperor'/>
    </Grid>    
);

export default CardCollection;