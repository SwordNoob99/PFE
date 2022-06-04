


import { useEffect } from "react";
import "./homePage.css";
import axios from "axios";
import { useState } from "react";

function HomePage() {

  const [url , setUrl] = useState("");


  useEffect (() => {


    axios.get(`http://127.0.0.1:8000/api/v1/handle-payment` ).then ( result => {

          console.log(result.data)
          setUrl(result.data)
        
          
                      
        }
        ).catch(error => {
          console.log(error)
        } )


  } , [])
    return (  


<div>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>Architex </title>
        <meta content name="description" />
        <meta content name="keywords" />
        {/* Favicons */}
        <link href="assets/img/favicon.png" rel="icon" />
        <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon" />
        {/* Google Fonts */}
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Roboto:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet" />
        {/* Vendor CSS Files */}
        <link href="assets/vendor/aos/aos.css" rel="stylesheet" />
        <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
        <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet" />
        <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
        <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />
        {/* Template Main CSS File */}
     
        {/* =======================================================
  * Template Name: BizLand - v3.7.0
  * Template URL: https://bootstrapmade.com/bizland-bootstrap-business-template/
  * Author: BootstrapMade.com
  * License: https://bootstrapmade.com/license/
  ======================================================== */}
        {/* ======= Top Bar ======= */}
        <section id="topbar" className="d-flex align-items-center">
          <div className="container d-flex justify-content-center justify-content-md-between">
            <div className="contact-info d-flex align-items-center">
              <i className="bi bi-envelope d-flex align-items-center"><a href="Architex@gmail.com">Architex@gmail.com</a></i>
              <i className="bi bi-phone d-flex align-items-center ms-4"><span>+212 621089308</span></i>
            </div>
            <div className="social-links d-none d-md-flex align-items-center">
              <a href="#" className="twitter"><i className="bi bi-twitter" /></a>
              <a href="#" className="facebook"><i className="bi bi-facebook" /></a>
              <a href="#" className="instagram"><i className="bi bi-instagram" /></a>
              <a href="#" className="linkedin"><i className="bi bi-linkedin" /></a>
            </div>
          </div>
        </section>
        {/* ======= Header ======= */}
        <header id="header" className="d-flex align-items-center">
          <div className="container d-flex align-items-center justify-content-between">
            <h1 className="logo"><a href="index.html">Architex<span>.</span></a></h1>
            {/* Uncomment below if you prefer to use an image logo */}
            {/* <a href="index.html" class="logo"><img src="assets/img/logo.png" alt=""></a>*/}
            <nav id="navbar" className="navbar">
              <ul>
                <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
                <li><a className="nav-link scrollto" href="#about">About</a></li>
                <li><a className="nav-link scrollto" href="#services">Services</a></li>
                <li><a className="nav-link scrollto " href="#portfolio">Portfolio</a></li>
                <li><a className="nav-link scrollto" href="#team">Team</a></li>
                <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
              </ul>
              <i className="bi bi-list mobile-nav-toggle" />
            </nav>{/* .navbar */}
          </div>
        </header>{/* End Header */}
        {/* ======= Hero Section ======= */}
        <section id="hero" className="d-flex align-items-center">
          <div className="container" data-aos="zoom-out" data-aos-delay={100}>
            <h1>Bienvenue à <span>Architex</span></h1>
            <h2>Un chantier parfaitement construit dans toute sa simplicité.</h2>
            <div className="d-flex">
              <a href="#about" className="btn-get-started scrollto">Get Started</a>
              <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="glightbox btn-watch-video"><i className="bi bi-play-circle" /><span>Watch Video</span></a>
              <a style={{ marginLeft: "30px"}} href="/login" className="btn-get-started scrollto">Demo</a>
              <a style={{ marginLeft: "10px"}} href={url} className="btn-get-started scrollto">Acheter avec paypal</a>
            </div>
          </div>
        </section>{/* End Hero */}
        <main id="main">
          {/* ======= Featured Services Section ======= */}
          {/* End Featured Services Section */}
          {/* ======= About Section ======= */}
          <section id="about" className="about section-bg">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h3>Vos projets toujours à portée de main grâce à notre application de suivi de chantier </h3>
              </div>
              <div className="row">
                <div className="col-lg-6" data-aos="fade-right" data-aos-delay={100}>
                  <img src="assets/img/about.jpg" className="img-fluid" alt="" />
                </div>
                <div className="col-lg-6 pt-4 pt-lg-0 content d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay={100}>
                  <ul>
                    <li>
                      <i className="bi bi-truck-flatbed" />
                      <div>
                        <h5>SUR LE TERRAIN </h5>
                        <p>Assistant interactif de tous vos déplacements sur le terrain l’application de suivi de chantier Architex vous suit et vous fait gagner du temps grâce à la gestion des réserves, des prises de photos, la localisation sur plan...</p>
                      </div>
                    </li>
                    <li>
                      <i className="bi bi-laptop" />
                      <div>
                        <h5>AU BUREAU</h5>
                        <p>De votre bureau avec votre clavier d’ordinateur, connectez-vous au cloud de l’application afin d’obtenir le suivi de votre chantier sur Archipad Cloud. Complétez aisément vos prises de notes, gérez vos projets, vos lots, vos collaborateurs, vos réunions, partagez votre travail</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>{/* End About Section */}
          {/* ======= Skills Section ======= */}
          {/* ======= Counts Section ======= */}
          {/* End Counts Section */}
          {/* ======= Clients Section ======= */}
          {/* End Clients Section */}
          {/* ======= Services Section ======= */}
          <section id="services" className="services">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h3>Une application de suivi de chantier pour tous les métiers de la construction </h3>
              </div>
              <div className="row">
                <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay={100}>
                  <div className="icon-box">
                    <div className="icon"><i className="bi bi-building" /></div>
                    <h4><a href>ENTREPRISES</a></h4>
                    <p>Recevoir une information précise directement sur votre téléphone des réserves qui vous ont été assignées.
                      Visualisez et validez sur mobile les réserves à traiter sur l’application suivi de chantier. Simplifiez-vous la vie et évitez les déplacements inutiles.</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay={200}>
                  <div className="icon-box">
                    <div className="icon"><i className="bx bx-file" /></div>
                    <h4><a href>MAÎTRISE D’ŒUVRE</a></h4>
                    <p>Gagner du temps en concevant beaucoup plus rapidement un compte-rendu de visite de chantier grâce à notre application suivi de chantier.
                      Faites tout directement sur le chantier et suivez facilement l’avancement de la construction sur un tableau de bord.</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay={300}>
                  <div className="icon-box">
                    <div className="icon"><i className="bi bi-house-door" /></div>
                    <h4><a href>PROMOTEURS IMMOBILIERS</a></h4>
                    <p>Réceptionner l’ouvrage devient simple et plus rapide. Vous allez pouvoir suivre le bon déroulement de la réalisation de l’ouvrage.
                      Une fois le chantier terminé, vous procédez facilement à la réception de l’ouvrage et complétez en temps réel le procès-verbal de livraison en direct de notre application de suivi de chantier.</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay={100}>
                  <div className="icon-box">
                    <div className="icon"><i className="bi bi-graph-down" /></div>
                    <h4><a href>MAÎTRISE D'OUVRAGE</a></h4>
                    <p>Adopter l’application suivi de chantier Archipad dès le commencement d’un projet permettra l’identification d’éventuels problèmes.
                      Il vous sera possible de les éviter en réduisant les réserves et de livrer plus vite l’ouvrage avec un rapport de livraison détaillé.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>{/* End Services Section */}
          {/* ======= Testimonials Section ======= */}
          {/* End Testimonials Section */}
          {/* ======= Portfolio Section ======= */}
          {/* End Portfolio Section */}
          {/* ======= Team Section ======= */}
          {/* End Team Section */}
          {/* ======= Pricing Section ======= */}
          {/* End Pricing Section */}
          {/* ======= Frequently Asked Questions Section ======= */}
          {/* End Frequently Asked Questions Section */}
          {/* ======= Contact Section ======= */}
          <section id="contact" className="contact">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>Contact</h2>
                <h3><span>Contact Us</span></h3>
                <p>Une question, un projet… Nous répondons à toutes vos questions.</p>
              </div>
              <div className="row" data-aos="fade-up" data-aos-delay={100}>
                <div className="col-lg-6">
                  <div className="info-box mb-4">
                    <i className="bx bx-map" />
                    <h3>Notre Adresse</h3>
                    <p>Boulvard Bourgogne, Casabanca, 119, Maroc </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="info-box  mb-4">
                    <i className="bx bx-envelope" />
                    <h3>Envoyez-nous un email</h3>
                    <p>Arcchitex@gmail.com</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="info-box  mb-4">
                    <i className="bx bx-phone-call" />
                    <h3>Appelez-nous</h3>
                    <p>+212 621089308</p>
                  </div>
                </div>
              </div>
              <div className="row" data-aos="fade-up" data-aos-delay={100}>
                <div className="col-lg-6 ">
                  <iframe className="mb-4 mb-lg-0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d349.3443908720027!2d-7.627585824305601!3d33.59122124940825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d291618a6b9b%3A0xa0c8daa1ab677499!2s8-10%20Rue%20Moussa%20Ben%20Noussair%2C%20Casablanca%2020250!5e0!3m2!1sen!2sma!4v1654306168566!5m2!1sen!2sma" frameBorder={0} style={{border: 0, width: '100%', height: '384px'}} allowFullScreen />
                </div>
                <div className="col-lg-6">
                  <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                    <div className="row">
                      <div className="col form-group">
                        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                      </div>
                      <div className="col form-group">
                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                      </div>
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                    </div>
                    <div className="form-group">
                      <textarea className="form-control" name="message" rows={5} placeholder="Message" required defaultValue={""} />
                    </div>
                    <div className="my-3">
                      <div className="loading">Chargement</div>
                      <div className="error-message" />
                      <div className="sent-message">Votre message a été envoyé. Merci!</div>
                    </div>
                    <div className="text-center"><button type="submit">Envoyer le message</button></div>
                  </form>
                </div>
              </div>
            </div>
          </section>{/* End Contact Section */}
        </main>{/* End #main */}
        {/* ======= Footer ======= */}
        <footer id="footer">
          <div className="footer-newsletter">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-6">
                  <h4>Rejoignez notre newsletter</h4>
                  <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                  <form action method="post">
                    <input type="email" name="email" /><input type="submit" defaultValue="Subscribe" />
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6 footer-contact">
                  <h3>Architex<span>.</span></h3>
                  <p>
                    Boulvard Bourgogne <br />
                    Casablanca, N 119<br />
                    Maroc <br /><br />
                    <strong>Phone:</strong> +212 621089308<br />
                    <strong>Email:</strong> infoArchitex@gmail.com<br />
                  </p>
                </div>
                <div className="col-lg-3 col-md-6 footer-links">
                  <h4>Liens utiles</h4>
                  <ul>
                    <li><i className="bx bx-chevron-right" /> <a href="#">Home</a></li>
                    <li><i className="bx bx-chevron-right" /> <a href="#">À propos de nous</a></li>
                    <li><i className="bx bx-chevron-right" /> <a href="#">Services</a></li>
                    <li><i className="bx bx-chevron-right" /> <a href="#">Conditions d'utilisation</a></li>
                    <li><i className="bx bx-chevron-right" /> <a href="#">Politique de confidentialité</a></li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-6 footer-links">
                  <h4>Nos services</h4>
                  <ul>
                    <li><i className="bx bx-chevron-right" /> <a href="#"> Maître d’Ouvrage</a></li>
                    <li><i className="bx bx-chevron-right" /> <a href="#">Maître d’œuvre</a></li>
                    <li><i className="bx bx-chevron-right" /> <a href="#"> Promoteur Immobilier</a></li>
                    <li><i className="bx bx-chevron-right" /> <a href="#">Entreprises Générales</a></li>
                    <li><i className="bx bx-chevron-right" /> <a href="#">Entreprises</a></li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-6 footer-links">
                  <h4>Nos réseaux sociaux</h4>
                  <div className="social-links mt-3">
                    <a href="#" className="twitter"><i className="bx bxl-twitter" /></a>
                    <a href="#" className="facebook"><i className="bx bxl-facebook" /></a>
                    <a href="#" className="instagram"><i className="bx bxl-instagram" /></a>
                    <a href="#" className="google-plus"><i className="bx bxl-skype" /></a>
                    <a href="#" className="linkedin"><i className="bx bxl-linkedin" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container py-4">
            <div className="copyright">
              © Copyright <strong><span>Architex</span></strong>. Tous les droits sont réservés
            </div>
          </div>
        </footer>{/* End Footer */}
        <div id="preloader" />
        <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>
        {/* Vendor JS Files */}
        {/* Template Main JS File */}
      </div>



    );
}

export default HomePage;