import './hero.css'
import { useState } from 'react'

export function Hero(){
    const [navActive,setNavActive] = useState(false)
  
    const toggleMobileNav = () => {
       setNavActive((prev) => !prev)
    }

    return (
        <section id="hero">
           { navActive? (<div id='navMobile' onClick={toggleMobileNav}>
                <header>
                    <h1>Sydney</h1>
                    <img src='./close.png'/>
                </header>
                <ul id='navMobileList'>
                            <li><a href='#contact'>contact</a></li>
                            <li><a href='#portfolio'>portfolio</a></li>
                            <li><a href='#testimonials'>testimonials</a></li>   
                            <li><a href='#about'>about</a></li>
                            <li><a href='#footer'>footer</a></li>
                </ul>
            </div>) :null }

            <nav id='navbar'>
                    <div id='navWrap'>
                        <ul id='navLeft'>
                            <li><a href='#contact'>contact</a></li>
                            <li><a href='#portfolio'>portfolio</a></li>
                            <li><a href='#testimonials'>testimonials</a></li>   
                            <li><a href='#about'>about</a></li>
                            <li><a href='#footer'>footer</a></li>
                        </ul>

                    <h1 id='navCenter'> Sydney </h1>

                    <div id='socialIcons'>
                        <div className='socialIcon'><img src='./facebook.png' /></div>
                        <div className='socialIcon'><img src='./instagram.png'/></div>
                        <div className='socialIcon'><img src='./twitter.png'/></div>
                    </div>

                    <img id='burger' src='./burger.png' onClick={toggleMobileNav}/>
                    </div>
            </nav>

            <div id='heroOther'>
                <h5>sydney cooper photography </h5>
                <div id='heroOtherBottom'>
                <p>i am based in newyork and i specialize in landscape, events, industrial, and wildlife photography  iyeieyieyb rheyirbruybyu hrbhiywnrwiybn </p>
                <div id='heroBtn'><span>get in touch</span><img src='./right.png'/></div>
                </div>
            </div>
        </section>
    )
}