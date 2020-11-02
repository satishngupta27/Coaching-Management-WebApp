import React from 'react';

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const StudentSidebarData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: < AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'My Study Material',
    path: '/myStudyMaterial',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'My Assignment',
    path: '/myAssignment',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  // {
  //   title: 'Attendence',
  //   path: '/Attendence',
  //   icon: <IoIcons.IoIosPaper />,
  //   cName: 'nav-text'
  // },
  {
    title: 'My Profile',
    path: '/myProfile',
    icon: <FaIcons.FaPersonBooth />,
    cName: 'nav-text'
  },
  
  {
    title: 'My Doubt',
    path: '/myDoubt',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];