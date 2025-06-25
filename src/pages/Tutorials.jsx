import React from 'react';
import Card from '../components/ui/Card';
import Section from '../components/reusable/Section';
import { allTutos } from '../data/all-tutos';

const Tutorials = () => {
  const headerImage = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80';
  const visibleCount = 20
  console.log(allTutos)
  return (
    <>
     <Section
            id="all-tutos"
            title="ALL SPARQL TUTOS"
            description="Discover all our SPARQL tutos."
            variant="dark"
            bg={true}
        >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {allTutos.slice(0, visibleCount).map((tuto, key) => (
              <Card key={key} data={{
                name: tuto.title,
                image: tuto.img ? tuto.img : "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80",
                category: tuto.category,
                date: tuto.date,
                ontologies : [tuto.status],
                slug: tuto.slug

              }} />
            ))}
      </div>
      </Section>

    </>
  );
}

export default Tutorials;
