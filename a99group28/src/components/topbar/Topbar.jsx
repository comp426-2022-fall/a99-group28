
import "./topbar.css";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function Topbar(){
   return( 
   <div className="topbarContainer">

        <div className="topbarLeft">
            <span className="logo">Nomenconnect</span>
        </div>
        <div className="topbarCenter">
             <span className="yourname">Some kinda message here?</span>
        </div>
        <div className="topbarRight">
            <div className="topbarLinks">
               <span className="topbarLink">Homepage</span>
            </div>
      <div className="topbarIcons">
         
      </div>
      
    </div>

    </div>
   )

}