import React, { useEffect, useState } from 'react';
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardLink
} from 'reactstrap';
import { Input } from '../Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import BlurbBook from '../Images/google_books_search.png'
import Workout from '../Images/workout_tracker.png'
import TeamProfileGenerator from '../Images/team_profile_generator.png'
import MyReactBlog from '../Images/my_react_blog.jpg'
import LoanShark from '../Images/loan_shark.png'
import EmployeeDirectory from '../Images/employee_directory.png'
import BudgetTracker from '../Images/budget_tracker.png'
import NoteTaker from '../Images/note_taker.jpg'
import EmployeeTracker from '../Images/employee_tracker.png'
import ECommerce from '../Images/e_commerce.png'
import ReadMe from '../Images/readme.png'
import TechBlog from '../Images/tech_blog.png'
import DogOnTheMove from '../Images/dog_on_the_move.png'
import BookFinder from '../Images/book_finder.png'
import APIQuiz from '../Images/api_quiz.png'
import WeatherDashboard from '../Images/weather_dashboard.png'
import WorkdayScheduler from '../Images/scheduler.png'
import PasswordGenerator from '../Images/password_generator.png'
function Cards() {
    const projects = [
        {
            title: 'Blurb Books',
            subtitle: '',
            image: BlurbBook,
            description: 'JavaScript, CSS, HTML, MERN, MongoDB, express.js, axios, react.js, node.js, Heroku, RESTful API, jsonwebtoken, bcrypt, if-env',
            githubLink: 'https://github.com/raseward14/Google_Books_Search',
            deployedLink: 'https://blurb-books.herokuapp.com/'
        },
        {
            title: 'My React Blog',
            subtitle: '',
            image: MyReactBlog,
            description: 'JavaScript, CSS, HTML, MERN, MongoDB, express.js, react.js, node.js, AWS, RESTful API',
            githubLink: 'https://github.com/raseward14/My_React_Blog',
            deployedLink: 'http://ec2-18-189-3-248.us-east-2.compute.amazonaws.com'
        },
        {
            title: 'Loan Shark',
            subtitle: '',
            image: LoanShark,
            description: 'JavaScript, CSS, HTML, MERN, React.js, Reactstrap, MongoDB, express.js, node.js, RESTful API, Heroku, victory, Mongoose.js',
            githubLink: 'https://github.com/raseward14/loan_shark',
            deployedLink: 'https://loaning-sharks.herokuapp.com/'
        },
        {
            title: 'Employee Directory',
            subtitle: '',
            image: EmployeeDirectory,
            description: 'JavaScript, CSS, HTML, node.js, React.js, axios, Random User API, GitHub pages',
            githubLink: 'https://github.com/raseward14/employee_directory2',
            deployedLink: 'https://raseward14.github.io/employee_directory2/'
        },
        {
            title: 'Budget Tracker',
            subtitle: '',
            image: BudgetTracker,
            description: 'JavaScript, CSS, Bootstrap, HTML, Webpack, PWA, Service worker, babel.js, node.js, compression, express.js, MongoDB, Mongoose.js, IndexedDB, RESTful API, Heroku',
            githubLink: 'https://reactstrap.github.io/?path=/docs/components-card--card',
            deployedLink: 'https://serene-thicket-18374.herokuapp.com/'
        },
        {
            title: 'Workout Tracker',
            subtitle: '',
            image: Workout,
            description: 'JavaScript, CSS, Bootstrap, HTML, MongoDB, Mongoose.js, express.js, node.js, RESTful API, Heroku',
            githubLink: 'https://github.com/raseward14/Workout_Tracker',
            deployedLink: 'https://damp-wildwood-72230.herokuapp.com/'
        },
        {
            title: 'Note Taker',
            subtitle: '',
            image: NoteTaker,
            description: 'JavaScript, CSS, Bootstrap, HTML, node.js, express.js, RESTful API, uuid npm, Heroku',
            githubLink: 'https://github.com/raseward14/Note_Taker',
            deployedLink: 'https://enigmatic-garden-40710.herokuapp.com/'
        },
        {
            title: 'Employee Tracker',
            subtitle: 'JavaScript',
            image: EmployeeTracker,
            description: 'JavaScript, MySQL, node.js, inquirer npm, chalk npm, figlet npm, command-line application, console-table-printer npm',
            githubLink: 'https://github.com/raseward14/Employee_Tracker',
            deployedLink: 'https://drive.google.com/file/d/1-Z7d5IIzcBIHGZ7wPe0pSHVjXTYoZc7j/view'
        },
        {
            title: 'E-Commerce',
            subtitle: '',
            image: ECommerce,
            description: 'JavaScript, command-line application, node.js, express.js, RESTful API, Sequelize, MySQL',
            githubLink: 'https://github.com/raseward14/E_Commerce',
            deployedLink: 'https://drive.google.com/file/d/1q1bYzoWYdOZ0YetXsI5ky9tCB3cfT3Os/view'
        },
        {
            title: 'README Generator',
            subtitle: '',
            image: ReadMe,
            description: 'JavaScript, command-line application, inquirer npm',
            githubLink: 'https://github.com/raseward14/README_Generator',
            deployedLink: 'https://drive.google.com/file/d/1i6kpVcWCndl1QFa8j1u-M8yVi3oyn36U/view'
        },
        {
            title: 'Tech Blog',
            subtitle: '',
            image: TechBlog,
            description: 'JavaScript, CSS, Bootstrap, HTML, RESTful API, MVC paradigm, express.js, node.js, sequelize, MySQL, handlebars.js, bcrypt npm, Heroku, express-session npm, Sequelize, MySQL, handlebars.js',
            githubLink: 'https://github.com/raseward14/Tech_Blog',
            deployedLink: 'https://mighty-taiga-53972.herokuapp.com/login'
        },
        {
            title: 'Dog on the Move',
            subtitle: '',
            image: DogOnTheMove,
            description: 'JavaScript, CSS, Bootstrap, HTML, node.js, express.js, MySQL, Sequelize, RESTful API, bcrypt npm, express-session npm, MVC paradigm, handlebars.js, Heroku',
            githubLink: 'https://github.com/raseward14/pet_services',
            deployedLink: 'https://radiant-basin-77736.herokuapp.com/'
        },
        {
            title: 'Team Profile Generator',
            subtitle: '',
            image: TeamProfileGenerator,
            description: 'JavaScript, CSS, Bootstrap, HTML, command-line application, Test Driven Development, jest & inquirer npm, node.js',
            githubLink: 'https://reactstrap.github.io/?path=/docs/components-card--card',
            deployedLink: 'https://reactstrap.github.io/?path=/docs/components-card--card'
        },
        {
            title: 'My Cheap Book Finder',
            subtitle: '',
            image: BookFinder,
            description: 'JavaScript, CSS, HTML, GoogleBooks API, Ebay API, Bulma, JQuery, OAuth, GitHub pages',
            githubLink: 'https://github.com/raseward14/My_Cheap_Book_Finder',
            deployedLink: 'https://raseward14.github.io/My_Cheap_Book_Finder/'
        },
        {
            title: 'Web API Quiz',
            subtitle: '',
            image: APIQuiz,
            description: 'JavaScript, CSS, Bootstrap, HTML, LocalStorage, GitHub pages',
            githubLink: 'https://github.com/raseward14/Web-API-Quiz',
            deployedLink: 'https://raseward14.github.io/Web-API-Quiz/'
        },
        {
            title: 'Weather Dashboard',
            subtitle: '',
            image: WeatherDashboard,
            description: 'JavaScript, CSS, Bootstrap, HTML, JQuery, Openweather API, LocalStorage, GitHub pages',
            githubLink: 'https://github.com/raseward14/Weather-Dashboard',
            deployedLink: 'https://raseward14.github.io/Weather-Dashboard/'
        },
        {
            title: 'Workday Scheduler',
            subtitle: '',
            image: WorkdayScheduler,
            description: 'JavaScript, CSS, HTML, moment.js, JQuery, GitHub pages',
            githubLink: 'https://github.com/raseward14/Work-Day-Scheduler',
            deployedLink: 'https://raseward14.github.io/Work-Day-Scheduler/'
        },
        {
            title: 'Password Generator',
            subtitle: '',
            image: PasswordGenerator,
            description: 'JavaScript, CSS, HTML, GitHub pages',
            githubLink: 'https://github.com/raseward14/Password-Generator',
            deployedLink: 'https://raseward14.github.io/Password-Generator/'
        },
    ]
    const [searchTerm, setSearchTerm] = useState('');
    const [resultsArray, setResultsArray] = useState(projects);
    
    useEffect(() => {
        // if search term exists
        if (searchTerm !== '') {
            // filter the projects
            const filteredResults = projects.filter((project) => {
                // descriptionArray is an array of project description strings to lowercase
                // hold the remaining, filtered results in a new variable, so we can update the state with this array
                let descriptionArray = project.description.toLowerCase().split(', ');
                // termsArray is an array of search term strings split by spaces to lowercase
                let termsArray = searchTerm.toLowerCase().split(' ');
                
                // .every() search term
                // .find() in each description of the descriptionArray
                // if the description .includes() the search term substring
                // if so, return true, setting the result variable to true
                const result = termsArray.every(term =>
                    descriptionArray.find(description => {
                        if (description.includes(term)) {
                            return true;
                        };
                    })
                );

                // if result is true, return this project to be included in the resulting filtered array, else return to break the loop
                if (result) {
                    return project;
                } else {
                    return;
                };
            });
            setResultsArray(filteredResults)
        } else {
            // if none of the search term substrings exist in the description arrays, set results array to all projects object above
            setResultsArray(projects);
        };
    }, [searchTerm])


    return (
        <>
            <div className='project-wrapper'>
                <span className='search-span'>Looking for something specific? Search for a language, technology, or skill that your team needs to filter the projects below.</span>
                <div className='input-container'>
                    <Input
                        placeholder="Search"
                        name="search"
                        onChange={(event) => {
                            setSearchTerm(event.target.value);
                        }}
                        className="search"
                    />
                    <FontAwesomeIcon className='i' icon={faMagnifyingGlass} />
                </div>
                {resultsArray.map((project, key) => {
                    return (
                        <div key={key}>
                            <Card className='card'>
                                <CardBody>
                                    <CardTitle tag="h5">
                                        {project.title}
                                    </CardTitle>
                                    <CardSubtitle
                                        className="mb-2 text-muted"
                                        tag="h6"
                                    >
                                        {project.subtitle}
                                    </CardSubtitle>
                                </CardBody>
                                <img
                                    alt="Card image cap"
                                    src={`${project.image}`}
                                    width='100%'
                                    height='auto'
                                />
                                <CardBody>
                                    <CardText>
                                        {project.description}
                                    </CardText>
                                    <CardLink href={`${project.deployedLink}`} target='_blank'>
                                        {project.title}
                                    </CardLink>
                                    <CardLink href={`${project.githubLink}`} target='_blank'>
                                        Github
                                    </CardLink>
                                </CardBody>
                            </Card>
                        </div>
                    )
                })}
            </div>
        </>
    );
};
export default Cards;