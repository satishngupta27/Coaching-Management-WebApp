import React from 'react';

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: < AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Academics',
    path: '/academics',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Attendence',
    path: '/Attendence',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Student_Info',
    path: '/student_info',
    icon: <FaIcons.FaPersonBooth />,
    cName: 'nav-text'
  },
  {
    title: 'Accounting',
    path: '/accounting',
    icon: <IoIcons.IoMdCalculator />,
    cName: 'nav-text'
  },
  {
    title: 'Batches-Branches',
    path: '/batches_braches',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Student-Doubt',
    path: '/student_doubt',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];