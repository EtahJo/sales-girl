import React from 'react';
import './footer.css'

function Footer() {
    return (
        <div className="footer">
          
            {/* footer*/} 
         <div className="footer__brandLogos">
            <img src="https://z-p3-scontent.fnsi2-1.fna.fbcdn.net/v/t1.18169-9/24293934_808941032618416_183669131269897271_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHqCpp4lnOUYBFpiLknSElzl4lcdYyORFyXiVx1jI5EXNtqUzrY4zAVSfnB5foyeZM&_nc_ohc=q9zA0soo3wgAX8l8q2Q&tn=PNZjTzaAGYFSSLzo&_nc_ht=z-p3-scontent.fnsi2-1.fna&oh=4ed6b96a603e52d484f92a65b306654d&oe=61CAAC99" alt="" />
            <img src="https://z-p3-scontent.fnsi2-1.fna.fbcdn.net/v/t1.6435-9/192734746_2292899460840760_4884663970283344079_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGfJyEczwTJT5sftqLP-A5Ybf5NHgrS4bxt_k0eCtLhvGlgIqG_eVICqF_kAOHddCY&_nc_ohc=tB6HelnmSKoAX-aDsvK&_nc_ht=z-p3-scontent.fnsi2-1.fna&oh=39570ce851477b01090d671acfb4dcaa&oe=61CA8559" alt="" />
         </div>
         <div className="footer__support">
            <h3>Support</h3>
            <a href="/">Help</a>
            <a href="/">Community</a>
            <a href="/">Advisory</a>
            <a href="/">Status</a>
            
         </div>
         <div className="footer__company">
            <h3>Company</h3>
            <a href="/">About</a>
            <a href="/">Blog</a>
            <a href="/">Press</a>

         </div>
         <div className="footer__terms">
            <h3>Terms & Policies</h3>
            <a href="/">Policies</a>
            <a href="/">Terms of Use</a>
            <a href="/">Code of Conduct</a>
            <a href="/">Privacy</a>

         </div>


        

        </div>
    )
}

export default Footer
