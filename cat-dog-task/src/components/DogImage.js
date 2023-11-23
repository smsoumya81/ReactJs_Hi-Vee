import '../App.css'
import { useState, useEffect} from 'react'
import Axios from 'axios'
import { Grid } from '@mui/material'


export const DogImage = (props)=>{
    const [imageUrl, setImageUrl] = useState('')

    useEffect(()=>{
        Axios.get('https://dog.ceo/api/breeds/image/random')
        .then((res)=>{
            const dogImageData = res.data
            setImageUrl(dogImageData.message)
        })
        .catch((e)=>{
            console.log(e.message)
        })
    },[])



return(
        <Grid >
            <div>
            <img 
                src={imageUrl}
                alt='dog'
                style={{display :'block', marginTop:'auto',marginLeft : 'auto', marginRight: 'auto',height:'auto', maxWidth:'50%'}}
                />
            </div> 
        </Grid>
    )
}
