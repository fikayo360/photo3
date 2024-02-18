import './portfolio.css'
import gsap from "gsap";
import { useGSAP } from "@gsap/react"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from 'react';

export function Portfolio(){
    const isMobile = window.innerWidth <= 1024;
    gsap.registerPlugin(ScrollTrigger);

       if(isMobile){
        useGSAP(() => {
            gsap.to(".images", { y:15,ease: "power1.in",stagger:0.1,scrollTrigger: {
                trigger: "#portfolio",
                
              }});
          })
       }else{
        useGSAP(() => {
            gsap.to(".images", { y:40,ease: "power1.in",delay:0.1,stagger:0.2,scrollTrigger: {
                trigger: "#portfolio",
                
              }});
          })
       }

    
    return (
        <section id="portfolio">
            <h2>Selected projects</h2>
           
            <div id='' className='portfolioCont'>
                <h2>portrait</h2>
                <div className='imgCont'>
                <div className='images'>
                    <img src='https://images.squarespace-cdn.com/content/v1/5607a923e4b02ca27d321d51/1601004110095-9LHJYXPGVYT4SG44M0D4/Miwa-200904-98_websize.jpg'/>
                </div>
                <div className='images'>
                    <img src='https://expertphotography.b-cdn.net/wp-content/uploads/2019/04/female-face-girl-with-wind-in-hair.jpg'/>
                </div>
                <div className='images'>
                    <img src='https://images.squarespace-cdn.com/content/v1/56dfd5cc9f7266ed7f04b64d/1585743025040-GY3HNPD08I794TTR7O1M/image-asset.jpeg'/>
                </div>
                </div>
            </div>
            

            <div className='portfolioCont'>
            <h2>weddings</h2>
            <div className='imgCont'>
            <div className='images'>
                    <img src='https://assets.vogue.in/photos/6360ee4b74016d3adc45f105/1:1/w_4534,h_4534,c_limit/JR.WP-244.jpg'/>
                </div>
                <div className='images'>
                    <img src='https://www.marthastewart.com/thmb/WeKJPpyaFSFTwDk7nFb4zSp4DLs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/dmeca-anthony-wedding-couple-0422-ccc599a983e74a94acae2a2e4d8cef58.jpg'/>
                </div>
                <div className='images'>
                    <img src='https://www.brides.com/thmb/wH0DUYB1Y7WlvfD5B_dZww-Jsds=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/wedding-planning-ultimate-guide-facebook-Janet-Lin-Photography-80bcc720ca3b4129b68bf38826c9fdf8.jpg'/>
                </div>
            </div>
            </div>

            <div className='portfolioCont'>
            <h2>wildlife</h2>
            <div className='imgCont'>
            <div className='images'>
                    <img src='https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?cs=srgb&dl=pexels-pixabay-45853.jpg&fm=jpg'/>
                </div>
                <div className='images'>
                    <img src='https://www.openaccessgovernment.org/wp-content/uploads/2019/04/dreamstime_xxl_110648840.jpg'/>
                </div>
                <div className='images'>
                    <img src='https://static.toiimg.com/thumb/msid-89967601,width-748,height-499,resizemode=4,imgsize-45994/.jpg'/>
                </div>
            </div>
            </div>

            <div className='portfolioCont'>
            <h2>landscapes </h2>
            <div className='imgCont'>
            <div className='images'>
                    <img src='https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/blogs/18725/images/mM87l2ZsQRSawMLLRlFF_FallLandscape7-.jpg'/>
                </div>
                <div className='images'>
                    <img src='https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg'/>
                </div>
                <div className='images'>
                    <img src='https://cff2.earth.com/uploads/2022/11/08110007/Mountain-landscapes2-scaled.jpg'/>
                </div>
            </div>
            </div>

            <div className='portfolioCont'>
            <h2>modelling</h2>
            <div className='imgCont'>
            <div className='images'>
                    <img src='https://hips.hearstapps.com/hmg-prod/images/naomi-campbell-walks-the-runway-during-the-kenneth-ize-show-news-photo-1594416814.jpg'/>
                </div>
                <div className='images'>
                    <img src='https://i.pinimg.com/736x/1c/8c/21/1c8c2109e066c7c8c3227444bc463112.jpg'/>
                </div>
                <div className='images'>
                    <img src='https://mediaslide-europe.storage.googleapis.com/immmodels/pictures/1937/7631/profile-1697551002-8f65e75bb7b88061526d0aaa22efa765.jpg'/>
                </div>
            </div>
            </div>
        </section>
    )
}