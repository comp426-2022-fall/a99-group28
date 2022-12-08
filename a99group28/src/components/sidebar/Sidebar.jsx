import "./sidebar.css";
import RssFeedIcon from '@mui/icons-material/RssFeed';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import GroupIcon from '@mui/icons-material/Group';
import BookmarkIcon from '@mui/icons-material/Bookmark';

import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";
import ChatIcon from '@mui/icons-material/Chat';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <span className="nameConnections">
          Name Connections
        </span>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}