import React from 'react'
import Section from './reusable/Section'
import Avatar from './ui/Avatar'
import pauline from "../assets/images/avatar/pauline2.jpeg"

const Contact = () => {
  return (
    <>
        <Section
            id="contact"
            title="CONTACT US"
            description="Get in touch with the SPARQL Fest team."
            variant="dark"
            bg={false}
        >
          {/** Add link to github and github issue  */}
          {/** Add link to slack */}
        <div className="flex flex-col space-y-6">
        <Avatar
          name="Pauline Lubet"
          photo={pauline}
          role="PhD Candidate"
          description={ <>
            I'm a PhD candidate at Amsterdam University Medical Center, focusing on ontology mapping, curation, and extension for rare diseases. My research is part of the European ERDERA network. <br></br> My thesis will have a focus on: <em>"From Mapping to Usability: Making Rare Disease Ontologies FAIR and Accessible."</em>
          </>}
          mail="p.j.e.lubet@amsterdamumc.nl"
          socials={{
            LinkedIn: "https://www.linkedin.com/in/pauline-lubet/",
            GitHub: "https://github.com/Caloyko",
            ORCID: "https://orcid.org/0009-0006-1234-2915",
          }}
        />    
        </div>     
        </Section>
    </>
  )
}

export default Contact