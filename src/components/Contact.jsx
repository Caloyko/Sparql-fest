import React from 'react'
import Section from './reusable/Section'
import Avatar from './ui/Avatar'

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
        <Avatar
          name="Jane Doe"
          photo="https://images.ctfassets.net/denf86kkcx7r/3KAW3ZtZZONzfHH47xWocR/b78710225146139041fcb7b8eb9f2a7f/chiot_Cavalier_King_Charles?fm=webp&w=612"
          role="Role"
          description="Lorem ipsum dolor sit amet, consecte adipisicing elit. Voluptatibus quia maiores et perferendis eaque."
          mail="@gmail.com"
          socials={{
            LinkedIn: "https://linkedin.com/in/janedoe",
            GitHub: "https://github.com/janedoe",
            Twitter: "https://twitter.com/janedoe",
            Instagram: "",
            ORCID: "https://orcid.org/0009-0006-1234-2915",
          }}
        />        
        </Section>
    </>
  )
}

export default Contact