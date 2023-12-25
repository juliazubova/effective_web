import Button from "./components/Button";
import Navigation from "./components/Navigation";
import Section from "./components/Section";
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
    </>
  )
}

export default App
