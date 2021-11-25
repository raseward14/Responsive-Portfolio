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
            image: '',
            description: '',
            githubLink: 'https://reactstrap.github.io/?path=/docs/components-card--card',
            deployedLink: 'https://reactstrap.github.io/?path=/docs/components-card--card'
        },
        {
            title: 'Workout Tracker',
            subtitle: '',
            image: Workout,
            description: '',
            githubLink: 'https://reactstrap.github.io/?path=/docs/components-card--card',
            deployedLink: 'https://reactstrap.github.io/?path=/docs/components-card--card'
        },
        {
            title: 'Note Taker',
            subtitle: '',
            image: '',
            description: '',
            githubLink: 'https://reactstrap.github.io/?path=/docs/components-card--card',
            deployedLink: 'https://reactstrap.github.io/?path=/docs/components-card--card'
        },
        {
            title: 'Employee Tracker',
            subtitle: '',
            image: '',
            description: '',
            githubLink: 'https://reactstrap.github.io/?path=/docs/components-card--card',
            deployedLink: 'https://reactstrap.github.io/?path=/docs/components-card--card'
        },
        {
            title: 'e-Commerce',
            subtitle: '',
            image: '',
            description: '',
            githubLink: 'https://reactstrap.github.io/?path=/docs/components-card--card',
            deployedLink: 'https://reactstrap.github.io/?path=/docs/components-card--card'
        },
        {
            title: 'README Generator',
            subtitle: '',
            image: '',
            description: '',
            githubLink: 'https://reactstrap.github.io/?path=/docs/components-card--card',
            deployedLink: 'https://reactstrap.github.io/?path=/docs/components-card--card'
        },
        {
            title: 'Tech Blog',
            subtitle: '',
            image: '',
            description: '',
            githubLink: 'https://reactstrap.github.io/?path=/docs/components-card--card',
            deployedLink: 'https://reactstrap.github.io/?path=/docs/components-card--card'
        },
        {
            title: 'Pet Services',
            subtitle: '',
            image: '',
            description: '',
            githubLink: 'https://reactstrap.github.io/?path=/docs/components-card--card',
            deployedLink: 'https://reactstrap.github.io/?path=/docs/components-card--card'
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
            image: '',
            description: '',
            githubLink: 'https://reactstrap.github.io/?path=/docs/components-card--card',
            deployedLink: 'https://reactstrap.github.io/?path=/docs/components-card--card'
        },
        {
            title: 'Web API Quiz',
            subtitle: '',
            image: '',
            description: '',
            githubLink: 'https://reactstrap.github.io/?path=/docs/components-card--card',
            deployedLink: 'https://reactstrap.github.io/?path=/docs/components-card--card'
        },
        {
            title: 'Weather Dashboard',
            subtitle: '',
            image: '',
            description: '',
            githubLink: 'https://reactstrap.github.io/?path=/docs/components-card--card',
            deployedLink: 'https://reactstrap.github.io/?path=/docs/components-card--card'
        },
        {
            title: 'Workday Scheduler',
            subtitle: '',
            image: '',
            description: '',
            githubLink: 'https://reactstrap.github.io/?path=/docs/components-card--card',
            deployedLink: 'https://reactstrap.github.io/?path=/docs/components-card--card'
        },
        {
            title: 'Password Generator',
            subtitle: '',
            image: '',
            description: '',
            githubLink: 'https://reactstrap.github.io/?path=/docs/components-card--card',
            deployedLink: 'https://reactstrap.github.io/?path=/docs/components-card--card'
        },
    ]
    return (
        <>
            <div className='wrapper'>
                {projects.map((project, key) => {
                    console.log(project.image)
                    return (
                        <div key={key}>
                            <Card>
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