import { EventDate } from "./components/event-date";
import { Footer } from "./components/footer";
import { Hero } from "./components/hero";
import { Localization } from "./components/localization";
import { MaiSection } from "./components/mai-section";
import { Participations } from "./components/participations";
import { SubHero } from "./components/sub-hero";
import { Layout } from "./layout";

function App() {
  return (
    <Layout>
      <Hero />
      <SubHero />
      <MaiSection />
      <EventDate />
      <Participations />
      <Localization />
      {/*<Tickets />*/}
      <Footer />
    </Layout>
  );
}

export default App;
