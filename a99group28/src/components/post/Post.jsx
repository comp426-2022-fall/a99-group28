import './post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function Post() {
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    
                    <span className="postUsername">PROFILE NAME</span>
                    <span className="postDate"># OF NAMES</span>
                </div>
                <div className="postTopRight">
                    <MoreVertIcon/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">
                    <input placeholder='Name one' className="nameOne" />
                    <input placeholder='Name two' className="nameTwo" />
                </span>
                <div className="result">
                        Result
                    </div>
                
            </div>
            <div className="postBottom">
                <div className="postBottomLeft"></div>
                <div className="postBottomRight"></div>
            </div>
        </div>

    </div>
  )
}
