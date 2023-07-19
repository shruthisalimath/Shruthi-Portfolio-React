//imports the images fro each project
import passwordGenerator from "../../assets/images/Password-generator.png";
import CareConnect from "../../assets/images/CareConnect.PNG";
import Weather_Dashboard from "../../assets/images/Screen_Shot_Weather_Dashboard.png";
import Tech_Blog from "../../assets/images/screen-short_MVC.png";
import LogoGenerator from "../../assets/images/Screen-Shot-LogoGenerator.png";
import WorkDayScheduler from "../../assets/images/Screen-Shot-Work-Day-Scheduler.png";
import codeTest from "../../assets/images/screenShot-codeTest.png";
import nationalPark from "../../assets/images/Screenshot-national-park.png";
import noteTaker from "../../assets/images/Screenshot-noteTaker.png";

const projectList = [
    {
        title: "passwordGenerator",
        url: "https://shruthisalimath.github.io/Secure-key-generator/",
        image: passwordGenerator,
        description: "Password generator using javascript",
        technologies: "HTML,CSS,JAVASCRIPT",
        GithubRepo: "https://github.com/shruthisalimath/Secure-key-generator"
    },
    {
        title: "CareConnect",
        url: "https://vast-beach-72570.herokuapp.com/",
        image: CareConnect,
        description: "Care Connect is a full stack web application that enables users to manage employee information within an organization.",
        technologies: "MySQL, Express.js, Node.js, Handlebars.js, CSS",
        GithubRepo: "https://https://github.com/pdangerfield/CareConnect.com/shruthisalimath/Secure-key-generator"
    },
    {
        title: "Weather_Dashboard",
        url: "https://shruthisalimath.github.io/Weather-Panel/",
        image: Weather_Dashboard,
        description: " weather dashboard application to get current weather conditions of city and 5 day forecast of that city.",
        technologies: "Javascript, JQuery, Bootstrap, HTML, CSS",
        GithubRepo: "https://github.com/shruthisalimath/Weather-Panel"
    },
    {
        title: "Tech_Blog",
        url: " https://techno-blogger-mvc.herokuapp.com/",
        image: Tech_Blog,
        description: "Tech_Blog creates a blog-style app where developers can create an account, edit their information, make or edit posts and comment on other users posts.",
        technologies: "Nodejs,Express,Sequelize,MySQL,",
        GithubRepo: "https://github.com/shruthisalimath/Techno-Blogger"
    },
    
    {
        title: "WorkDayScheduler",
        url: "https://shruthisalimath.github.io/Work-Day-Timetable/",
        image: WorkDayScheduler,
        description: "Simple calendar application that allows the user to save events for each hour of the day from 9AM to 5 PM.",
        technologies: "JQuery, Javascript, Moment.js, Bootstrap, HTML, CSS",
        GithubRepo: "https://github.com/shruthisalimath/Work-Day-Timetable"
    },
    {
        title: "codeTest",
        url: "https://shruthisalimath.github.io/Code-knowledge-test/",
        image: codeTest,
        description: "A timer-based quiz application that stores high scores of multiple users. Answering incorrectly results in penality of time.",
        technologies: "Javascript, Bootstrap, Browser LocalStorage, HTML, CSS",
        GithubRepo: "https://github.com/shruthisalimath/Code-knowledge-test"
    },
    {
        title: "nationalPark",
        url: " https://shruthisalimath.github.io/Team-Shrek/",
        image: nationalPark,
        description: "",
        technologies: "Html,Css,Bulma,Javascript,Jquery",
        GithubRepo: "https://github.com/shruthisalimath/Team-Shrek"
    },
    {
        title: "noteTaker",
        url: " https://note-register.herokuapp.com/",
        image: noteTaker,
        description: "This is a simple Note Taker application that allows users to add ,view saved notes and also delete the notes if the user don't need that note anymore.",
        technologies: "Express.js, Node.js, UUID, Javascript, HTML, CSS",
        GithubRepo: "https://github.com/shruthisalimath/Note-Register"
    },
    {
        title: "LogoGenerator",
        url: "https://shruthisalimath.github.io/Secure-key-generator/",
        image: LogoGenerator,
        description: "The application enables users to generate a logo file with the input of text(3 characters),text color,choice of shape(circle, triangle and square) and shape color",
        technologies: "Html,Css,Javascript,Node.js",
        GithubRepo: "https://github.com/shruthisalimath/Secure-key-generator"
    },
]

export default projectList;