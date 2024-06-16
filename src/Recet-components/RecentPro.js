import React from 'react'
import Data from './DataApi'
import Card from './Card'

const RecentPro = () => {
    return (
        <>
            <section class="projects my-5">

                <div className='container'>
                    <div className="row">
                        {
                            Data.map((val, ind) => {
                                return <Card key={ind} id={val.id} title={val.name} img={val.image} href={val.href}/>
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default RecentPro
