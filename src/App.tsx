import Button from "./components/Button";
import CardSection from "./components/CardSection";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Section from "./components/Section";
import cardItems from "./data/cardItems";
import navigationItems from "./data/navigationItems";
import image_1 from './assets/image_1.png'
import image_2 from './assets/image_2.png'
import image_3 from './assets/image_3.png'

function App() {
  return (
    <>
      <Navigation items = {navigationItems}/>
      <Section 
        title="Virtual healthcare for you"
        description="Our service provides progressive, and affordable healthcare, accessible on mobile and online for everyone"
        image={image_1}
        button={<Button text='Consult today' isPrimaryColor={true} padding="48px 0px 0px 0px"/>}
        isReverse={false}
        hasDivider={false}
      />
      <CardSection 
        title="Our services"
        description="We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health"
        button={<Button text='Learn more' isPrimaryColor={false} padding="72px 0px 100px 0px"/>}
        items={cardItems}
      />
      <Section 
        title="Leading healthcare providers"
        description="We provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver"
        image={image_2}
        button = {<Button text='Learn more' isPrimaryColor={false} padding="70px 0px 100px 0px"/>}
        isReverse={true}
        hasDivider={true}
      />
      <Section 
        title="Download our mobile apps"
        description="Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely"
        image={image_3}
        button = {<Button text='Download ↓' isPrimaryColor={false} padding="40px 0px 0px 0px"/>}
        isReverse={false}
        hasDivider={true}
      />
      <Footer/>
    </>
  )
}

export default App
