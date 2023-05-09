/* eslint-disable @next/next/no-img-element */
import React from 'react'

function Cardsa() {
    return (
        <>
            <section className="home-cards">
                <div>
                    <img className="h-[260px] w-[260px]" src="/pca.png" alt="" />
                    <h3 className='text-xl hover:italic transition-all hover:font-bold'>Item One</h3>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem consectetur
                        odio quasi autem numquam. Vero alias possimus obcaecati distinctio molestiae,
                        a totam, neque iste blanditiis veritatis, odio quibusdam. Iste, tenetur?
                    </p>
                    <a href="#" className="btn">
                        Learn More <i className="fas fa-chevron-right"></i>
                    </a>
                </div>
                <div>
                    <img className="h-[200px] w-[200px]" src="/pcb.png" alt="" />
                    <h3 className='text-xl hover:italic transition-all hover:font-bold'>Item Two</h3>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem consectetur
                        odio quasi autem numquam. Vero alias possimus obcaecati distinctio molestiae,
                        a totam, neque iste blanditiis veritatis, odio quibusdam. Iste, tenetur?
                    </p>
                    <a href="#" className="btn">
                        Learn More <i className="fas fa-chevron-right"></i>
                    </a>
                </div >
                <div>
                    <img className="h-[200px] w-[200px]" src="/pcc.png" alt="" />
                    <h3 className='text-xl hover:italic transition-all hover:font-bold'>Item Three</h3>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem consectetur
                        odio quasi autem numquam. Vero alias possimus obcaecati distinctio molestiae,
                        a totam, neque iste blanditiis veritatis, odio quibusdam. Iste, tenetur?
                    </p>
                    <a href="#" className="btn">
                        Learn More <i className="fas fa-chevron-right"></i>
                    </a>
                </div >
                <div>
                    <img className="h-[260px] w-[260px]" src="/pcd.png" alt="" />
                    <h3 className='text-xl hover:italic transition-all hover:font-bold'>Item Four</h3>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem consectetur
                        odio quasi autem numquam. Vero alias possimus obcaecati distinctio molestiae,
                        a totam, neque iste blanditiis veritatis, odio quibusdam. Iste, tenetur?
                    </p>
                    <a href="#" className="btn">
                        Learn More <i className="fas fa-chevron-right"></i>
                    </a>
                </div >
            </section>
        </>
    )
}

export default Cardsa
