import './hero.css'

export function Hero(){
    return (
        <section id="hero">
            <nav id='navbar'>
                    <div id='navWrap'>
                        <ul id='navLeft'>
                            <li><a>contact</a></li>
                            <li><a>portfolio</a></li>
                            <li><a>article</a></li>   
                            <li><a>about</a></li>
                        </ul>

                    <h1 id='navCenter'> Sydney </h1>

                    <div id='socialIcons'>
                        <div className='socialIcon'><img src='./facebook.png' /></div>
                        <div className='socialIcon'><img src='./instagram.png'/></div>
                        <div className='socialIcon'><img src='./twitter.png'/></div>
                    </div>
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