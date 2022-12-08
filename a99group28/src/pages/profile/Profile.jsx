import './profile.css'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'

export default function Profile({authorized}) {
  return (
    <>

       <Topbar/>
        <div className="profile">
        <Sidebar/>
       <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileCover">
                    <img  className='profileCoverImg' src="/assets/people/patrick2.jpeg" alt="" />
                    <img  className='profileUserImg' src="/assets/people/patrick2.jpeg" alt="" />
                </div>
                <div className="profileInfo">
                    <h4 className='profileInfoName'>Andrew Knotts</h4>
                </div>
            </div>
            <div className="profileRightBottom">
                <Feed/>

            </div>
       </div>
       
       
       </div>
       </>
  )
}
