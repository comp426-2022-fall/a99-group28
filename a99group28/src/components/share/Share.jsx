import './share.css'
import ImageIcon from '@mui/icons-material/Image';
import LabelIcon from '@mui/icons-material/Label';
import RoomIcon from '@mui/icons-material/Room';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

export default function Share() {
  return (
    <div className='Share'>
        <div className="shareWrapper">
            <div className="shareTop">
                <img className="shareProfileImg" src="/assets/people/Squidward.jpeg" alt="" />
                <input placeholder="leave a comment" className="shareInput" />
            </div>
            <hr className="shareHr" /> 
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <ImageIcon className="shareIcon"/>
                        <span className="shareOptionText">Photo</span>
                    </div>
                </div>
                <div className="shareOptions">
                    <div className="shareOption">
                        <LabelIcon className="shareIcon"/>
                        <span className="shareOptionText">Tag</span>
                    </div>
                </div>
                <div className="shareOptions">
                    <div className="shareOption">
                        <RoomIcon className="shareIcon"/>
                        <span className="shareOptionText">Location</span>
                    </div>
                </div>
                <div className="shareOptions">
                    <div className="shareOption">
                        <EmojiEmotionsIcon className="shareIcon"/>
                        <span className="shareOptionText">Emotions</span>
                    </div>
                </div>
                <button className="shareButton">Share</button>
            </div>
        </div>
    </div>
  )
}
