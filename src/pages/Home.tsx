import Card from "../Components/Card";
import Header from "../Components/Header";

export default function Home() {
  return (
    <>
      <Header H1="Simple URL Shortener" description="Shorten your links and track every click in real-time!" />
      <Card arrowToHome={true}></Card>
    </>
  )
}