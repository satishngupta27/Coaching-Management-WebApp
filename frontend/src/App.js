import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

import StudyMaterialType from "./pages/coaching_portal_pages/StudyMaterial/studyMaterialType";
import SubjectWise from "./pages/coaching_portal_pages/StudyMaterial/SubjectWise";

import Assignment from "./pages/coaching_portal_pages/Assignment/Assignment";
import Attendence from "./pages/coaching_portal_pages/Attendence/Attendence";

import CreateNewsSubjectForm from "./pages/coaching_portal_pages/StudyMaterial/CreateNewSubjectForm";
import CreateAssignmentForm from "./pages/coaching_portal_pages/Assignment/CreateAssignmentForm";
import CreateNewBatchForm from "./pages/coaching_portal_pages/Batch/CreateNewBatchForm";


import UploadNotesForm from "./pages/coaching_portal_pages/StudyMaterial/UploadNotesForm";

import Dashboard from "./pages/coaching_portal_pages/Dashboard/Dashboard";
import Batches from "./pages/coaching_portal_pages/Batch/Batch";

import Student_Info from "./pages/coaching_portal_pages/Student-info/Student_Info";
import AddStudent from "./pages/coaching_portal_pages/Student-info/AddStudent";
import ViewAllStudent from "./pages/coaching_portal_pages/Student-info/ViewAllStudent";
import UpdateStudent from "./pages/coaching_portal_pages/Student-info/UpdateStudent";
import StudentProfile from "./pages/coaching_portal_pages/Student-info/StudentProfile";
import Notes from "./pages/coaching_portal_pages/StudyMaterial/Notes";
Router.onRouteChangeStart = (url) => NProgress.start();
Router.onRouteChangeComplete = (url) => NProgress.done();
Router.onRouteChangeError = (url) => NProgress.done();

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/studymaterialType" component={StudyMaterialType} />
        <Route path="/createNewSubjectForm" component={CreateNewsSubjectForm} />
        <Route path="/createAssignmentForm" component={CreateAssignmentForm} />
        <Route path="/createNewBatchForm" component={CreateNewBatchForm} />
        <Route path="/attendence" component={Attendence} />
        <Route path="/uploadNotesForm" component={UploadNotesForm} />
        <Route path="/subjectwise" component={SubjectWise} />
        <Route path="/notes" component={Notes} />
        <Route path="/batches" component={Batches} />
        <Route path="/assignment" component={Assignment} />
        <Route path="/student_Info" exact component={Student_Info} />
        <Route path="/student_Info/addStudent" exact component={AddStudent} />
        <Route
          path="/student_Info/viewAllStudent"
          exact
          component={ViewAllStudent}
        />
        <Route
          path="/student_Info/updateStudent"
          exact
          component={UpdateStudent}
        />
        <Route
          path="/student_Info/studentprofile/:id"
          exact
          component={StudentProfile}
        />
      </Switch>
    </Router>
  );
}

export default App;
