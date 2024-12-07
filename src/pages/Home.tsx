import Card from "../Components/Card";
import Header from "../Components/Header";
import './Home.css'
import Footer from "../Components/Footer";
import Counter from "../Components/Counter";
import Information from "../Components/Information";
export default function Home() {
  return (
    <>
      <Header H1="Simple URL Shortener" description="Shorten your links and track every click in real-time!" />
      <Card arrowToHome={true}></Card>
      <Counter />
      <Information />
      <Footer />
    </>
  )
}