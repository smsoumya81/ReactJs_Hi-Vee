import {useState, useEffect} from 'react'
import Axios  from 'axios'
import { Grid } from '@mui/material'
export const CatFact = (props) =>{
    const [catFact, setCatFact] = useState('')

    useEffect(()=>{
        Axios.get('https://catfact.ninja/fact')
        .then((res)=>{
            const catFactData = res.data
            setCatFact(catFactData.fact)
        })
        .catch((e)=>{
            console.log(e.message)
        })
    },[])
    return(
        <Grid>
            <h3 style={{textAlign:'center'}}>{catFact}</h3>
        </Grid>
    )
}