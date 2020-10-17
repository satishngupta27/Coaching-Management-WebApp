import React from 'react';

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const TeacherSidebarData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: < AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Study Material',
    path: '/subjectwise',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Assignment',
    path: '/assignment',
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
    title: 'Student Info',
    path: '/student_info',
    icon: <FaIcons.FaPersonBooth />,
    cName: 'nav-text'
  },
  {
    title: 'Batches',
    path: '/batches',
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