import { useLocation } from "react-router";
import Header from "../Components/Header";
import Card from "../Components/Card";
import Footer from "../Components/Footer";

export default function Share() {
  const location = useLocation();

  return (
    <>
      <Header H1="Simple URL Shortener" description="Share your shorten Url" />
      <Card arrowToHome={false} />
      <Footer />
    </>

  )
}
