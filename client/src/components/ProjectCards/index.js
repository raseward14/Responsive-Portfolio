import React from 'react';
import { 
    Card, 
    CardBody, 
    CardTitle, 
    CardSubtitle, 
    CardText, 
    CardLink 
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import Workout from './workout_tracker.png'
import TeamProfileGenerator from './team_profile_generator.png'
import MyReactBlog from './my_react_blog.jpg'
import LoanShark from './loan_shark.png'
import EmployeeDirectory from './employee_directory.png'
import BudgetTracker from './budget_tracker.png'
import NoteTaker from './note_taker.jpg'
import EmployeeTracker from './employee_tracker.png'
import ECommerce from './e_commerce.png'
import ReadMe from './readme.png'
import TechBlog from './tech_blog.png'
import DogOnTheMove from './dog_on_the_move.png'
import BookFinder from './book_finder.png'
import APIQuiz from './api_quiz.png'
import WeatherDashboard from './weather_dashboard.png'
import WorkdayScheduler from './scheduler.png'
import PasswordGenerator from './password_generator.png'
function Cards() {
    const projects = [
        {
            title: 'My React Blog',
            subtitle: '',
            image: MyReactBlog,
            description: '',
            githubLink: 'https://github.com/raseward14/My_React_Blog',
            deployedLink: 'http://ec2-18-189-3-248.us-east-2.compute.amazonaws.com'
        },
        {
            title: 'Loan Shark',
            subtitle: '',
            image: LoanShark,
            description: '',
            githubLink: 'https://github.com/raseward14/loan_shark',
            deployedLink: 'https://loaning-sharks.herokuapp.com/'
        },
        {
            title: 'Employee Directory',
            subtitle: '',
            image: EmployeeDirectory,
            description: '',
            githubLink: 'https://github.com/raseward14/employee_directory2',
            deployedLink: 'https://raseward14.github.io/employee_directory2/'
        },
        {
            title: 'Budget Tracker',
            subtitle: '',
            image: BudgetTracker,
            description: '',
            githubLink: 'https://reactstrap.github.io/?path=/docs/components-card--card',
            deployedLink: 'https://reactstrap.github.io/?path=/docs/components-card--card'
        },
        {
            title: 'Workout Tracker',
            subtitle: '',
            image: Workout,
            description: '',
            githubLink: 'https://github.com/raseward14/Workout_Tracker',
            deployedLink: 'https://damp-wildwood-72230.herokuapp.com/'
        },
        {
            title: 'Note Taker',
            subtitle: '',
            image: NoteTaker,
            description: '',
            githubLink: 'https://github.com/raseward14/Note_Taker',
            deployedLink: 'https://enigmatic-garden-40710.herokuapp.com/'
        },
        {
            title: 'Employee Tracker',
            subtitle: '',
            image: EmployeeTracker,
            description: '',
            githubLink: 'https://github.com/raseward14/Employee_Tracker',
            deployedLink: 'https://drive.google.com/file/d/1-Z7d5IIzcBIHGZ7wPe0pSHVjXTYoZc7j/view'
        },
        {
            title: 'E-Commerce',
            subtitle: '',
            image: ECommerce,
            description: '',
            githubLink: 'https://github.com/raseward14/E_Commerce',
            deployedLink: 'https://drive.google.com/file/d/1q1bYzoWYdOZ0YetXsI5ky9tCB3cfT3Os/view'
        },
        {
            title: 'README Generator',
            subtitle: '',
            image: ReadMe,
            description: '',
            githubLink: 'https://github.com/raseward14/README_Generator',
            deployedLink: 'https://drive.google.com/file/d/1i6kpVcWCndl1QFa8j1u-M8yVi3oyn36U/view'
        },
        {
            title: 'Tech Blog',
            subtitle: '',
            image: TechBlog,
            description: '',
            githubLink: 'https://github.com/raseward14/Tech_Blog',
            deployedLink: 'https://mighty-taiga-53972.herokuapp.com/login'
        },
        {
            title: 'Dog on the Move',
            subtitle: '',
            image: DogOnTheMove,
            description: '',
            githubLink: 'https://github.com/raseward14/pet_services',
            deployedLink: 'https://radiant-basin-77736.herokuapp.com/'
        },
        {
            title: 'Team Profile Generator',
            subtitle: '',
            image: TeamProfileGenerator,
            description: '',
            githubLink: 'https://reactstrap.github.io/?path=/docs/components-card--card',
            deployedLink: 'https://reactstrap.github.io/?path=/docs/components-card--card'
        },
        {
            title: 'My Cheap Book Finder',
            subtitle: '',
            image: BookFinder,
            description: '',
            githubLink: 'https://github.com/raseward14/My_Cheap_Book_Finder',
            deployedLink: 'https://raseward14.github.io/My_Cheap_Book_Finder/'
        },
        {
            title: 'Web API Quiz',
            subtitle: '',
            image: APIQuiz,
            description: '',
            githubLink: 'https://github.com/raseward14/Web-API-Quiz',
            deployedLink: 'https://raseward14.github.io/Web-API-Quiz/'
        },
        {
            title: 'Weather Dashboard',
            subtitle: '',
            image: WeatherDashboard,
            description: '',
            githubLink: 'https://github.com/raseward14/Weather-Dashboard',
            deployedLink: 'https://raseward14.github.io/Weather-Dashboard/'
        },
        {
            title: 'Workday Scheduler',
            subtitle: '',
            image: WorkdayScheduler,
            description: '',
            githubLink: 'https://github.com/raseward14/Work-Day-Scheduler',
            deployedLink: 'https://raseward14.github.io/Work-Day-Scheduler/'
        },
        {
            title: 'Password Generator',
            subtitle: '',
            image: PasswordGenerator,
            description: '',
            githubLink: 'https://github.com/raseward14/Password-Generator',
            deployedLink: 'https://raseward14.github.io/Password-Generator/'
        },
    ]
    return (
        <>
            <div className='wrapper'>
                {projects.map((project, key) => {
                    console.log(project.image)
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
                                    width="100%"
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