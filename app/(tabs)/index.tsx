

import React from 'react'
import Create from './Login/Create'
import SignUpScreen from './Login/SignUpScreen'
import VerificationScreen from './Login/VerificationScreen'
import LoginScreen from './Login/LoginScreen'
import ShiftTrackScreen from './Login/ShiftTrackScreen'
import ShiftManagementScreen from './Manager/ShiftManagementScreen'
import ViewShiftScreen from './worker/ViewShiftScreen'
import IncidentReportForm from './worker/IncidentReportForm'
import { Button , StyleSheet, Text, View } from 'react-native'
import { createContext, useContext, useState } from 'react';
import S_Dashboard from './Superviser/S_Dashboard'
import M_Dashboard from './Manager/M_Dashboard'
import AddShiftScreen from './Superviser/AddShift'
import W_Dashboard from './worker/Dashboard'
import TaskDetailsScreen from './Superviser/Task_details'
import ViewShiftScreen_Worker from './worker/ViewShiftScreen'
import Worker_Home from './worker/Worker_Home'
import Worker_Message from './worker/W_message'
import M_Alerts from './Manager/M_Alerts'
import SMPHomeScreen from './SMP/Smp_Home'
import RiskDashboard from './SMP/Risk_Dash'
import HazardInformationScreen from './SMP/Hazard_info'
import AddHazard from './SMP/Add_hazards'
import ViewShiftScreen_S from './Superviser/View_shift'
import Erp_Dashboard from './Manager/Erp_dash'
import ComplianceScreen from './Superviser/Compliences'
import { UserContext } from './Login/UserContext';
import AddShiftScreen_M from './Manager/Add_Shift_M'
import ShiftManagementScreen_M from './Manager/Edit_shift'
import EmployeeForm_M from './Manager/Add_user'
import Show_workers from './Manager/Show_users'
import SMP_analysis from './SMP/SMP_analaysis'
import Control_plan from './SMP/Control_plan'
import User_management from './SMP/User_management'
import NotificationScreen from './SMP/Notification'
import AuditDashboard from './SMP/Audit_Review'
import EditAudit from './SMP/Edit_Audit'
import AuditReport from './SMP/Audit1_Report'
import ControlPlans from './SMP/Control_plans'
import AddControlPlan from './SMP/Add_controls'
import SubmissionSuccess from './SMP/Submission_success'
import WorkPlansScreen from './SMP/Work_plan'
import CreateWorkPlanScreen from './SMP/Create_work_plan'
import WpSuccess from './SMP/WPSuccess'
import LoginScreen_M from './Login/LoginScreen2'


export default function index() {
  const [user, setUser] = useState(null);
  const NavigationContext = createContext();
    const [currentScreen, setCurrentScreen] = useState('shifttrack');
  
    const navigateTo = (screen) => {
      setCurrentScreen(screen);
    };

  
  return (
    <NavigationContext.Provider value={{ navigateTo }}>

    <UserContext.Provider value={{ user, setUser }}>
     <View style={{ flex: 1 }}>
     {currentScreen === 'login' && <LoginScreen navigateTo={navigateTo} />}
     {currentScreen === 'signup' && <SignUpScreen navigateTo={navigateTo} />}
     {currentScreen === 'verify' && <VerificationScreen navigateTo={navigateTo} />}
     {currentScreen === 'shifttrack' && <ShiftTrackScreen navigateTo={navigateTo} />}
     {currentScreen === 'Supervisor' && <S_Dashboard navigateTo={navigateTo} />}
     {currentScreen === 'Manager' && <M_Dashboard navigateTo={navigateTo} />}
     {currentScreen === 'Worker' && <W_Dashboard navigateTo={navigateTo} />}
     {currentScreen === 'shiftmanagement' && <ShiftManagementScreen navigateTo={navigateTo} />}

     {currentScreen === 'addshift' && <AddShiftScreen navigateTo={navigateTo} />}
     {currentScreen === 'taskdetails' && <TaskDetailsScreen navigateTo={navigateTo} />}
     {currentScreen === 'viewshift' && <ViewShiftScreen navigateTo={navigateTo} />}
     {currentScreen === 'viewshift_w' && <ViewShiftScreen_Worker navigateTo={navigateTo} />}
     {currentScreen === 'w_home' && <Worker_Home navigateTo={navigateTo} />}
     {currentScreen === 'w_message' && <Worker_Message navigateTo={navigateTo} />}
     {currentScreen === 'm_alerts' && <M_Alerts navigateTo={navigateTo} />}
     {currentScreen === 'smp' && <SMPHomeScreen navigateTo={navigateTo} />}
     {currentScreen === 'risk_d' && <RiskDashboard navigateTo={navigateTo} />}
     {currentScreen === 'harzards' && <HazardInformationScreen navigateTo={navigateTo} />}
     {currentScreen === 'addharzards' && <AddHazard navigateTo={navigateTo} />}
 
     {currentScreen === 'incident_r' && <IncidentReportForm navigateTo={navigateTo} />}
     {currentScreen === 's_viewshift' && <ViewShiftScreen_S navigateTo={navigateTo} />}
     {currentScreen === 'erp' && <Erp_Dashboard navigateTo={navigateTo} />}
     {currentScreen === 'addshift_m' && <AddShiftScreen_M navigateTo={navigateTo} />}
     {currentScreen === 'ShiftMembersScreen_M' && <ShiftManagementScreen_M navigateTo={navigateTo} />}
     {currentScreen === 'add_user_m' && <EmployeeForm_M navigateTo={navigateTo} />}
     {currentScreen === 'show_user' && <Show_workers navigateTo={navigateTo} />}
     {currentScreen === 'smp_analysis' && <SMP_analysis navigateTo={navigateTo}/> }
     {currentScreen === 'control_plan' && <Control_plan navigateTo={navigateTo}/> }
     {currentScreen === 'user_management' && <User_management navigateTo={navigateTo}/> }
     {currentScreen === 'notification' && <NotificationScreen navigateTo={navigateTo}/>}
     {currentScreen === 'audit_dashboard' && <AuditDashboard navigateTo={navigateTo}/>}
     {currentScreen === 'edit_audit' && <EditAudit navigateTo={navigateTo}/>}
     {currentScreen === 'audit_report' && <AuditReport navigateTo={navigateTo}/>}
     {currentScreen === 'control_plans' && <ControlPlans navigateTo={navigateTo}/>}
     {currentScreen === 'add_control' && <AddControlPlan navigateTo={navigateTo}/>}
     {currentScreen === 'submission_success' && <SubmissionSuccess navigateTo={navigateTo}/>}
     {currentScreen === 'work_plan' && <WorkPlansScreen navigateTo={navigateTo}/>}
     {currentScreen === 'create_work' && <CreateWorkPlanScreen navigateTo={navigateTo}/>}
     {currentScreen === 'wpsuccess' && <WpSuccess navigateTo={navigateTo}/>}

     {currentScreen === 'login2' && <LoginScreen_M navigateTo={navigateTo}/>}
     

     </View>
     </UserContext.Provider>
    
 </NavigationContext.Provider>
  )
}

const styles = StyleSheet.create({})
