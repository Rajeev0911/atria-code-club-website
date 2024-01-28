import React from 'react'
import './Domains.css'

const Domains = () => {
    return (
        <div className='card-collection'>
            <div className="card" style={{width:'50%'}}>
                <div className="card-body">
                    <h5 className="card-title">AI and ML</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eius obcaecati praesentium sit reiciendis ducimus excepturi cum saepe. Enim, accusamus?</p>
                    <button className='domains-btn'>Select</button>
                </div>
            </div>
            <div className="card" style={{width:'50%'}}>
                <div className="card-body">
                    <h5 className="card-title">Website Development</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nihil! Voluptas voluptatibus excepturi, minus reiciendis repudiandae impedit quisquam. Earum, doloremque!</p>
                    <button className='domains-btn'>Select</button>
                </div>
            </div>
            <div className="card" style={{width:'50%'}}>
                <div className="card-body">
                    <h5 className="card-title">DSA</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. A minima repellendus aspernatur reprehenderit dolor, fugiat beatae rerum animi ad iste.</p>
                    <button className='domains-btn'>Select</button>
                </div>
            </div>
            <div className="card" style={{width:'50%'}}>
                <div className="card-body">
                    <h5 className="card-title">Android develpoment</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis neque amet pariatur placeat cum saepe assumenda natus ipsum. At.</p>
                    <button className='domains-btn'>Select</button>
                </div>
            </div>
            </div>
    )
}

export default Domains