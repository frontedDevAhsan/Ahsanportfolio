import React, { useState } from 'react';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import sectionthree from '../assets/img/sectionthree.png';
import Projects from '../assets/img/Projects.png';
import top from '../assets/img/top.png';
import './PortfolioProjects.css';
import find from '../assets/img/find.jpg'
import reown from '../assets/img/reown.png'
import repair from '../assets/img/repair.jpg'
import sam from '../assets/img/sam.png'

const PortfolioProjects = () => {
  const [currentView, setCurrentView] = useState('main');
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
  {
      id: 'crustim',
      name: 'Crustim',
      image: '',
      description: 'Crustim is a modern workflow automation and consulting company that helps businesses automate, optimize, and scale their operations.Their solutions focus on simplifying complex processes using tools like monday.com, Make.com, and custom API integrations.',
      website: 'https://crustim.co/',
      technologies: ['HTML', 'JAVASCRIPT', 'BOOTSTRAP', 'CSS','JSX'],
      highlights: [
        'End-to-end business workflow consultation',
        'Visual workflow mapping via Lucidchart / Miro',
        'API integrations through Make.com, Zapier, or custom dev',
        'Team trainings and onboarding within monday.com',
        'Focus on automation, clarity, and long-term scalability'
      ]
    },
    {
      id: 'sam',
      name: 'SAM',
      image:`${sam}` ,
      description: 'Smart Analytics Manager - A comprehensive data visualization and analytics platform. Built to handle large datasets with interactive charts, custom dashboards, and automated reporting features. Perfect for businesses looking to make data-driven decisions.',
      website: 'https://sameventsa.com/',
      technologies: ['HTML', 'JAVASCRIPT', 'BOOTSTRAP', 'CSS'],
      highlights: [
        'Interactive data visualizations',
        'Custom dashboard builder',
        'Automated report generation',
        'Advanced filtering and search'
      ]
    },
    {
      id: 'reown',
      name: 'Reown',
      image:`${reown}`,
      description: 'A revolutionary property management and real estate platform. Connects property owners with tenants through an intuitive interface. Features include virtual tours, automated lease management, and integrated payment processing.',
      website: 'https://reownlogics.com/',
      technologies: ['HTML', 'JAVASCRIPT', 'BOOTSTRAP', 'CSS'],
      highlights: [
        'Virtual property tours',
        'Automated lease management',
        'Integrated payment system',
        'Mobile-first design approach'
      ]
    },
    {
      id: 'findaproperty',
      name: 'Finda-property',
      image: `${find}`,
      description: 'A revolutionary property management and real estate platform. Connects property owners with tenants through an intuitive interface. Features include virtual tours, automated lease management, and integrated payment processing.',
      website: 'https://finda-property.com/',
      technologies: ['HTML', 'JAVASCRIPT', 'BOOTSTRAP', 'CSS','JQUERY'],
      highlights: [
        'Virtual property tours',
        'Automated lease management',
        'Integrated payment system',
        'Mobile-first design approach'
      ]
    },
    {
      id: '360rcp',
      name: '360rcp',
      image: `${repair}`,
      description: 'A revolutionary property management and real estate platform. Connects property owners with tenants through an intuitive interface. Features include virtual tours, automated lease management, and integrated payment processing.',
      website: 'https://360rcp.com/',
      technologies: ['HTML', 'JAVASCRIPT', 'BOOTSTRAP', 'CSS','JQUERY'],
      highlights: [
        'Virtual property tours',
        'Automated lease management',
        'Integrated payment system',
        'Mobile-first design approach'
      ]
    },
    {
      id: 'portfolio',
      name: 'Portfolio',
      image: '',
      description: 'A modern personal portfolio website showcasing web development projects and skills. Built with React and featuring smooth animations, responsive design, and interactive elements.',
      website: 'https://ahsanportfoli.netlify.app/',
      technologies: ['REACT', 'JAVASCRIPT', 'CSS', 'HTML'],
      highlights: [
        'Modern responsive design',
        'Smooth animations and transitions',
        'Interactive project showcase',
        'Contact form integration'
      ]
    }
  ];

  const projectsPerSlide = 3;
  const totalSlides = Math.ceil(projects.length / projectsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  const ProjectCard = ({ project }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
      <div
        className={`project-card ${isHovered ? 'hovered' : ''}`}
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url(${project.image})` }}
        onClick={() => setCurrentView(project.id)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="project-card-content">
          <div className={`project-name ${isHovered ? 'hovered' : ''}`}>{project.name}</div>
        </div>
      </div>
    );
  };

  const ProjectDetail = ({ project }) => (
    <div className="detail-container">
      <div className="max-width">
        <button
          className="back-button"
          onClick={() => setCurrentView('main')}
        >
          <ArrowLeft size={24} />
          Back to Projects
        </button>

        <div className="detail-card">
          <div className={`detail-grid ${window.innerWidth <= 768 ? 'stacked' : ''}`}>
            <div>
              <img
                src={project.image}
                alt={project.name}
                className="detail-image"
              />
              <div>
                <h3 className="section-title">Technologies Used</h3>
                <div className="tech-tags">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h1 className="detail-title">{project.name}</h1>
              <p className="detail-description">{project.description}</p>

              <div className="highlights">
                <h3 className="section-title">Key Highlights</h3>
                <ul className="highlights-list">
                  {project.highlights.map((highlight, index) => (
                    <li key={index} className="highlight-item">
                      <span className="bullet">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className="website-button"
                onClick={() => window.open(project.website, '_blank')}
              >
                <ExternalLink size={20} />
                Visit Website
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  if (currentView !== 'main') {
    const project = projects.find((p) => p.id === currentView);
    return <ProjectDetail project={project} />;
  }

  return (
    <div className="portfolio-container" style={{ backgroundImage: `url(${sectionthree})` }}>
      <div className="max-width">
        <div className="header">
          <div className="bg-text" style={{ backgroundImage: `url(${Projects})` }}></div>
          <div className="header-content">
            <h2 className="title">Checkout My Recently</h2>
            <h2 className="title">Completed Projects</h2>
            <div className="divider" style={{ backgroundImage: `url(${top})` }}></div>
          </div>
        </div>

        <div className="projects-container">
          <div
            className="projects-slider"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {Array.from({ length: totalSlides }, (_, slideIndex) => (
              <div key={slideIndex} className="projects-slide">
                {projects
                  .slice(slideIndex * projectsPerSlide, (slideIndex + 1) * projectsPerSlide)
                  .map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
              </div>
            ))}
          </div>
        </div>

        <div className="dots">
          {Array.from({ length: totalSlides }, (_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : 'inactive'}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioProjects;