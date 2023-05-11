import React from 'react'
import Nav from './components/Nav'
import Card from './components/Card'
import data from "./data"


function App () {
    const travel = data.map(item => {
        return <Card
            key= {item.title}
            item={item}
        />
    })
    return (
        <div>
            <Nav />
                <div>
                    {travel}
                </div>
        </div>
  )
}



export default App