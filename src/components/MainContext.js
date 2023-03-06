import '../css/MainContext.css'
import RecentPost from '../components/RecentPost';
import PointRank from '../components/PointRank';




function MainContext() {
  return (
    <div id="main_content">
      <RecentPost/>
      <PointRank/>
    </div>
    
  );
}

export default MainContext;
