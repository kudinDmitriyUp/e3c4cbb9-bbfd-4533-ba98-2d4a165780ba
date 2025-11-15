"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboardCorners from '@/components/sections/hero/HeroBillboardCorners';
import TagAbout from '@/components/sections/about/TagAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import AboutFeature from '@/components/sections/about/AboutFeature';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Brain, Globe, Plane, Star, Trophy } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="small"
      sizing="large"
      background="floatingGradient"
      cardStyle="layered-gradient"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="solid"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "About", id: "about" },
            { name: "Achievements", id: "achievements" },
            { name: "Skills", id: "skills" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Alessandro Noya"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCorners
          title="Alessandro Noya - Rising Star"
          description="Junior at Torrey Pines High School pursuing excellence in academics, athletics, aviation, and strategy. From Rio to Rome to San Diego - a journey of growth and achievement."
          tag="Multi-Talented Student"
          tagIcon={Star}
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763225563471-1irw6hz9.jpg",
              imageAlt: "Alessandro playing volleyball"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763225564241-dsu67f13.jpg",
              imageAlt: "Chess strategy in action"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763225565035-8fvpgabd.jpg",
              imageAlt: "Alessandro in pilot training"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763225565651-f9xe5lib.jpg",
              imageAlt: "Academic achievements"
            }
          ]}
          buttons={[
            { text: "View Achievements", href: "achievements" },
            { text: "Get in Touch", href: "contact" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout
          tag="My Journey"
          description="Born in the vibrant city of Rio de Janeiro, Brazil, I spent most of my formative years in the historic streets of Rome, Italy, absorbing diverse cultures and languages. Now calling San Diego, California home, I'm a junior at Torrey Pines High School where I excel both in the classroom and on the court. My passion for aviation drives me toward my pilot license, while my strategic mind dominates chess competitions. This unique blend of international experience, academic dedication, athletic prowess, and diverse interests shapes my perspective and fuels my ambition to make a meaningful impact in everything I pursue."
        />
      </div>

      <div id="achievements" data-section="achievements">
        <FeatureCardOne
          title="My Achievements & Passions"
          description="Exploring excellence across academics, athletics, aviation, and strategic thinking"
          tag="Accomplishments"
          tagIcon={Trophy}
          textboxLayout="default"
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          features={[
            {
              title: "Volleyball Excellence",
              description: "Standout player at Torrey Pines High School, combining teamwork, athleticism, and competitive spirit to excel on the court",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763225821766-6dewzw3w.jpg",
              imageAlt: "Volleyball championship moment"
            },
            {
              title: "Chess Prodigy",
              description: "Strategic mastermind with exceptional chess skills, demonstrating advanced tactical thinking and competitive success",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763225567726-mng2w8es.jpg",
              imageAlt: "Chess tournament victory"
            },
            {
              title: "Future Pilot",
              description: "Currently pursuing pilot license with dedication and precision, preparing for a career in aviation with hands-on training",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763225912387-sfx22ely.jpg",
              imageAlt: "Pilot training progress"
            },
            {
              title: "Academic Scholar",
              description: "Maintaining high academic standards at Torrey Pines High School while balancing multiple extracurricular pursuits",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763225569108-gm118e7u.jpg",
              imageAlt: "Academic excellence recognition"
            }
          ]}
        />
      </div>

      <div id="skills" data-section="skills">
        <AboutFeature
          title="My core strengths span across multiple disciplines, combining international perspective with local excellence. From the analytical precision required in chess to the teamwork dynamics of volleyball, from the technical mastery needed for aviation to the academic rigor of high school studies."
          features={[
            {
              icon: Globe,
              title: "Global Perspective",
              description: "Born in Rio, raised in Rome, thriving in San Diego - bringing multicultural understanding and adaptability to every challenge."
            },
            {
              icon: Trophy,
              title: "Athletic Leadership",
              description: "Volleyball excellence at Torrey Pines High School, demonstrating teamwork, dedication, and competitive spirit on the court."
            },
            {
              icon: Brain,
              title: "Strategic Thinking",
              description: "Chess prodigy with advanced tactical abilities, showing exceptional problem-solving and forward-planning skills."
            },
            {
              icon: Plane,
              title: "Aviation Passion",
              description: "Currently pursuing pilot license with precision and dedication, preparing for future opportunities in aviation industry."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Let's Connect"
          description="Interested in collaboration, opportunities, or just want to chat about volleyball, chess, aviation, or academics? I'd love to hear from you!"
          inputs={[
            { name: "name", type: "text", placeholder: "Your Name", required: true },
            { name: "email", type: "email", placeholder: "Your Email", required: true },
            { name: "subject", type: "text", placeholder: "Subject", required: true }
          ]}
          textarea={{
            name: "message",
            placeholder: "Your message...",
            rows: 5,
            required: true
          }}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763225569588-0schy37o.jpg"
          imageAlt="San Diego skyline view"
          mediaPosition="right"
          buttonText="Send Message"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Alessandro Noya"
          columns={[
            {
              title: "About",
              items: [
                { label: "My Journey", href: "about" },
                { label: "Achievements", href: "achievements" }
              ]
            },
            {
              title: "Interests",
              items: [
                { label: "Volleyball", href: "achievements" },
                { label: "Chess", href: "achievements" },
                { label: "Aviation", href: "achievements" }
              ]
            },
            {
              title: "Connect",
              items: [
                { label: "Contact Me", href: "contact" },
                { label: "Torrey Pines HS", href: "https://www.powayusd.com/en/Schools/HS/TPHS" }
              ]
            }
          ]}
          copyrightText="© 2025 Alessandro Noya - Rising Star from Rio to Rome to San Diego"
        />
      </div>
    </ThemeProvider>
  );
}