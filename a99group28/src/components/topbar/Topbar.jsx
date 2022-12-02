
import "./topbar.css";
import {Search} from "@material-ui/icons";
import {Person} from "@material-ui/icons";

export default function Topbar(){
   return( 
   <div className="topbarContainer">

        <div className="topbarLeft">
            <span className="logo">Nomen</span>
        </div>
        <div className="topbarCenter">
            <div className="searchbar">
               <Search/>
               <input placeholder="Search for friend or post" className="searchInput" />
            </div>
        </div>
        <div className="topbarRight">
            <div className="topbarLinks">
               <span className="topbarLink">Homepage</span>
               <span className="topbarLink">Timeline</span>
            </div>
      <div className="topbarIcons">
         <div className="topbarIconItem">
            {/* <Person/> */}
            <span className="topbarIconBadge">1</span>
         </div>
      </div>
        </div>

    </div>
   )

}