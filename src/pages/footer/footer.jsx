import './footer.css'

export function Footer(){
    return (
        <section id='footer'>
         
           <h6 id='footerName'>ELLIOT BENSON</h6>
            
            <div id="footerBot">
                <div className='footerItems'>
                    <h2 className='footerHeads'>lets work together </h2>
                </div>

                <div className='footerItems'>
                    <h2 className='footerHeads'>sitemap </h2>
                    <ul>
                        <li><a>home</a></li>
                        <li><a>about</a></li>
                        <li><a>article</a></li>
                        <li><a>portfolio</a></li>
                        <li><a>testimonials</a></li>
                        <li><a>contact</a></li>
                        <li><a>footer</a></li>
                    </ul>
                </div>

                <div className='footerItems'>
                    <h2 className='footerHeads'>socials</h2>
                    <ul>
                    <li><a>facebook</a></li>
                    <li><a>twitter</a></li>
                    <li><a>instagram</a></li>
                    <li><a>dribble</a></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}