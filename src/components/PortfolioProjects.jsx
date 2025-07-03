import React, { useState } from 'react';
import { ArrowLeft, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import sectionthree from '../assets/img/sectionthree.png'
import Projects from '../assets/img/Projects.png'
import top from '../assets/img/top.png'

const PortfolioProjects = () => {
  const [currentView, setCurrentView] = useState('main');
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      id: 'crustim',
      name: 'Crustim',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop',
      description: 'A modern team collaboration platform built with React and Node.js. Features real-time messaging, project management tools, and seamless integration with popular development tools. The platform focuses on enhancing team productivity through intuitive design and powerful features.',
      website: 'https://crustim.co/',
      technologies: ['HTML', 'JAVASCRIPT', 'BOOTSTRAP', 'CSS','JSX'],
      highlights: [
        'Real-time collaboration features',
        'Responsive design for all devices',
        'Advanced project management tools',
        'Secure user authentication system'
      ]
    },
    {
      id: 'sam',
      name: 'SAM',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=300&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=300&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=300&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=300&fit=crop',
      description: 'A modern personal portfolio website showcasing web development projects and skills. Built with React and featuring smooth animations, responsive design, and interactive elements.',
      website: 'https://myportfolio.com/',
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

  const styles = {
    container: {
      minHeight: '100vh',
      padding: '64px 16px',
      backgroundImage: `url(${sectionthree})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    },
    maxWidth: {
      maxWidth: '1200px',
      margin: '0 auto'
    },
    header: {
      textAlign: 'center',
      marginBottom: '64px',
      position: 'relative'
    },
    bgText: {
  backgroundImage: `url(${Projects})`,   
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'contain',
  position: 'absolute',
  top: '0',
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: '1',
  width: '800px',
  height: '200px' 
}
,
    headerContent: {
      position: 'relative',
      zIndex: '10',
      paddingTop: '50px'
    },
    title: {
      fontSize: '42px',
      fontWeight: '400',
      color: 'white',
      margin: '16px 0',
      textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
    },
    divider: {
    backgroundImage: `url(${top})`,   
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'contain',
  position: 'absolute',
  top: '25%',
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: '1',
  width: '100px',
  height: '20px' 
    },
    projectsContainer: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: '20px',
      padding: '20px 0'
    },
    projectsSlider: {
      display: 'flex',
      transition: 'transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)',
      transform: `translateX(-${currentSlide * 100}%)`
    },
    projectsSlide: {
      minWidth: '100%',
      display: 'flex',
      justifyContent: 'center',
      gap: '32px',
      padding: '0 20px'
    },
    projectCard: {
      position: 'relative',
      width: '320px',
      height: '384px',
      borderRadius: '16px',
      overflow: 'hidden',
      cursor: 'pointer',
      transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
      transform: 'translateY(0)',
    },
    projectCardHover: {
      transform: 'translateY(-10px) scale(1.02)',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)'
    },
    projectCardContent: {
      position: 'absolute',
      bottom: '0',
      left: '0',
      right: '0',
      padding: '24px',
      background: 'linear-gradient(transparent, rgba(0,0,0,0.8))'
    },
    projectName: {
      background: 'linear-gradient(to right, #AA14F0, #6D18EF)',
      color: 'white',
      padding: '12px 20px',
      borderRadius: '12px',
      display: 'inline-block',
      fontWeight: 'bold',
      fontSize: '1.125rem',
      boxShadow: '0 4px 15px rgba(170, 20, 240, 0.4)',
      transition: 'all 0.3s ease'
    },
    navButton: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      background: 'rgba(255, 255, 255, 0.2)',
      backdropFilter: 'blur(10px)',
      color: 'white',
      border: 'none',
      padding: '12px',
      borderRadius: '50%',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      zIndex: '10',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
    },
    navButtonLeft: {
      left: '20px'
    },
    navButtonRight: {
      right: '20px'
    },
    dots: {
      display: 'flex',
      justifyContent: 'center',
      gap: '12px',
      marginTop: '40px'
    },
    dot: {
      width: '16px',
      height: '16px',
      borderRadius: '50%',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
      position: 'relative',
      overflow: 'hidden'
    },
    dotActive: {
      background: 'linear-gradient(45deg, #AA14F0, #6D18EF)',
      transform: 'scale(1.2)',
      boxShadow: '0 4px 15px rgba(170, 20, 240, 0.5)'
    },
    dotInactive: {
      background: 'rgba(255, 255, 255, 0.4)',
      transform: 'scale(1)'
    },
    detailContainer: {
      minHeight: '100vh',
      padding: '32px',
      backgroundImage: `url(${sectionthree})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    },
    backButton: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      color: 'white',
      background: '#AA14F029 ',
      backdropFilter: 'blur(10px)',
      border: '1px solid #AA14F029',
      fontSize: '1.125rem',
      cursor: 'pointer',
      marginBottom: '32px',
      transition: 'all 0.3s ease',
      padding: '12px 20px',
      borderRadius: '25px'
    },
    detailCard: {
      background: '#AA14F029 ',
      backdropFilter: 'blur(20px)',
      borderRadius: '20px',
      padding: '40px',
      boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)',
      border: '1px solid rgba(255, 255, 255, 0.2)'
    },
    detailGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '40px',
      alignItems: 'start'
    },
    detailImage: {
      width: '100%',
      height: '300px',
      objectFit: 'cover',
      borderRadius: '16px',
      // boxShadow: '0 15px 35px rgba(0, 0, 0, 0.3)'
    },
    detailTitle: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: 'white',
      marginBottom: '20px',
      textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
    },
    detailDescription: {
      color: '#e5e7eb',
      fontSize: '1.125rem',
      lineHeight: '1.75',
      marginBottom: '30px'
    },
    sectionTitle: {
      color: 'white',
      fontSize: '1.25rem',
      fontWeight: 'bold',
      marginBottom: '16px'
    },
    techTags: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '10px',
      marginTop: '20px'
    },
    techTag: {
      background: 'linear-gradient(45deg, #a855f7, #3b82f6)',
      color: 'white',
      padding: '8px 16px',
      borderRadius: '15px',
      fontSize: '0.875rem',
      fontWeight: '500',
      boxShadow: '0 4px 15px rgba(168, 85, 247, 0.3)'
    },
    highlightsList: {
      listStyle: 'none',
      padding: '0',
      margin: '0'
    },
    highlightItem: {
      color: '#e5e7eb',
      display: 'flex',
      alignItems: 'flex-start',
      gap: '12px',
      marginBottom: '12px',
      fontSize: '1rem'
    },
    bullet: {
      color: '#AA14F0',
      marginTop: '4px',
      fontSize: '1.2rem'
    },
    websiteButton: {
      background: 'linear-gradient(45deg, #7c3aed, #2563eb)',
      color: 'white',
      padding: '14px 28px',
      borderRadius: '25px',
      fontWeight: 'bold',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 10px 25px rgba(124, 58, 237, 0.4)',
      fontSize: '1rem',
      marginTop: '20px'
    }
  };

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
        style={{
          ...styles.projectCard,
          ...(isHovered ? styles.projectCardHover : {}),
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url(${project.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        onClick={() => setCurrentView(project.id)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div style={styles.projectCardContent}>
          <div style={{
            ...styles.projectName,
            ...(isHovered ? { transform: 'scale(1.05)' } : {})
          }}>
            {project.name}
          </div>
        </div>
      </div>
    );
  };

  const ProjectDetail = ({ project }) => (
    <div style={styles.detailContainer}>
      <div style={styles.maxWidth}>
        <button
          style={styles.backButton}
          onClick={() => setCurrentView('main')}
          onMouseEnter={(e) => {
            e.target.style.background = 'rgba(255, 255, 255, 0.2)';
            e.target.style.transform = 'translateX(-5px)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'rgba(255, 255, 255, 0.1)';
            e.target.style.transform = 'translateX(0)';
          }}
        >
          <ArrowLeft size={24} />
          Back to Projects
        </button>

        <div style={styles.detailCard}>
          <div style={window.innerWidth > 768 ? styles.detailGrid : {}}>
            <div>
              <img
                src={project.image}
                alt={project.name}
                style={styles.detailImage}
              />
              <div>
                <h3 style={styles.sectionTitle}>Technologies Used</h3>
                <div style={styles.techTags}>
                  {project.technologies.map((tech, index) => (
                    <span key={index} style={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h1 style={styles.detailTitle}>{project.name}</h1>
              <p style={styles.detailDescription}>
                {project.description}
              </p>

              <div style={{marginBottom: '24px'}}>
                <h3 style={styles.sectionTitle}>Key Highlights</h3>
                <ul style={styles.highlightsList}>
                  {project.highlights.map((highlight, index) => (
                    <li key={index} style={styles.highlightItem}>
                      <span style={styles.bullet}>•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                style={styles.websiteButton}
                onClick={() => window.open(project.website, '_blank')}
                onMouseEnter={(e) => {
                  e.target.style.background = 'linear-gradient(45deg, #6d28d9, #1d4ed8)';
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 15px 35px rgba(124, 58, 237, 0.6)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'linear-gradient(45deg, #7c3aed, #2563eb)';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 10px 25px rgba(124, 58, 237, 0.4)';
                }}
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
    const project = projects.find(p => p.id === currentView);
    return <ProjectDetail project={project} />;
  }

  return (
    <div style={styles.container}>
      <div style={styles.maxWidth}>
        {/* Header */}
        <div style={styles.header}>
          <div style={styles.bgText}></div>
          <div style={styles.headerContent}>
            <h2 style={styles.title}>
              Checkout My Recently
            </h2>
            <h2 style={styles.title}>
              Completed Projects
            </h2>
            <div style={styles.divider}></div>
          </div>
        </div>

        {/* Projects Slider */}
        <div style={styles.projectsContainer}>
          <div style={styles.projectsSlider}>
            {Array.from({ length: totalSlides }, (_, slideIndex) => (
              <div key={slideIndex} style={styles.projectsSlide}>
                {projects
                  .slice(slideIndex * projectsPerSlide, (slideIndex + 1) * projectsPerSlide)
                  .map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
              </div>
            ))}
          </div>
        </div>

        {/* Dot Indicators */}
        <div style={styles.dots}>
          {Array.from({ length: totalSlides }, (_, index) => (
            <button
              key={index}
              style={{
                ...styles.dot,
                ...(index === currentSlide ? styles.dotActive : styles.dotInactive)
              }}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioProjects;
