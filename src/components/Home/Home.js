import React, {useState} from 'react'
import './Home.css'

function Home() {
    const [showServices, setShowServices ] = useState(false);
    return (
        <div className='home_container'>
            <div className='home_comp'>
                {showServices ? (
                    <div className='Card_Section'></div>
                ) : (
                    <div>
                        <h2>Add a service</h2>
                    </div>
                )
                }
                {/* <p>Hello! This is the home component</p>    */}
            </div>
        </div>
    )
}

export default Home
