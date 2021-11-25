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
function Cards() {
    const projects = [
        {
            title: 'My React Blog',
            subtitle: '',
            image: '',
            description: '',
            githubLink: 'https://reactstrap.github.io/?path=/docs/components-card--card',
            deployedLink: 'https://reactstrap.github.io/?path=/docs/components-card--card'
        },
        {
            title: 'Loan Shark',
            subtitle: '',
            image: '',
            description: '',
            githubLink: 'https://reactstrap.github.io/?path=/docs/components-card--card',
            deployedLink: 'https://reactstrap.github.io/?path=/docs/components-card--card'
        },
        {
            title: 'Employee Directory',
            subtitle: '',
            image: '',
            description: '',
            githubLink: 'https://reactstrap.github.io/?path=/docs/components-card--card',
            deployedLink: 'https://reactstrap.github.io/?path=/docs/components-card--card'
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
            image: '',
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
            image: '',
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
                    return (
                        <div>
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
                                    <CardLink href={`${project.deployedLink}`}>
                                        Deployed App
                                    </CardLink>
                                    <CardLink href={`${project.githubLink}`}>
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