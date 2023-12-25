import Button from "./components/Button";
import CardSection from "./components/CardSection";
import Navigation from "./components/Navigation";
import Section from "./components/Section";
import cardItems from "./data/cardItems";
import navigationItems from "./data/navigationItems";
import image_1 from './assets/image_1.png'

function App() {
  return (
    <>
      <Navigation items = {navigationItems}/>
      <Section 
        title="Virtual healthcare for you"
        description="Our service provides progressive, and affordable healthcare, accessible on mobile and online for everyone"
        image={image_1}
        button = {<Button text='Consult today'/>}
      />
      <CardSection 
        title="Our services"
        description="We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health"
        button={<Button text='Learn more'/>}
        items={cardItems}
      />
    </>
  )
}

export default App
