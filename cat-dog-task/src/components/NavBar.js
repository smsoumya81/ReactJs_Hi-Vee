import React from 'react'
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min'
import { Route, Redirect} from 'react-router-dom'
import { DogImage } from './DogImage'
import { CatFact } from './CatFact'

const NavBar = (props) =>{
    return(
        <>
            <Route path='/dogimage' component = {DogImage} exact={true}></Route>
            <Route path='/catfact' component={CatFact} exact={true}></Route>
            <Redirect to='/dogimage'></Redirect>
        </>
    )
}

export default withRouter(NavBar)