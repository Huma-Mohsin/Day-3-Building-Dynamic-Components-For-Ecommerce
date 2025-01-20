import Navbar from "./components/1Navbar";
import HelloNikeText from "./components/2-HelloNikeApp";
import VideoSection from "./components/2videosection";
import LatestGreatest from "./components/3LatestGreatest";
import TrendingInWeek from "./components/4-TrendingWeek";
import ExploreMore from "./components/5-ExploreMore";
import Footer from "./components/6-Footer";
import StaticFooter from "./components/7-StaticFooter";



export default function Home() {
  
  return (
    <div>
   
     <HelloNikeText/>
     <VideoSection/>
     <LatestGreatest/>
     <TrendingInWeek/>
     <ExploreMore/>
     <Footer/>
    
     
    </div>
  )}