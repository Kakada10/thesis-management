
<template>
    <body class="bodyContact">
    <!----body-->
    <section>
        <!---space-->
        <div class="empty contact-section" >
            <section class="contact">
                <div class="container-contact">
                    <div class="direct-contact-container">
                        <ul class="contact-list">
                            <li class="list-item">
                                <font-awesome-icon class="listIcon" :icon="['fas', 'location-dot']"/>
                                <span class="contact-text place">Phnom Penh, Cambodia</span>
                            </li>
                            <li class="list-item">
                                <font-awesome-icon class="listIcon" :icon="['fas', 'phone']"/>
                                <span class="contact-text phone">
                                    <a href="tel:1-212-555-5555" title="Give me a call">(+855) 012 828 278</a>
                                </span>
                            </li>
                            <li class="list-item">
                                <font-awesome-icon class="listIcon" :icon="['fas', 'envelope']"/>
                                <span class="contact-text gmail">
                                    <a href="mailto:#" title="Send me an email"> arts.sharing.itc@gmail.com</a>
                                </span>
                            </li>
                        </ul>
                        <hr />
                        <ul class="social-media-list">
                            <li>
                                <a class="contact-icon" href="https://web.facebook.com/itckh?_rdc=1&_rdr"><font-awesome-icon :icon="['fab', 'facebook']" /></a>
                            </li>
                            <li>
                                <a class="contact-icon" href="https://www.instagram.com/explore/tags/angkorwat/?hl=fr"><font-awesome-icon :icon="['fab', 'instagram']" /></a>
                            </li>
                            <li>
                                <a class="contact-icon" href="https://twitter.com/INSA_Rennes"><font-awesome-icon :icon="['fab', 'twitter']" /></a>
                            </li>
                        </ul>
                        <hr />
                        <div class="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>
                    </div>
                    <div class="contactForm" >
                        <form>
                            <h2>Send Message</h2>
                            <div class="inputBox" >
                                <input type="text" name="" required=true placeholder="Full Name"/>
                            </div>
                            <div class="inputBox">
                                <input type="text" name="" required=true placeholder="Email"/>
                            </div>
                            <div class="inputBox">
                                <textarea required=true placeholder="Type your Message..."></textarea>
                            </div>
                            <div class="inputBox">
                                <input type="submit" name="" value="Send" />
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    </section>
  </body>
</template>

<style scoped>
.bodyContact {
    background: #fff;
}

.listIcon {
    height: 25px;
}
/* Contact -start CSS*/
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}
.contact-section{
  position: relative;
}
.contact{
    position: absolute;
    top: 50%;
    left: 50%;
    transform:translate(-50%,-50%);
}
.contact .content{
    max-width: 800px;
    text-align: center;
}
.contact .content h2{
    font-size: 36px;
    font-weight: 500;
    color: #fff;
}
.contact .content p{
    font-size: 36px;
    font-weight: 500;
    color: #fff;
}
.container-contact{
    width: 70vw;
    height: 50vh;
    display: flex;
    justify-content: space-between;
    /* margin-top: 30px; */
}
.container-contact .contactInfo{
    width: 50%;
    display: flex;
    flex-direction: column;
}
.container .contactInfo .box{
    position: relative
    padding 20px 0;
    display: flex;
}
.container .contactInfo .box .icon{
    min-width: 60px;
    height: 60px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-size: 22px;
}
.container .contactInfo .box .text{
    display: flex;
    margin-left: 20px;
    font-size: 16px;
    color: #fff;
    flex-direction: column;
    font-weight: 300px;
}
.container .contactInfo .box .text h3{
    font-weight: 500;
    color: #00bcd4;
}
/* change color here */
.contactForm{
    margin-top: 300px;
    width: 60%;
    height: 90%;
    padding: 40px;
    background: rgb(51, 196, 216);
    border-radius: 0.9%;
}
input[type=submit]{
  border-radius: 3%;
}
.inputBox input{
  /* border-bottom: none; */
  padding: 0 10px;
}
.contactForm h2{
    font-size: 30px;
    color: #333;
    font-weight: 500;
}
.contactForm .inputBox{
    position: relative;
    width: 100%;
    margin-top: 10px
}
.contactForm .inputBox input,
.contactForm .inputBox textarea{
    width: 100%;
    padding: 5px 10px;
    font-size: 16px;
    margin: 10px 0;
    border: none;
    border-bottom: 2px solid #333;
    outline: none;
    resize: none;
}
textarea{
  height: 8vh;
}
.contactForm .inputBox input:focus ~ span, 
.contactForm .inputBox input:valid ~ span,
.contactForm .inputBox textarea:focus ~ span,
.contactForm .inputBox textarea:valid ~ span
{
    color: #e91e63;
    font-size: 12px;
    transform: translateY(-20px);
    padding: 5px 0;
}
.contactForm .inputBox input[type="submit"]
{
    width: 100px;
    background-color: #000000;
    color: #fff;
    border: none;
    cursor: pointer;
    padding: 10px;
    font-size: 18px;
}

.icon-social-media{
    color: black;
    font-size: 2rem;
    padding: 0.5rem
}
@media (max-width: 991px) {
    .contact{
        padding: 50px;
    }
    .container{
        flex-direction: column;
    }
}
  /* Begin Right Contact Page */
  .direct-contact-container {
      margin-top: 300px;
    max-width: 400px;
  }

  /* Location, Phone, Email Section */
  .contact-list {
    list-style-type: none;
    margin-left: -30px;
    padding-right: 20px;
  }

  .list-item {
    line-height: 4;
    color: black;
  }

  .contact-text {
    font: 300 18px "Lato", sans-serif;
    letter-spacing: 1.9px;
    color: black;
  }
  .place {
    margin-left: 62px;
  }
  .phone {
    margin-left: 56px;
  }

  .gmail {
    margin-left: 53px;
  }

  .contact-text a {
    color: black;
    text-decoration: none;
    transition-duration: 0.2s;
  }

  .contact-text a:hover {
    color: #fff;
    text-decoration: none;
  }

  /* Social Media Icons */
  .social-media-list {
    position: relative;
    font-size: 22px;
    text-align: center;
    width: 100%;
    margin: 0 auto;
    padding: 0;
  }

  .social-media-list li a {
    color: #fff;
  }

  .social-media-list li {
    position: relative;
    display: inline-block;
    height: 60px;
    width: 60px;
    margin: 10px 3px;
    line-height: 60px;
    border-radius: 50%;
    color: #fff;
    background-color: rgb(27, 27, 27);
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }

  .copyright {
    font: 200 14px "Oswald", sans-serif;
    color: #555;
    letter-spacing: 1px;
    text-align: center;
  }
</style>

