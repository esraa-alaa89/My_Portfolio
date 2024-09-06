import React from 'react'
import Title from '../layouts/Title'
import { OnlineExaminationSystem, Exclusive, Yummy, movies, fakestore, LoginSystem, calculator, InteriorDesign, uptrend, } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="Check these out on my github"
          des="My Projects"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Online Examination System"
          des="(Graduation project), this system is a technology-driven way to simplify examination activities like defining exam patterns with question banks, defining exam timers, and conducting exams using a computer or mobile devices in a paperless manner through two dashboards for each doctor andstudents."
          tools="React, Nodejs, express, mongo-DB, rest APIs."
          src={OnlineExaminationSystem}
          githubLink="https://github.com/esraa-alaa89/Online-Examination-System.git"
          websiteLink="https://drive.google.com/file/d/1MXZyxgCIoSbQikXDc1TS939ACgmRTzZ/view?usp=sharing"

        />
        <ProjectsCard
          title="Exclusive"
          des="E-commerce app with authentication status that display products from dummy-json DB according to date or category with additional features like cart, wishlist, payment,..."
          tools="vite, authentication, routing, restfull api, slick-slider, localStorage, tailwind "
          src={Exclusive}
          githubLink="https://github.com/esraa-alaa89/E-commerce-React_App.git"
          websiteLink="https://exclusive-ecommerce-site.netlify.app/#"
        />
        <ProjectsCard
          title="Movies"
          des="App with authentication status that display movies from movieDB according to some categories with features like routing, profile, movieDetails,..."
          tools="React-js, authentication, routing."
          src={movies}
          githubLink="https://github.com/esraa-alaa89/Movies-React-Js.git"
          websiteLink="https://esraa-alaa89.github.io/Movies-React-Js/"
        />
        <ProjectsCard
          title="Fake store"
          des="Online store to display products from fake-store DB "
          tools="React-js, routing, cart,.."
          src={fakestore}
          githubLink="https://github.com/esraa-alaa89/OnlineStore-ReactJs.git"
          websiteLink="https://esraa-alaa89.github.io/OnlineStore-ReactJs/"
        />
        <ProjectsCard
          title="Up-trend"
          des="Online shopping project with features like user-cart, product details, .."
          tools="Java script"
          src={uptrend}
          githubLink="https://github.com/esraa-alaa89/Shopping.git"
          websiteLink="https://esraa-alaa89.github.io/Shopping/"
        />
        <ProjectsCard
          title="Yummy"
          des="Display meals dependent on its category or area and display its info by clicking on it, mealsDB is used."
          tools="Html, Css, Js, restfull api, search-feature."
          src={Yummy}
          githubLink="https://github.com/esraa-alaa89/yummy.git"
          websiteLink="https://esraa-alaa89.github.io/Yummy/"
        />
        <ProjectsCard
          title="Login System"
          des="A basic user authentication page (register & login) that allows users to authenticate by entering their credentials."
          tools="HTML, CSS, JavaScript."
          src={LoginSystem}
          githubLink="https://github.com/esraa-alaa89/Smart-Login.git"
          websiteLink="https://esraa-alaa89.github.io/Smart-Login/"
        />
        <ProjectsCard
          title="Design Interior"
          des="This project showcases an interior design concept that focuses on presenting a clean and visually appealing layout to highlight the aesthetics of interior spaces."
          tools="HTML, CSS"
          src={InteriorDesign}
          githubLink="https://github.com/esraa-alaa89/Design-Interior.git"
          websiteLink="https://esraa-alaa89.github.io/Design-Interior/"
        />
        <ProjectsCard
          title="Calculator"
          des="Simple calculator project provides basic arithmetic operations including addition, subtraction, multiplication, and division."
          tools="Html, css, Java script."
          src={calculator}
          githubLink="https://github.com/esraa-alaa89/Calculator.git"
          websiteLink=" https://esraa-alaa89.github.io/Calculator/"
        />
      </div>
    </section>
  );
}

export default Projects