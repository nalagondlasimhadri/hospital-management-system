import { useState, useEffect } from "react";

import {
  LayoutDashboard,
  Users,
  CalendarDays,
  Stethoscope,
  ClipboardPlus,
  Pill,
  FlaskConical,
  Bed,
  IndianRupee,
  BarChart3,
  Search,
  Bell,
  ChevronDown,
  UserRound,
} from "lucide-react";

import "./App.css";


function App() {

  const [activePage, setActivePage] = useState("Dashboard");

  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Patients", icon: Users },
    { name: "Appointments", icon: CalendarDays },
    { name: "Doctors", icon: Stethoscope },
    { name: "Consultation", icon: ClipboardPlus },
    { name: "Pharmacy", icon: Pill },
    { name: "Lab", icon: FlaskConical },
    { name: "Admissions", icon: Bed },
    { name: "Billing", icon: IndianRupee },
    { name: "Reports", icon: BarChart3 },
  ];


  return (
    <div className="app">


      {/* =========================
          SIDEBAR
      ========================= */}

      <aside className="sidebar">

        {/* BRAND */}

        <div className="brand">

          <div className="brand-icon">
            +
          </div>

          <div>
            <h2>Hospital</h2>
            <p>Management System</p>
          </div>

        </div>


        {/* NAVIGATION */}

        <nav className="navigation">

          {menuItems.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.name}
                className={`nav-item ${
                  activePage === item.name ? "active" : ""
                }`}
                onClick={() => setActivePage(item.name)}
              >

                <Icon
                  size={19}
                  strokeWidth={1.8}
                />

                <span>
                  {item.name}
                </span>

              </div>

            );

          })}

        </nav>


        {/* ADMIN */}

        <div className="sidebar-user">

          <div className="avatar small">
            A
          </div>

          <div>

            <strong>
              Admin
            </strong>

            <span>
              Administrator
            </span>

          </div>

        </div>

      </aside>



      {/* =========================
          MAIN AREA
      ========================= */}

      <main className="main">


        {/* =========================
            TOP BAR
        ========================= */}

        <header className="topbar">


          <div className="search-box">

            <Search size={19} />

            <input
              type="text"
              placeholder="Search patients, doctors, appointments..."
            />

          </div>


          <div className="top-right">


            <button className="notification">

              <Bell size={20} />

            </button>


            <div className="profile">

              <div className="avatar">
                A
              </div>


              <div className="profile-info">

                <strong>
                  Admin
                </strong>

                <span>
                  Administrator
                </span>

              </div>


              <ChevronDown size={18} />

            </div>

          </div>

        </header>



        {/* =========================
            PAGE CONTENT
        ========================= */}

          {activePage === "Dashboard" ? (
  <Dashboard />
) : activePage === "Patients" ? (
  <Patients />
) : activePage === "Appointments" ? (
  <Appointments />
) : activePage === "Doctors" ? (
  <Doctors />
) : activePage === "Consultation" ? (
  <Consultation />
) :  activePage === "Pharmacy" ? (
  <Pharmacy />
) :  activePage === "Lab" ? (
  <Lab />
) : activePage === "Admissions" ? (
   <Admissions />
) : activePage === "Billing" ?(
  <Billing />
) : activePage === "Reports" ? (
  <Reports />
) : (
   
  <PagePlaceholder pageName={activePage} />
)}

      </main>

    </div>
  );
}



/* =========================================================
   DASHBOARD
========================================================= */

function Dashboard() {

  return (

    <section className="content">


      {/* =========================
          DASHBOARD HEADING
      ========================= */}

      <div className="heading-row">

        <div>

          <p className="eyebrow">
            HOSPITAL OVERVIEW
          </p>


          <h1>
            Welcome back, Admin 👋
          </h1>


          <p className="subtitle">
            Here's what's happening in your hospital today.
          </p>

        </div>


        <div className="date-box">

          <CalendarDays size={17} />

          September 23, 2026

        </div>

      </div>



      {/* =========================
          STAT CARDS
      ========================= */}

      <div className="stats-grid">


        {/* PATIENTS */}

        <StatCard
          icon={<UserRound size={20} />}
          title="Total Patients"
          value="1,248"
          change="↑ 12%"
          description="from last month"
          color="blue"
        />


        {/* APPOINTMENTS */}

        <StatCard
          icon={<CalendarDays size={20} />}
          title="Today's Appointments"
          value="86"
          change="↑ 8%"
          description="from yesterday"
          color="green"
        />


        {/* REVENUE */}

        <StatCard
          icon={<IndianRupee size={20} />}
          title="Total Revenue"
          value="₹2,48,500"
          change="↑ 15%"
          description="from last month"
          color="purple"
        />


        {/* BEDS */}

        <StatCard
          icon={<Bed size={20} />}
          title="Bed Occupancy"
          value="72%"
          change="72%"
          description="120 / 166 beds occupied"
          color="orange"
        />

      </div>



      {/* =========================
          LOWER DASHBOARD
      ========================= */}

      <div className="dashboard-grid">


        {/* =========================
            PATIENT VISITS
        ========================= */}

        <div className="card visits-card">


          <div className="card-header">

            <div>

              <h2>
                Patient Visits
              </h2>

              <p>
                Weekly patient activity
              </p>

            </div>


            <button className="dropdown">

              This Week

              <ChevronDown size={15} />

            </button>

          </div>



          {/* CHART */}

          <div className="chart">


            <div className="chart-y">

              <span>200</span>
              <span>150</span>
              <span>100</span>
              <span>50</span>
              <span>0</span>

            </div>



            <div className="bars">


              <div className="bar-group">

                <div
                  className="bar"
                  style={{ height: "48%" }}
                />

                <span>
                  Mon
                </span>

              </div>


              <div className="bar-group">

                <div
                  className="bar"
                  style={{ height: "65%" }}
                />

                <span>
                  Tue
                </span>

              </div>


              <div className="bar-group">

                <div
                  className="bar"
                  style={{ height: "55%" }}
                />

                <span>
                  Wed
                </span>

              </div>


              <div className="bar-group">

                <div
                  className="bar"
                  style={{ height: "78%" }}
                />

                <span>
                  Thu
                </span>

              </div>


              <div className="bar-group">

                <div
                  className="bar"
                  style={{ height: "92%" }}
                />

                <span>
                  Fri
                </span>

              </div>


              <div className="bar-group">

                <div
                  className="bar"
                  style={{ height: "63%" }}
                />

                <span>
                  Sat
                </span>

              </div>


              <div className="bar-group">

                <div
                  className="bar"
                  style={{ height: "86%" }}
                />

                <span>
                  Sun
                </span>

              </div>

            </div>

          </div>

        </div>



        {/* =========================
            DEPARTMENTS
        ========================= */}

        <div className="card departments-card">


          <div className="card-header">

            <div>

              <h2>
                Departments
              </h2>

              <p>
                Patient distribution
              </p>

            </div>


            <span className="more">
              •••
            </span>

          </div>



          {/* DONUT */}

          <div className="donut-container">

            <div className="donut">

              <div className="donut-center">

                <strong>
                  1,248
                </strong>

                <span>
                  Total
                </span>

              </div>

            </div>

          </div>



          {/* DEPARTMENT LIST */}

          <div className="department-list">


            <div>

              <span className="dot blue-dot"></span>

              Cardiology

              <strong>
                32%
              </strong>

            </div>


            <div>

              <span className="dot pink-dot"></span>

              Neurology

              <strong>
                24%
              </strong>

            </div>


            <div>

              <span className="dot orange-dot"></span>

              Orthopedics

              <strong>
                18%
              </strong>

            </div>


            <div>

              <span className="dot gray-dot"></span>

              Others

              <strong>
                26%
              </strong>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}



/* =========================================================
   STAT CARD
========================================================= */

function StatCard({
  icon,
  title,
  value,
  change,
  description,
  color,
}) {

  return (

    <div className="stat-card">


      <div className="stat-top">


        <div className={`stat-icon ${color}`}>

          {icon}

        </div>


        <span className={`change ${color}`}>

          {change}

        </span>

      </div>


      <p>
        {title}
      </p>


      <h2>
        {value}
      </h2>


      <span className="description">

        {description}

      </span>

    </div>

  );

}

/* =========================================================
   PATIENTS MODULE
========================================================= */

function Patients() {

  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);

    const [patients, setPatients] = useState([]);
    // Fetch patients from backend
  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/patients"
        );

        const data = await response.json();

        const formattedPatients = data.patients.map((patient) => ({
          id: patient.patientId,
          name: patient.fullName,
          age: new Date().getFullYear() -
            new Date(patient.dateOfBirth).getFullYear(),
          gender: patient.gender,
          phone: patient.phone,
          department: patient.department || "General Medicine",
          doctor: patient.assignedDoctor || "Not Assigned",
          status: "Active",
        }));

        setPatients(formattedPatients);

      } catch (error) {
        console.error("Failed to fetch patients:", error);
      }
    };

    fetchPatients();
  }, []);

  const [formData, setFormData] = useState({
  fullName: "",
  dob: "",
  gender: "",
  bloodGroup: "",
  phone: "",
  email: "",
  address: "",
  department: "",
  doctor: "",
});

   


  const filteredPatients = patients.filter((patient) =>
    patient.name.toLowerCase().includes(search.toLowerCase()) ||
    patient.id.toLowerCase().includes(search.toLowerCase()) ||
    patient.phone.includes(search)
  );

   const handleAddPatient = async () => {
  // Check required fields
  if (
    !formData.fullName ||
    !formData.dob ||
    !formData.gender ||
    !formData.phone
  ) {
    alert(
      "Please fill in Full Name, Date of Birth, Gender and Phone Number."
    );
    return;
  }

  // Generate patient ID
  const newPatientId = `P-${1001 + patients.length}`;

  // Data to send to backend
  const patientData = {
    patientId: newPatientId,
    fullName: formData.fullName,
    dateOfBirth: formData.dob,
    gender: formData.gender,
    bloodGroup: formData.bloodGroup || undefined,
    phone: formData.phone,
    email: formData.email || undefined,
    address: formData.address || undefined,
    department:
      formData.department || "General Medicine",
    assignedDoctor:
      formData.doctor || "Not Assigned",
  };

  try {
    // Send patient to backend
    const response = await fetch(
      "http://localhost:5000/api/patients",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(patientData),
      }
    );

    const data = await response.json();

    // Check for backend error
    if (!response.ok) {
      alert(
        data.message || "Failed to register patient."
      );
      return;
    }

    // Convert backend patient to frontend format
    const savedPatient = data.patient;

    const birthDate = new Date(
      savedPatient.dateOfBirth
    );
    const today = new Date();

    let age =
      today.getFullYear() -
      birthDate.getFullYear();

    const monthDifference =
      today.getMonth() -
      birthDate.getMonth();

    if (
      monthDifference < 0 ||
      (monthDifference === 0 &&
        today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    const newPatient = {
      id: savedPatient.patientId,
      name: savedPatient.fullName,
      age: age,
      gender: savedPatient.gender,
      phone: savedPatient.phone,
      department:
        savedPatient.department ||
        "General Medicine",
      doctor:
        savedPatient.assignedDoctor ||
        "Not Assigned",
      status: "Active",
    };

    // Add saved patient to the screen
    setPatients((currentPatients) => [
      newPatient,
      ...currentPatients,
    ]);

    // Clear form
    setFormData({
      fullName: "",
      dob: "",
      gender: "",
      bloodGroup: "",
      phone: "",
      email: "",
      address: "",
      department: "",
      doctor: "",
    });

    // Close form
    setShowForm(false);

    alert(
      "Patient registered successfully! 🏥"
    );

  } catch (error) {
    console.error(
      "Error registering patient:",
      error
    );

    alert(
      "Cannot connect to the backend. Make sure your server is running."
    );
  }
};


  return (

    <section className="content">


      {/* PAGE HEADER */}

      <div className="patients-header">

        <div>

          <p className="eyebrow">
            PATIENT MANAGEMENT
          </p>

          <h1>
            Patients
          </h1>

          <p className="subtitle">
            Manage patient information and medical records.
          </p>

        </div>


        <button
  className="add-patient-btn"
  onClick={() => setShowForm(true)}
>
  + Add New Patient
</button>

      </div>
{showForm && (
  <div className="patient-form-card">

    <div className="form-header">
      <div>
        <h2>Register New Patient</h2>
        <p>Enter the patient's information below</p>
      </div>

      <button
        className="close-form"
        onClick={() => setShowForm(false)}
      >
        ×
      </button>
    </div>
{/* 👇 ADD FORM HERE */}

   
    <div className="patient-form">

      <div className="form-group">
        <label>Full Name</label>
        <input
  type="text"
  name="fullName"
  placeholder="Enter full name"
  value={formData.fullName}
  onChange={(e) =>
    setFormData({
      ...formData,
      fullName: e.target.value,
    })
  }
/>
      </div>

      <div className="form-group">
        <label>Date of Birth</label>
        <input
  type="date"
  name="dob"
  value={formData.dob}
  onChange={(e) =>
    setFormData({
      ...formData,
      dob: e.target.value,
    })
  }
/>
      </div>

      <div className="form-group">
        <label>Gender</label>

        <select
  value={formData.gender}
  onChange={(e) =>
    setFormData({
      ...formData,
      gender: e.target.value,
    })
  }
>
  <option value="">Select Gender</option>
  <option value="Male">Male</option>
  <option value="Female">Female</option>
  <option value="Other">Other</option>
</select> 
      </div>

      <div className="form-group">
        <label>Blood Group</label>
        <select>
          <option>Select Blood Group</option>
          <option>A+</option>
          <option>A-</option>
          <option>B+</option>
          <option>B-</option>
          <option>AB+</option>
          <option>AB-</option>
          <option>O+</option>
          <option>O-</option>
        </select>
      </div>

      <div className="form-group">
        <label>Phone Number</label>
         <input
  type="tel"
  name="phone"
  placeholder="Enter phone number"
  value={formData.phone}
  onChange={(e) =>
    setFormData({
      ...formData,
      phone: e.target.value,
    })
  }
/>
      </div>

      <div className="form-group">
        <label>Email</label>
        <input type="email" placeholder="Enter email address" />
      </div>

      <div className="form-group full-width">
        <label>Address</label>
        <textarea rows="3" placeholder="Enter patient address"></textarea>
      </div>

      <div className="form-group">
        <label>Department</label>
        <select
  value={formData.department}
  onChange={(e) =>
    setFormData({
      ...formData,
      department: e.target.value,
    })
  }
>
  <option value="">Select Department</option>
  <option value="Cardiology">Cardiology</option>
  <option value="Neurology">Neurology</option>
  <option value="Orthopedics">Orthopedics</option>
  <option value="General Medicine">General Medicine</option>
</select>
      </div>

      <div className="form-group">
        <label>Assigned Doctor</label>
         <select
  value={formData.doctor}
  onChange={(e) =>
    setFormData({
      ...formData,
      doctor: e.target.value,
    })
  }
>
  <option value="">Select Doctor</option>
  <option value="Dr. Anil Kumar">Dr. Anil Kumar</option>
  <option value="Dr. Sneha Reddy">Dr. Sneha Reddy</option>
  <option value="Dr. Ravi Teja">Dr. Ravi Teja</option>
  <option value="Dr. Priya Rao">Dr. Priya Rao</option>
</select>
      </div>

    </div>

    <div className="form-actions">
      <button
        className="cancel-btn"
        onClick={() => setShowForm(false)}
      >
        Cancel
      </button>

      <button
  className="register-btn"
  onClick={handleAddPatient}
>
  Register Patient
</button> 
    </div>

  </div>
)}


      {/* PATIENT SUMMARY */}

      <div className="patient-summary">


        <div className="summary-box">

          <div className="summary-icon blue">
            <Users size={21} />
          </div>

          <div>

            <span>
              Total Patients
            </span>

            <strong>
              1,248
            </strong>

          </div>

        </div>


        <div className="summary-box">

          <div className="summary-icon green">
            <UserRound size={21} />
          </div>

          <div>

            <span>
              Active Patients
            </span>

            <strong>
              1,105
            </strong>

          </div>

        </div>


        <div className="summary-box">

          <div className="summary-icon orange">
            <Bed size={21} />
          </div>

          <div>

            <span>
              Admitted
            </span>

            <strong>
              120
            </strong>

          </div>

        </div>


        <div className="summary-box">

          <div className="summary-icon purple">
            <CalendarDays size={21} />
          </div>

          <div>

            <span>
              New Today
            </span>

            <strong>
              18
            </strong>

          </div>

        </div>

      </div>



      {/* PATIENT TABLE */}

      <div className="card patients-table-card">


        {/* TABLE HEADER */}

        <div className="patients-table-header">

          <div>

            <h2>
              Patient List
            </h2>

            <p>
              All registered patients
            </p>

          </div>


          <div className="patient-search">

            <Search size={18} />

            <input
              type="text"
              placeholder="Search patient..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

          </div>

        </div>



        {/* TABLE */}

        <div className="table-container">

          <table>

            <thead>

              <tr>

                <th>
                  Patient ID
                </th>

                <th>
                  Patient
                </th>

                <th>
                  Age / Gender
                </th>

                <th>
                  Phone
                </th>

                <th>
                  Department
                </th>

                <th>
                  Doctor
                </th>

                <th>
                  Status
                </th>

                <th>
                  Action
                </th>

              </tr>

            </thead>


            <tbody>

              {filteredPatients.map((patient) => (

                <tr key={patient.id}>


                  {/* ID */}

                  <td>

                    <strong className="patient-id">
                      {patient.id}
                    </strong>

                  </td>


                  {/* NAME */}

                  <td>

                    <div className="patient-name">

                      <div className="patient-avatar">
                        {patient.name.charAt(0)}
                      </div>

                      <div>

                        <strong>
                          {patient.name}
                        </strong>

                        <span>
                          Patient
                        </span>

                      </div>

                    </div>

                  </td>


                  {/* AGE */}

                  <td>
                    {patient.age} / {patient.gender}
                  </td>


                  {/* PHONE */}

                  <td>
                    {patient.phone}
                  </td>


                  {/* DEPARTMENT */}

                  <td>
                    {patient.department}
                  </td>


                  {/* DOCTOR */}

                  <td>
                    {patient.doctor}
                  </td>


                  {/* STATUS */}

                  <td>

                    <span
                      className={`patient-status ${
                        patient.status === "Active"
                          ? "status-active"
                          : "status-discharged"
                      }`}
                    >
                      {patient.status}
                    </span>

                  </td>


                  {/* ACTION */}

                  <td>

                     <button
                       className="view-btn"
                        onClick={() => setSelectedPatient(patient)}>
                         View
                       </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>


          {filteredPatients.length === 0 && (

            <div className="no-patients">
              No patients found.
            </div>
             )}

          {selectedPatient && (
  <div className="patient-details-overlay">

    <div className="patient-details-card">

      {/* HEADER */}

      <div className="patient-details-header">

        <div>
          <p className="eyebrow">
            PATIENT PROFILE
          </p>

          <h2>
            Patient Details
          </h2>
        </div>

        <button
          className="close-details"
          onClick={() => setSelectedPatient(null)}
        >
          ×
        </button>

      </div>


      {/* PATIENT BASIC INFO */}

      <div className="patient-profile-section">

        <div className="large-patient-avatar">
          {selectedPatient.name.charAt(0)}
        </div>

        <div>

          <h3>
            {selectedPatient.name}
          </h3>

          <p>
            Patient ID: {selectedPatient.id}
          </p>

          <span className="patient-status status-active">
            {selectedPatient.status}
          </span>

        </div>

      </div>


      {/* INFORMATION GRID */}

      <div className="patient-info-grid">

        <div className="patient-info-item">
          <span>Age</span>
          <strong>{selectedPatient.age} years</strong>
        </div>

        <div className="patient-info-item">
          <span>Gender</span>
          <strong>{selectedPatient.gender}</strong>
        </div>

        <div className="patient-info-item">
          <span>Phone</span>
          <strong>{selectedPatient.phone}</strong>
        </div>

        <div className="patient-info-item">
          <span>Department</span>
          <strong>{selectedPatient.department}</strong>
        </div>

        <div className="patient-info-item">
          <span>Assigned Doctor</span>
          <strong>{selectedPatient.doctor}</strong>
        </div>

        <div className="patient-info-item">
          <span>Status</span>
          <strong>{selectedPatient.status}</strong>
        </div>

      </div>


      {/* MEDICAL SECTIONS */}

      <div className="patient-medical-sections">

        <div className="medical-box">
          <h3>Appointments</h3>
          <p>No appointments recorded yet.</p>
        </div>

        <div className="medical-box">
          <h3>Prescriptions</h3>
          <p>No prescriptions recorded yet.</p>
        </div>

        <div className="medical-box">
          <h3>Lab Reports</h3>
          <p>No lab reports recorded yet.</p>
        </div>

        <div className="medical-box">
          <h3>Billing</h3>
          <p>No billing records available.</p>
        </div>

      </div>


      {/* CLOSE */}

      <div className="patient-details-actions">

        <button
          className="cancel-btn"
          onClick={() => setSelectedPatient(null)}
        >
          Close
        </button>

      </div>

    </div>

  </div>
)}   

        </div>

      </div>

    </section>

  );

}

/* =========================================================
   APPOINTMENTS MODULE
========================================================= */

function Appointments() {

  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
  const fetchAppointments = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/appointments"
      );

      const data = await response.json();

      const formattedAppointments = data.appointments.map(
        (appointment) => ({
          id: appointment.appointmentId,
          patient: appointment.patient,
          doctor: appointment.doctor,
          department: appointment.department,
          date: appointment.date.slice(0, 10),
          time: appointment.time,
          reason:
            appointment.reason ||
            "General Consultation",
          status: appointment.status,
        })
      );

      setAppointments(formattedAppointments);

    } catch (error) {
      console.error(
        "Failed to fetch appointments:",
        error
      );
    }
  };

  fetchAppointments();
}, []);

  const [formData, setFormData] = useState({
    patient: "",
    doctor: "",
    department: "",
    date: "",
    time: "",
    reason: "",
  });

  const filteredAppointments = appointments.filter((appointment) =>
    appointment.patient
      .toLowerCase()
      .includes(search.toLowerCase()) ||
    appointment.id
      .toLowerCase()
      .includes(search.toLowerCase()) ||
    appointment.doctor
      .toLowerCase()
      .includes(search.toLowerCase())
  );

   const handleBookAppointment = async () => {

  // Check required fields
  if (
    !formData.patient ||
    !formData.doctor ||
    !formData.department ||
    !formData.date ||
    !formData.time
  ) {
    alert("Please fill all required appointment details.");
    return;
  }

  // Generate next appointment ID
  const appointmentNumbers = appointments
    .map((appointment) =>
      parseInt(
        appointment.id.replace("APT-", ""),
        10
      )
    )
    .filter((number) => !isNaN(number));

  const nextNumber =
    appointmentNumbers.length > 0
      ? Math.max(...appointmentNumbers) + 1
      : 1001;

  const newAppointmentId = `APT-${nextNumber}`;

  // Data to send to backend
  const appointmentData = {
    appointmentId: newAppointmentId,
    patient: formData.patient,
    doctor: formData.doctor,
    department: formData.department,
    date: formData.date,
    time: formData.time,
    reason:
      formData.reason || "General Consultation",
    status: "Confirmed",
  };

  try {

    const response = await fetch(
      "http://localhost:5000/api/appointments",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(appointmentData),
      }
    );

    const data = await response.json();

    // Backend error
    if (!response.ok) {
      alert(
        data.message ||
        "Failed to book appointment."
      );
      return;
    }

    // Appointment saved in MongoDB
    const savedAppointment = data.appointment;

    // Convert backend data into frontend format
    const newAppointment = {
      id: savedAppointment.appointmentId,
      patient: savedAppointment.patient,
      doctor: savedAppointment.doctor,
      department: savedAppointment.department,
      date: savedAppointment.date.slice(0, 10),
      time: savedAppointment.time,
      reason:
        savedAppointment.reason ||
        "General Consultation",
      status: savedAppointment.status,
    };

    // Add appointment to React list
    setAppointments((currentAppointments) => [
      newAppointment,
      ...currentAppointments,
    ]);

    // Clear form
    setFormData({
      patient: "",
      doctor: "",
      department: "",
      date: "",
      time: "",
      reason: "",
    });

    // Close form
    setShowForm(false);

    alert(
      "Appointment booked successfully! 📅"
    );

  } catch (error) {

    console.error(
      "Error booking appointment:",
      error
    );

    alert(
      "Cannot connect to the backend. Make sure your server is running."
    );
  }
};

  return (

    <section className="content">

      {/* PAGE HEADER */}

      <div className="patients-header">

        <div>

          <p className="eyebrow">
            APPOINTMENT MANAGEMENT
          </p>

          <h1>
            Appointments
          </h1>

          <p className="subtitle">
            Schedule and manage patient appointments.
          </p>

        </div>

        <button
          className="add-patient-btn"
          onClick={() => setShowForm(true)}
        >
          + Book Appointment
        </button>

      </div>


      {/* BOOK APPOINTMENT FORM */}

      {showForm && (

        <div className="patient-form-card">

          <div className="form-header">

            <div>

              <h2>
                Book New Appointment
              </h2>

              <p>
                Enter appointment details below
              </p>

            </div>

            <button
              className="close-form"
              onClick={() => setShowForm(false)}
            >
              ×
            </button>

          </div>


          <div className="patient-form">

            {/* PATIENT */}

            <div className="form-group">

              <label>
                Patient *
              </label>

              <select
                value={formData.patient}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    patient: e.target.value,
                  })
                }
              >

                <option value="">
                  Select Patient
                </option>

                <option value="Rahul Kumar">
                  Rahul Kumar
                </option>

                <option value="Priya Sharma">
                  Priya Sharma
                </option>

                <option value="Suresh Reddy">
                  Suresh Reddy
                </option>

                <option value="Lakshmi Devi">
                  Lakshmi Devi
                </option>

                <option value="Arjun Reddy">
                  Arjun Reddy
                </option>

                <option value="Anjali Sharma">
                  Anjali Sharma
                </option>

              </select>

            </div>


            {/* DOCTOR */}

            <div className="form-group">

              <label>
                Doctor *
              </label>

              <select
                value={formData.doctor}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    doctor: e.target.value,
                  })
                }
              >

                <option value="">
                  Select Doctor
                </option>

                <option value="Dr. Anil Kumar">
                  Dr. Anil Kumar
                </option>

                <option value="Dr. Sneha Reddy">
                  Dr. Sneha Reddy
                </option>

                <option value="Dr. Ravi Teja">
                  Dr. Ravi Teja
                </option>

                <option value="Dr. Priya Rao">
                  Dr. Priya Rao
                </option>

              </select>

            </div>


            {/* DEPARTMENT */}

            <div className="form-group">

              <label>
                Department *
              </label>

              <select
                value={formData.department}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    department: e.target.value,
                  })
                }
              >

                <option value="">
                  Select Department
                </option>

                <option value="Cardiology">
                  Cardiology
                </option>

                <option value="Neurology">
                  Neurology
                </option>

                <option value="Orthopedics">
                  Orthopedics
                </option>

                <option value="General Medicine">
                  General Medicine
                </option>

              </select>

            </div>


            {/* DATE */}

            <div className="form-group">

              <label>
                Appointment Date *
              </label>

              <input
                type="date"
                value={formData.date}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    date: e.target.value,
                  })
                }
              />

            </div>


            {/* TIME */}

            <div className="form-group">

              <label>
                Appointment Time *
              </label>

              <input
                type="time"
                value={formData.time}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    time: e.target.value,
                  })
                }
              />

            </div>


            {/* REASON */}

            <div className="form-group">

              <label>
                Reason for Visit
              </label>

              <input
                type="text"
                placeholder="e.g. Regular checkup"
                value={formData.reason}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    reason: e.target.value,
                  })
                }
              />

            </div>

          </div>


          {/* FORM ACTIONS */}

          <div className="form-actions">

            <button
              className="cancel-btn"
              onClick={() => setShowForm(false)}
            >
              Cancel
            </button>

            <button
              className="register-btn"
              onClick={handleBookAppointment}
            >
              Book Appointment
            </button>

          </div>

        </div>

      )}


      {/* SUMMARY */}

      <div className="patient-summary">

        <div className="summary-box">

          <div className="summary-icon blue">
            <CalendarDays size={21} />
          </div>

          <div>

            <span>
              Total Appointments
            </span>

            <strong>
              {appointments.length}
            </strong>

          </div>

        </div>


        <div className="summary-box">

          <div className="summary-icon green">
            <CalendarDays size={21} />
          </div>

          <div>

            <span>
              Confirmed
            </span>

            <strong>
              {appointments.filter(
                (a) => a.status === "Confirmed"
              ).length}
            </strong>

          </div>

        </div>


        <div className="summary-box">

          <div className="summary-icon orange">
            <CalendarDays size={21} />
          </div>

          <div>

            <span>
              Pending
            </span>

            <strong>
              {appointments.filter(
                (a) => a.status === "Pending"
              ).length}
            </strong>

          </div>

        </div>


        <div className="summary-box">

          <div className="summary-icon purple">
            <CalendarDays size={21} />
          </div>

          <div>

            <span>
              Today's Appointments
            </span>

            <strong>
              {appointments.filter(
                (a) => a.date === "2026-09-26"
              ).length}
            </strong>

          </div>

        </div>

      </div>


      {/* APPOINTMENT TABLE */}

      <div className="card patients-table-card">

        <div className="patients-table-header">

          <div>

            <h2>
              Appointment List
            </h2>

            <p>
              All scheduled appointments
            </p>

          </div>


          <div className="patient-search">

            <Search size={18} />

            <input
              type="text"
              placeholder="Search appointment..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

          </div>

        </div>


        <div className="table-container">

          <table>

            <thead>

              <tr>

                <th>
                  Appointment ID
                </th>

                <th>
                  Patient
                </th>

                <th>
                  Doctor
                </th>

                <th>
                  Department
                </th>

                <th>
                  Date
                </th>

                <th>
                  Time
                </th>

                <th>
                  Status
                </th>

                <th>
                  Action
                </th>

              </tr>

            </thead>


            <tbody>

              {filteredAppointments.map(
                (appointment) => (

                  <tr key={appointment.id}>

                    <td>

                      <strong className="patient-id">
                        {appointment.id}
                      </strong>

                    </td>


                    <td>

                      <div className="patient-name">

                        <div className="patient-avatar">
                          {appointment.patient.charAt(0)}
                        </div>

                        <div>

                          <strong>
                            {appointment.patient}
                          </strong>

                          <span>
                            {appointment.reason}
                          </span>

                        </div>

                      </div>

                    </td>


                    <td>
                      {appointment.doctor}
                    </td>


                    <td>
                      {appointment.department}
                    </td>


                    <td>
                      {appointment.date}
                    </td>


                    <td>
                      {appointment.time}
                    </td>


                    <td>

                      <span
                        className={`patient-status ${
                          appointment.status === "Confirmed"
                            ? "status-active"
                            : "status-discharged"
                        }`}
                      >
                        {appointment.status}
                      </span>

                    </td>


                    <td>

                       <button
  className="view-btn"
  onClick={() => setSelectedAppointment(appointment)}
>
  View
</button>

                    </td>

                  </tr>

                )
              )}

            </tbody>

          </table>


          {filteredAppointments.length === 0 && (

            <div className="no-patients">
              No appointments found.
            </div>

          )}

          {selectedAppointment && (
  <div className="appointment-details-overlay">

    <div className="appointment-details-card">

      {/* Header */}
      <div className="appointment-details-header">

        <div>
          <h2>Appointment Details</h2>
          <p>
            Complete information about this appointment
          </p>
        </div>

        <button
          className="close-details"
          onClick={() => setSelectedAppointment(null)}
        >
          ×
        </button>

      </div>

      {/* Appointment ID + Status */}
      <div className="appointment-profile">

        <div className="appointment-avatar">
          📅
        </div>

        <div>
          <h3>{selectedAppointment.id}</h3>

          <span
            className={
              selectedAppointment.status === "Confirmed"
                ? "details-status confirmed"
                : "details-status pending"
            }
          >
            {selectedAppointment.status}
          </span>
        </div>

      </div>

      {/* Information */}
      <div className="appointment-info-grid">

        <div className="appointment-info-item">
          <span>Patient</span>
          <strong>{selectedAppointment.patient}</strong>
        </div>

        <div className="appointment-info-item">
          <span>Doctor</span>
          <strong>{selectedAppointment.doctor}</strong>
        </div>

        <div className="appointment-info-item">
          <span>Department</span>
          <strong>{selectedAppointment.department}</strong>
        </div>

        <div className="appointment-info-item">
          <span>Date</span>
          <strong>{selectedAppointment.date}</strong>
        </div>

        <div className="appointment-info-item">
          <span>Time</span>
          <strong>{selectedAppointment.time}</strong>
        </div>

        <div className="appointment-info-item">
          <span>Reason</span>
          <strong>{selectedAppointment.reason}</strong>
        </div>

      </div>

      {/* Footer */}
      <div className="appointment-details-footer">

        <button
          className="cancel-btn"
          onClick={() => setSelectedAppointment(null)}
        >
          Close
        </button>

      </div>

    </div>

  </div>
)}

        </div>

      </div>

    </section>

  );
}

function Doctors() {
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  
  

  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
  const fetchDoctors = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/doctors"
      );

      const data = await response.json();

      const formattedDoctors = data.doctors.map(
        (doctor) => ({
          id: doctor.doctorId,
          name: doctor.name,
          specialty: doctor.specialty,
          department: doctor.department,
          phone: doctor.phone,
          email: doctor.email || "",
          experience: doctor.experience || "0 years",
          status: doctor.status,
          appointments: doctor.appointments || 0,
        })
      );

      setDoctors(formattedDoctors);

    } catch (error) {
      console.error(
        "Failed to fetch doctors:",
        error
      );
    }
  };

  fetchDoctors();
}, []);

  const [formData, setFormData] = useState({
    name: "",
    specialty: "",
    department: "",
    phone: "",
    email: "",
    experience: "",
  });

  const filteredDoctors = doctors.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(search.toLowerCase()) ||
      doctor.id.toLowerCase().includes(search.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(search.toLowerCase()) ||
      doctor.department.toLowerCase().includes(search.toLowerCase())
  );

  const handleAddDoctor = async (e) => {
  e.preventDefault();

  // Check required fields
  if (
    !formData.name ||
    !formData.specialty ||
    !formData.department ||
    !formData.phone
  ) {
    alert("Please fill all required fields.");
    return;
  }

  // Generate next Doctor ID
  const doctorNumbers = doctors
    .map((doctor) =>
      parseInt(
        doctor.id.replace("DOC-", ""),
        10
      )
    )
    .filter((number) => !isNaN(number));

  const nextNumber =
    doctorNumbers.length > 0
      ? Math.max(...doctorNumbers) + 1
      : 1001;

  const newDoctorId = `DOC-${nextNumber}`;

  // Data to send to backend
  const doctorData = {
    doctorId: newDoctorId,
    name: formData.name,
    specialty: formData.specialty,
    department: formData.department,
    phone: formData.phone,
    email: formData.email || undefined,
    experience:
      formData.experience || "0 years",
    status: "Available",
    appointments: 0,
  };

  try {
    const response = await fetch(
      "http://localhost:5000/api/doctors",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(doctorData),
      }
    );

    const data = await response.json();

    // Backend error
    if (!response.ok) {
      alert(
        data.message ||
          "Failed to add doctor."
      );
      return;
    }

    // Doctor saved in MongoDB
    const savedDoctor = data.doctor;

    // Convert backend data to frontend format
    const newDoctor = {
      id: savedDoctor.doctorId,
      name: savedDoctor.name,
      specialty: savedDoctor.specialty,
      department: savedDoctor.department,
      phone: savedDoctor.phone,
      email: savedDoctor.email || "",
      experience:
        savedDoctor.experience || "0 years",
      status: savedDoctor.status,
      appointments:
        savedDoctor.appointments || 0,
    };

    // Add to React list
    setDoctors((currentDoctors) => [
      newDoctor,
      ...currentDoctors,
    ]);

    // Clear form
    setFormData({
      name: "",
      specialty: "",
      department: "",
      phone: "",
      email: "",
      experience: "",
    });

    // Close form
    setShowForm(false);

    alert(
      "Doctor added successfully! 👨‍⚕️"
    );

  } catch (error) {
    console.error(
      "Error adding doctor:",
      error
    );

    alert(
      "Cannot connect to the backend. Make sure your server is running."
    );
  }
};

  const totalDoctors = doctors.length;
  const availableDoctors = doctors.filter(
    (doctor) => doctor.status === "Available"
  ).length;
  const busyDoctors = doctors.filter(
    (doctor) => doctor.status === "Busy"
  ).length;

  const departments = new Set(
    doctors.map((doctor) => doctor.department)
  ).size;

  return (
    <section className="page-content">

      {/* Page Header */}
      <div className="patients-header">
        <div>
          <h1>Doctors</h1>
          <p>Manage hospital doctors and their information</p>
        </div>

        <button
          className="add-patient-btn"
          onClick={() => setShowForm(true)}
        >
          + Add New Doctor
        </button>
      </div>

      {/* Add Doctor Form */}
      {showForm && (
        <div className="patient-form-card">

          <div className="form-header">
            <div>
              <h2>Add New Doctor</h2>
              <p>Enter doctor information below</p>
            </div>

            <button
              className="close-form"
              onClick={() => setShowForm(false)}
            >
              ×
            </button>
          </div>

          <form className="patient-form" onSubmit={handleAddDoctor}>

            <div className="form-group">
              <label>Doctor Name *</label>
              <input
                type="text"
                placeholder="Enter doctor name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name: e.target.value,
                  })
                }
              />
            </div>

            <div className="form-group">
              <label>Specialty *</label>
              <input
                type="text"
                placeholder="e.g. Cardiology"
                value={formData.specialty}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    specialty: e.target.value,
                  })
                }
              />
            </div>

            <div className="form-group">
              <label>Department *</label>
              <select
                value={formData.department}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    department: e.target.value,
                  })
                }
              >
                <option value="">Select Department</option>
                <option value="Cardiology">Cardiology</option>
                <option value="Neurology">Neurology</option>
                <option value="Orthopedics">Orthopedics</option>
                <option value="General Medicine">
                  General Medicine
                </option>
                <option value="Pediatrics">Pediatrics</option>
                <option value="Dermatology">Dermatology</option>
              </select>
            </div>

            <div className="form-group">
              <label>Phone *</label>
              <input
                type="tel"
                placeholder="Enter phone number"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    phone: e.target.value,
                  })
                }
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="doctor@hospital.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  })
                }
              />
            </div>

            <div className="form-group">
              <label>Experience</label>
              <input
                type="text"
                placeholder="e.g. 10 years"
                value={formData.experience}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    experience: e.target.value,
                  })
                }
              />
            </div>

            <div className="form-actions">

              <button
                type="button"
                className="cancel-btn"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="register-btn"
              >
                Add Doctor
              </button>

            </div>

          </form>
        </div>
      )}

      {/* Summary Cards */}
      <div className="patients-summary">

        <div className="summary-card">
          <div className="summary-icon">👨‍⚕️</div>
          <div>
            <span>Total Doctors</span>
            <strong>{totalDoctors}</strong>
          </div>
        </div>

        <div className="summary-card">
          <div className="summary-icon">🟢</div>
          <div>
            <span>Available</span>
            <strong>{availableDoctors}</strong>
          </div>
        </div>

        <div className="summary-card">
          <div className="summary-icon">🟠</div>
          <div>
            <span>Busy</span>
            <strong>{busyDoctors}</strong>
          </div>
        </div>

        <div className="summary-card">
          <div className="summary-icon">🏥</div>
          <div>
            <span>Departments</span>
            <strong>{departments}</strong>
          </div>
        </div>

      </div>

      {/* Doctors Table */}
      <div className="patients-table-card">

        <div className="table-header">

          <div>
            <h2>Doctor List</h2>
            <p>View and manage registered doctors</p>
          </div>

          <div className="search-box">
            <Search size={17} />
            <input
              type="text"
              placeholder="Search doctors..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

        </div>

        <div className="table-container">

          <table>

            <thead>
              <tr>
                <th>Doctor ID</th>
                <th>Doctor</th>
                <th>Specialty</th>
                <th>Department</th>
                <th>Phone</th>
                <th>Appointments</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {filteredDoctors.map((doctor) => (
                <tr key={doctor.id}>

                  <td>
                    <strong>{doctor.id}</strong>
                  </td>

                  <td>
                    <strong>{doctor.name}</strong>
                  </td>

                  <td>{doctor.specialty}</td>

                  <td>{doctor.department}</td>

                  <td>{doctor.phone}</td>

                  <td>
                    <strong>{doctor.appointments}</strong>
                  </td>

                  <td>
                    <span
                      className={
                        doctor.status === "Available"
                          ? "status-active"
                          : "status-pending"
                      }
                    >
                      {doctor.status}
                    </span>
                  </td>

                  <td>
                    <button
                      className="view-btn"
                      onClick={() => setSelectedDoctor(doctor)}
                    >
                      View
                    </button>
                  </td>

                </tr>
              ))}

            </tbody>

          </table>

          {filteredDoctors.length === 0 && (
            <div className="no-patients">
              <h3>No doctors found</h3>
              <p>Try a different search.</p>
            </div>
          )}

        </div>
      </div>

      {/* Doctor Details */}
      {selectedDoctor && (
        <div className="patient-details-overlay">

          <div className="patient-details-card">

            <div className="patient-details-header">

              <div>
                <h2>{selectedDoctor.name}</h2>
                <p>{selectedDoctor.specialty}</p>
              </div>

              <button
                className="details-close"
                onClick={() => setSelectedDoctor(null)}
              >
                ×
              </button>

            </div>

            <div className="patient-profile">

              <div className="profile-avatar">
                👨‍⚕️
              </div>

              <div>
                <h3>{selectedDoctor.name}</h3>
                <p>{selectedDoctor.id}</p>
              </div>

              <span
                className={
                  selectedDoctor.status === "Available"
                    ? "status-active"
                    : "status-pending"
                }
              >
                {selectedDoctor.status}
              </span>

            </div>

            <div className="patient-info-grid">

              <div>
                <span>Specialty</span>
                <strong>{selectedDoctor.specialty}</strong>
              </div>

              <div>
                <span>Department</span>
                <strong>{selectedDoctor.department}</strong>
              </div>

              <div>
                <span>Phone</span>
                <strong>{selectedDoctor.phone}</strong>
              </div>

              <div>
                <span>Email</span>
                <strong>{selectedDoctor.email || "Not provided"}</strong>
              </div>

              <div>
                <span>Experience</span>
                <strong>{selectedDoctor.experience}</strong>
              </div>

              <div>
                <span>Total Appointments</span>
                <strong>{selectedDoctor.appointments}</strong>
              </div>

            </div>

            <div className="medical-section">
              <h3>Today's Schedule</h3>
              <p>
                Appointment schedule will appear here when the
                appointment system is connected.
              </p>
            </div>

            <div className="medical-section">
              <h3>Patients</h3>
              <p>
                Doctor's assigned patients will appear here.
              </p>
            </div>

            <button
              className="register-btn"
              onClick={() => setSelectedDoctor(null)}
            >
              Close
            </button>

          </div>
        </div>
      )}

    </section>
  );
}

function Consultation() {
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedConsultation, setSelectedConsultation] = useState(null);

  const [consultations, setConsultations] = useState([]);

  const [formData, setFormData] = useState({
    patient: "",
    patientId: "",
    doctor: "",
    department: "",
    complaint: "",
    symptoms: "",
    temperature: "",
    bloodPressure: "",
    heartRate: "",
    diagnosis: "",
    prescription: "",
    notes: "",
    followUp: "",
  });

  useEffect(() => {
  const fetchConsultations = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/consultations"
      );

      const data = await response.json();

      const formattedConsultations =
        data.consultations.map((consultation) => ({
          id: consultation.consultationId,
          patient: consultation.patient,
          patientId: consultation.patientId || "N/A",
          doctor: consultation.doctor,
          department:
            consultation.department || "General Medicine",
          date: consultation.date.slice(0, 10),
          complaint:
            consultation.complaint || "N/A",
          symptoms:
            consultation.symptoms || "",
          diagnosis:
            consultation.diagnosis || "",
          status:
            consultation.status || "Completed",
          temperature:
            consultation.temperature || "",
          bloodPressure:
            consultation.bloodPressure || "",
          heartRate:
            consultation.heartRate || "",
          prescription:
            consultation.prescription ||
            consultation.treatment ||
            "",
          notes:
            consultation.notes || "",
          followUp:
            consultation.followUpDate
              ? consultation.followUpDate.slice(0, 10)
              : "",
        }));

      setConsultations(formattedConsultations);
    } catch (error) {
      console.error(
        "Failed to fetch consultations:",
        error
      );
    }
  };

  fetchConsultations();
}, []);

  const filteredConsultations = consultations.filter(
    (consultation) =>
      consultation.patient
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      consultation.patientId
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      consultation.doctor
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      consultation.diagnosis
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  const handleSaveConsultation = async (e) => {
  e.preventDefault();

  if (
    !formData.patient ||
    !formData.doctor ||
    !formData.complaint ||
    !formData.diagnosis
  ) {
    alert(
      "Please fill Patient, Doctor, Chief Complaint and Diagnosis."
    );
    return;
  }

  try {
    // Generate next Consultation ID
    const existingIds = consultations
      .map((consultation) =>
        Number(consultation.id.replace("CONS-", ""))
      )
      .filter((id) => !isNaN(id));

    const nextId =
      existingIds.length > 0
        ? Math.max(...existingIds) + 1
        : 1001;

    const newConsultationId = `CONS-${nextId}`;

    // Data to send to backend
    const consultationData = {
      consultationId: newConsultationId,
      patient: formData.patient,
      doctor: formData.doctor,
      date: new Date().toISOString().split("T")[0],
      symptoms: formData.symptoms,
      diagnosis: formData.diagnosis,
      treatment: formData.prescription,
      notes: formData.notes,
      followUpDate: formData.followUp || null,
      status: "Completed",
    };

    // Send to backend
    const response = await fetch(
      "http://localhost:5000/api/consultations",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(consultationData),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.error || "Failed to save consultation"
      );
    }

    // Format saved consultation for React
    const savedConsultation = {
      id: data.consultation.consultationId,
      patient: data.consultation.patient,
      patientId: formData.patientId || "N/A",
      doctor: data.consultation.doctor,
      department:
        formData.department || "General Medicine",
      date: data.consultation.date.slice(0, 10),
      complaint: formData.complaint,
      symptoms: data.consultation.symptoms || "",
      diagnosis: data.consultation.diagnosis || "",
      status: data.consultation.status,
      temperature: formData.temperature,
      bloodPressure: formData.bloodPressure,
      heartRate: formData.heartRate,
      prescription: data.consultation.treatment || "",
      notes: data.consultation.notes || "",
      followUp: data.consultation.followUpDate
        ? data.consultation.followUpDate.slice(0, 10)
        : "",
    };

    // Add saved consultation to UI
    setConsultations([
      savedConsultation,
      ...consultations,
    ]);

    // Clear form
    setFormData({
      patient: "",
      patientId: "",
      doctor: "",
      department: "",
      complaint: "",
      symptoms: "",
      temperature: "",
      bloodPressure: "",
      heartRate: "",
      diagnosis: "",
      prescription: "",
      notes: "",
      followUp: "",
    });

    setShowForm(false);

    alert("Consultation saved successfully! 🩺");
  } catch (error) {
    console.error(
      "Failed to save consultation:",
      error
    );

    alert(
      "Failed to save consultation. Please try again."
    );
  }
};

  const totalConsultations = consultations.length;

  const completedConsultations = consultations.filter(
    (consultation) => consultation.status === "Completed"
  ).length;

  const pendingConsultations = consultations.filter(
    (consultation) => consultation.status === "Pending"
  ).length;

  return (
    <section className="page-content">

      {/* Page Header */}
      <div className="patients-header">
        <div>
          <h1>Consultation / EMR</h1>
          <p>
            Manage patient consultations, diagnosis and medical records
          </p>
        </div>

        <button
          className="add-patient-btn"
          onClick={() => setShowForm(true)}
        >
          + New Consultation
        </button>
      </div>

      {/* Consultation Form */}
      {showForm && (
        <div className="patient-form-card consultation-form-card">

          <div className="form-header">
            <div>
              <h2>New Consultation</h2>
              <p>
                Enter patient examination and medical information
              </p>
            </div>

            <button
              className="close-form"
              onClick={() => setShowForm(false)}
            >
              ×
            </button>
          </div>

          <form
            className="patient-form"
            onSubmit={handleSaveConsultation}
          >

            {/* Patient */}
            <div className="form-group">
              <label>Patient *</label>

              <select
                value={formData.patient}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    patient: e.target.value,
                    patientId:
                      e.target.options[e.target.selectedIndex].dataset.id ||
                      "",
                  })
                }
              >
                <option value="">Select Patient</option>

                <option data-id="P-1001" value="Rahul Kumar">
                  Rahul Kumar
                </option>

                <option data-id="P-1002" value="Priya Sharma">
                  Priya Sharma
                </option>

                <option data-id="P-1003" value="Suresh Reddy">
                  Suresh Reddy
                </option>

                <option data-id="P-1004" value="Lakshmi Devi">
                  Lakshmi Devi
                </option>

                <option data-id="P-1005" value="Arjun Reddy">
                  Arjun Reddy
                </option>

                <option data-id="P-1006" value="Anjali Sharma">
                  Anjali Sharma
                </option>
              </select>
            </div>

            {/* Doctor */}
            <div className="form-group">
              <label>Doctor *</label>

              <select
                value={formData.doctor}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    doctor: e.target.value,
                  })
                }
              >
                <option value="">Select Doctor</option>

                <option value="Dr. Anil Kumar">
                  Dr. Anil Kumar
                </option>

                <option value="Dr. Sneha Reddy">
                  Dr. Sneha Reddy
                </option>

                <option value="Dr. Ravi Teja">
                  Dr. Ravi Teja
                </option>

                <option value="Dr. Priya Rao">
                  Dr. Priya Rao
                </option>
              </select>
            </div>

            {/* Department */}
            <div className="form-group">
              <label>Department</label>

              <select
                value={formData.department}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    department: e.target.value,
                  })
                }
              >
                <option value="">Select Department</option>
                <option value="Cardiology">Cardiology</option>
                <option value="Neurology">Neurology</option>
                <option value="Orthopedics">Orthopedics</option>
                <option value="General Medicine">
                  General Medicine
                </option>
              </select>
            </div>

            {/* Chief Complaint */}
            <div className="form-group">
              <label>Chief Complaint *</label>

              <input
                type="text"
                placeholder="What is the patient's main complaint?"
                value={formData.complaint}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    complaint: e.target.value,
                  })
                }
              />
            </div>

            {/* Symptoms */}
            <div className="form-group full-width">
              <label>Symptoms</label>

              <textarea
                placeholder="Enter patient's symptoms..."
                value={formData.symptoms}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    symptoms: e.target.value,
                  })
                }
              />
            </div>

            {/* Vital Signs */}
            <div className="form-group">
              <label>Temperature</label>

              <input
                type="text"
                placeholder="e.g. 98.6 °F"
                value={formData.temperature}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    temperature: e.target.value,
                  })
                }
              />
            </div>

            <div className="form-group">
              <label>Blood Pressure</label>

              <input
                type="text"
                placeholder="e.g. 120/80 mmHg"
                value={formData.bloodPressure}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    bloodPressure: e.target.value,
                  })
                }
              />
            </div>

            <div className="form-group">
              <label>Heart Rate</label>

              <input
                type="text"
                placeholder="e.g. 72 bpm"
                value={formData.heartRate}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    heartRate: e.target.value,
                  })
                }
              />
            </div>

            {/* Diagnosis */}
            <div className="form-group">
              <label>Diagnosis *</label>

              <input
                type="text"
                placeholder="Enter diagnosis"
                value={formData.diagnosis}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    diagnosis: e.target.value,
                  })
                }
              />
            </div>

            {/* Prescription */}
            <div className="form-group full-width">
              <label>Prescription</label>

              <textarea
                placeholder="Enter medicines and dosage instructions..."
                value={formData.prescription}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    prescription: e.target.value,
                  })
                }
              />
            </div>

            {/* Doctor Notes */}
            <div className="form-group full-width">
              <label>Doctor Notes</label>

              <textarea
                placeholder="Additional clinical notes..."
                value={formData.notes}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    notes: e.target.value,
                  })
                }
              />
            </div>

            {/* Follow-up */}
            <div className="form-group">
              <label>Follow-up Date</label>

              <input
                type="date"
                value={formData.followUp}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    followUp: e.target.value,
                  })
                }
              />
            </div>

            {/* Buttons */}
            <div className="form-actions">

              <button
                type="button"
                className="cancel-btn"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="register-btn"
              >
                Save Consultation
              </button>

            </div>

          </form>
        </div>
      )}

      {/* Summary */}
      <div className="patients-summary">

        <div className="summary-card">
          <div className="summary-icon">🩺</div>

          <div>
            <span>Total Consultations</span>
            <strong>{totalConsultations}</strong>
          </div>
        </div>

        <div className="summary-card">
          <div className="summary-icon">✅</div>

          <div>
            <span>Completed</span>
            <strong>{completedConsultations}</strong>
          </div>
        </div>

        <div className="summary-card">
          <div className="summary-icon">⏳</div>

          <div>
            <span>Pending</span>
            <strong>{pendingConsultations}</strong>
          </div>
        </div>

        <div className="summary-card">
          <div className="summary-icon">📋</div>

          <div>
            <span>Medical Records</span>
            <strong>{totalConsultations}</strong>
          </div>
        </div>

      </div>

      {/* Consultation Table */}
      <div className="patients-table-card">

        <div className="table-header">

          <div>
            <h2>Consultation Records</h2>
            <p>View patient consultation history</p>
          </div>

          <div className="search-box">
            <Search size={17} />

            <input
              type="text"
              placeholder="Search consultations..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

        </div>

        <div className="table-container">

          <table>

            <thead>
              <tr>
                <th>Consultation ID</th>
                <th>Patient</th>
                <th>Doctor</th>
                <th>Department</th>
                <th>Date</th>
                <th>Diagnosis</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {filteredConsultations.map((consultation) => (
                <tr key={consultation.id}>

                  <td>
                    <strong>{consultation.id}</strong>
                  </td>

                  <td>
                    <strong>{consultation.patient}</strong>
                    <br />
                    <small>{consultation.patientId}</small>
                  </td>

                  <td>{consultation.doctor}</td>

                  <td>{consultation.department}</td>

                  <td>{consultation.date}</td>

                  <td>{consultation.diagnosis}</td>

                  <td>
                    <span
                      className={
                        consultation.status === "Completed"
                          ? "status-active"
                          : "status-pending"
                      }
                    >
                      {consultation.status}
                    </span>
                  </td>

                  <td>
                    <button
                      className="view-btn"
                      onClick={() =>
                        setSelectedConsultation(consultation)
                      }
                    >
                      View
                    </button>
                  </td>

                </tr>
              ))}

            </tbody>

          </table>

          {filteredConsultations.length === 0 && (
            <div className="no-patients">
              <h3>No consultations found</h3>
              <p>Try a different search.</p>
            </div>
          )}

        </div>
      </div>

      {/* Consultation Details */}
      {selectedConsultation && (
        <div className="patient-details-overlay">

          <div className="patient-details-card">

            <div className="patient-details-header">

              <div>
                <h2>Consultation Details</h2>
                <p>{selectedConsultation.id}</p>
              </div>

              <button
                className="details-close"
                onClick={() => setSelectedConsultation(null)}
              >
                ×
              </button>

            </div>

            <div className="patient-profile">

              <div className="profile-avatar">
                🩺
              </div>

              <div>
                <h3>{selectedConsultation.patient}</h3>
                <p>{selectedConsultation.patientId}</p>
              </div>

              <span
                className={
                  selectedConsultation.status === "Completed"
                    ? "status-active"
                    : "status-pending"
                }
              >
                {selectedConsultation.status}
              </span>

            </div>

            <div className="patient-info-grid">

              <div>
                <span>Doctor</span>
                <strong>{selectedConsultation.doctor}</strong>
              </div>

              <div>
                <span>Department</span>
                <strong>
                  {selectedConsultation.department}
                </strong>
              </div>

              <div>
                <span>Date</span>
                <strong>{selectedConsultation.date}</strong>
              </div>

              <div>
                <span>Chief Complaint</span>
                <strong>
                  {selectedConsultation.complaint}
                </strong>
              </div>

              <div>
                <span>Diagnosis</span>
                <strong>
                  {selectedConsultation.diagnosis}
                </strong>
              </div>

              <div>
                <span>Blood Pressure</span>
                <strong>
                  {selectedConsultation.bloodPressure || "Not recorded"}
                </strong>
              </div>

            </div>

            <div className="medical-section">
              <h3>Symptoms</h3>

              <p>
                {selectedConsultation.symptoms ||
                  "No symptoms recorded."}
              </p>
            </div>

            <div className="medical-section">
              <h3>Prescription</h3>

              <p>
                {selectedConsultation.prescription ||
                  "No prescription recorded."}
              </p>
            </div>

            <div className="medical-section">
              <h3>Doctor Notes</h3>

              <p>
                {selectedConsultation.notes ||
                  "No additional notes recorded."}
              </p>
            </div>

            <div className="medical-section">
              <h3>Follow-up</h3>

              <p>
                {selectedConsultation.followUp ||
                  "No follow-up date scheduled."}
              </p>
            </div>

            <button
              className="register-btn"
              onClick={() => setSelectedConsultation(null)}
            >
              Close
            </button>

          </div>
        </div>
      )}

    </section>
  );
}

function Pharmacy() {
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [selectedMedicine, setSelectedMedicine] = useState(null);

  const [medicines, setMedicines] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    manufacturer: "",
    batch: "",
    quantity: "",
    price: "",
    expiry: "",
    supplier: "",
  });

  useEffect(() => {
  const fetchMedicines = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/medicines"
      );

      const data = await response.json();

      const formattedMedicines = data.medicines.map(
        (medicine) => ({
          id: medicine.medicineId,
          name: medicine.name,
          category: medicine.category,
          manufacturer: medicine.manufacturer || "",
          batch: medicine.batch || "N/A",
          quantity: medicine.quantity,
          price: medicine.price,
          expiry: medicine.expiry.slice(0, 10),
          supplier: medicine.supplier || "N/A",
        })
      );

      setMedicines(formattedMedicines);
    } catch (error) {
      console.error(
        "Failed to fetch medicines:",
        error
      );
    }
  };

  fetchMedicines();
}, []);

  const getMedicineStatus = (medicine) => {
    const today = new Date();
    const expiryDate = new Date(medicine.expiry);

    if (expiryDate < today) {
      return "Expired";
    }

    if (medicine.quantity <= 10) {
      return "Low Stock";
    }

    return "In Stock";
  };

  const filteredMedicines = medicines.filter(
    (medicine) =>
      medicine.name.toLowerCase().includes(search.toLowerCase()) ||
      medicine.id.toLowerCase().includes(search.toLowerCase()) ||
      medicine.category.toLowerCase().includes(search.toLowerCase()) ||
      medicine.manufacturer.toLowerCase().includes(search.toLowerCase())
  );

 const handleAddMedicine = async (e) => {
  e.preventDefault();

  if (
    !formData.name ||
    !formData.category ||
    !formData.quantity ||
    !formData.price ||
    !formData.expiry
  ) {
    alert("Please fill all required medicine fields.");
    return;
  }

  try {
    // Generate next medicine ID
    const existingIds = medicines
      .map((medicine) => Number(medicine.id.replace("MED-", "")))
      .filter((id) => !isNaN(id));

    const nextId =
      existingIds.length > 0
        ? Math.max(...existingIds) + 1
        : 1001;

    const newMedicineId = `MED-${nextId}`;

    // Medicine data for backend
    const medicineData = {
      medicineId: newMedicineId,
      name: formData.name,
      category: formData.category,
      manufacturer: formData.manufacturer,
      batch: formData.batch || "N/A",
      quantity: Number(formData.quantity),
      price: Number(formData.price),
      expiry: formData.expiry,
      supplier: formData.supplier || "N/A",
    };

    // Send to backend
    const response = await fetch(
      "http://localhost:5000/api/medicines",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(medicineData),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.error || "Failed to add medicine"
      );
    }

    // Format saved medicine for React
    const savedMedicine = {
      id: data.medicine.medicineId,
      name: data.medicine.name,
      category: data.medicine.category,
      manufacturer:
        data.medicine.manufacturer || "",
      batch: data.medicine.batch || "N/A",
      quantity: data.medicine.quantity,
      price: data.medicine.price,
      expiry: data.medicine.expiry.slice(0, 10),
      supplier: data.medicine.supplier || "N/A",
    };

    // Add new medicine to UI
    setMedicines([
      savedMedicine,
      ...medicines,
    ]);

    // Clear form
    setFormData({
      name: "",
      category: "",
      manufacturer: "",
      batch: "",
      quantity: "",
      price: "",
      expiry: "",
      supplier: "",
    });

    setShowForm(false);

    alert("Medicine added successfully! 💊");
  } catch (error) {
    console.error(
      "Failed to add medicine:",
      error
    );

    alert(
      "Failed to add medicine. Please try again."
    );
  }
};

  const totalMedicines = medicines.length;

  const totalStock = medicines.reduce(
    (total, medicine) => total + medicine.quantity,
    0
  );

  const lowStockMedicines = medicines.filter(
    (medicine) => getMedicineStatus(medicine) === "Low Stock"
  ).length;

  const expiredMedicines = medicines.filter(
    (medicine) => getMedicineStatus(medicine) === "Expired"
  ).length;

  return (
    <section className="page-content">

      {/* Page Header */}
      <div className="patients-header">
        <div>
          <h1>Pharmacy</h1>
          <p>Manage medicines, inventory and pharmacy stock</p>
        </div>

        <button
          className="add-patient-btn"
          onClick={() => setShowForm(true)}
        >
          + Add Medicine
        </button>
      </div>

      {/* Add Medicine Form */}
      {showForm && (
        <div className="patient-form-card pharmacy-form-card">

          <div className="form-header">
            <div>
              <h2>Add New Medicine</h2>
              <p>Enter medicine and inventory information</p>
            </div>

            <button
              className="close-form"
              onClick={() => setShowForm(false)}
            >
              ×
            </button>
          </div>

          <form
            className="patient-form"
            onSubmit={handleAddMedicine}
          >

            <div className="form-group">
              <label>Medicine Name *</label>

              <input
                type="text"
                placeholder="e.g. Paracetamol"
                value={formData.name}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name: e.target.value,
                  })
                }
              />
            </div>

            <div className="form-group">
              <label>Category *</label>

              <select
                value={formData.category}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    category: e.target.value,
                  })
                }
              >
                <option value="">Select Category</option>
                <option value="Pain Relief">Pain Relief</option>
                <option value="Antibiotic">Antibiotic</option>
                <option value="Gastric">Gastric</option>
                <option value="Allergy">Allergy</option>
                <option value="Vitamin">Vitamin</option>
                <option value="Diabetes">Diabetes</option>
                <option value="Blood Pressure">
                  Blood Pressure
                </option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label>Manufacturer</label>

              <input
                type="text"
                placeholder="e.g. Cipla"
                value={formData.manufacturer}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    manufacturer: e.target.value,
                  })
                }
              />
            </div>

            <div className="form-group">
              <label>Batch Number</label>

              <input
                type="text"
                placeholder="e.g. PCM24001"
                value={formData.batch}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    batch: e.target.value,
                  })
                }
              />
            </div>

            <div className="form-group">
              <label>Quantity *</label>

              <input
                type="number"
                min="0"
                placeholder="Enter quantity"
                value={formData.quantity}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    quantity: e.target.value,
                  })
                }
              />
            </div>

            <div className="form-group">
              <label>Price per Unit (₹) *</label>

              <input
                type="number"
                min="0"
                step="0.01"
                placeholder="Enter price"
                value={formData.price}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    price: e.target.value,
                  })
                }
              />
            </div>

            <div className="form-group">
              <label>Expiry Date *</label>

              <input
                type="date"
                value={formData.expiry}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    expiry: e.target.value,
                  })
                }
              />
            </div>

            <div className="form-group">
              <label>Supplier</label>

              <input
                type="text"
                placeholder="Enter supplier name"
                value={formData.supplier}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    supplier: e.target.value,
                  })
                }
              />
            </div>

            <div className="form-actions">

              <button
                type="button"
                className="cancel-btn"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="register-btn"
              >
                Add Medicine
              </button>

            </div>

          </form>
        </div>
      )}

      {/* Summary Cards */}
      <div className="patients-summary">

        <div className="summary-card">
          <div className="summary-icon">💊</div>

          <div>
            <span>Total Medicines</span>
            <strong>{totalMedicines}</strong>
          </div>
        </div>

        <div className="summary-card">
          <div className="summary-icon">📦</div>

          <div>
            <span>Total Stock</span>
            <strong>{totalStock}</strong>
          </div>
        </div>

        <div className="summary-card">
          <div className="summary-icon">⚠️</div>

          <div>
            <span>Low Stock</span>
            <strong>{lowStockMedicines}</strong>
          </div>
        </div>

        <div className="summary-card">
          <div className="summary-icon">❌</div>

          <div>
            <span>Expired</span>
            <strong>{expiredMedicines}</strong>
          </div>
        </div>

      </div>

      {/* Medicine Table */}
      <div className="patients-table-card">

        <div className="table-header">

          <div>
            <h2>Medicine Inventory</h2>
            <p>View and manage pharmacy stock</p>
          </div>

          <div className="search-box">
            <Search size={17} />

            <input
              type="text"
              placeholder="Search medicines..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

        </div>

        <div className="table-container">

          <table>

            <thead>
              <tr>
                <th>Medicine ID</th>
                <th>Medicine</th>
                <th>Category</th>
                <th>Manufacturer</th>
                <th>Batch</th>
                <th>Stock</th>
                <th>Price</th>
                <th>Expiry</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {filteredMedicines.map((medicine) => {

                const status = getMedicineStatus(medicine);

                return (
                  <tr key={medicine.id}>

                    <td>
                      <strong>{medicine.id}</strong>
                    </td>

                    <td>
                      <strong>{medicine.name}</strong>
                    </td>

                    <td>{medicine.category}</td>

                    <td>{medicine.manufacturer}</td>

                    <td>{medicine.batch}</td>

                    <td>
                      <strong>{medicine.quantity}</strong>
                    </td>

                    <td>₹{medicine.price}</td>

                    <td>{medicine.expiry}</td>

                    <td>
                      <span
                        className={
                          status === "In Stock"
                            ? "status-active"
                            : status === "Low Stock"
                            ? "status-pending"
                            : "status-expired"
                        }
                      >
                        {status}
                      </span>
                    </td>

                    <td>
                      <button
                        className="view-btn"
                        onClick={() =>
                          setSelectedMedicine(medicine)
                        }
                      >
                        View
                      </button>
                    </td>

                  </tr>
                );
              })}

            </tbody>

          </table>

          {filteredMedicines.length === 0 && (
            <div className="no-patients">
              <h3>No medicines found</h3>
              <p>Try a different search.</p>
            </div>
          )}

        </div>
      </div>

      {/* Medicine Details */}
      {selectedMedicine && (
        <div className="patient-details-overlay">

          <div className="patient-details-card">

            <div className="patient-details-header">

              <div>
                <h2>{selectedMedicine.name}</h2>
                <p>{selectedMedicine.id}</p>
              </div>

              <button
                className="details-close"
                onClick={() => setSelectedMedicine(null)}
              >
                ×
              </button>

            </div>

            <div className="patient-profile">

              <div className="profile-avatar">
                💊
              </div>

              <div>
                <h3>{selectedMedicine.name}</h3>
                <p>{selectedMedicine.category}</p>
              </div>

              <span
                className={
                  getMedicineStatus(selectedMedicine) ===
                  "In Stock"
                    ? "status-active"
                    : "status-pending"
                }
              >
                {getMedicineStatus(selectedMedicine)}
              </span>

            </div>

            <div className="patient-info-grid">

              <div>
                <span>Manufacturer</span>
                <strong>
                  {selectedMedicine.manufacturer || "N/A"}
                </strong>
              </div>

              <div>
                <span>Batch Number</span>
                <strong>{selectedMedicine.batch}</strong>
              </div>

              <div>
                <span>Available Stock</span>
                <strong>{selectedMedicine.quantity}</strong>
              </div>

              <div>
                <span>Price Per Unit</span>
                <strong>₹{selectedMedicine.price}</strong>
              </div>

              <div>
                <span>Expiry Date</span>
                <strong>{selectedMedicine.expiry}</strong>
              </div>

              <div>
                <span>Supplier</span>
                <strong>
                  {selectedMedicine.supplier || "N/A"}
                </strong>
              </div>

            </div>

            <div className="medical-section">
              <h3>Inventory Information</h3>

              <p>
                Current available stock:{" "}
                <strong>{selectedMedicine.quantity}</strong>{" "}
                units.
              </p>
            </div>

            <button
              className="register-btn"
              onClick={() => setSelectedMedicine(null)}
            >
              Close
            </button>

          </div>
        </div>
      )}

    </section>
  );
}

function Lab() {
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [selectedTest, setSelectedTest] = useState(null);

  const [labTests, setLabTests] = useState([]);

  const [formData, setFormData] = useState({
    patient: "",
    patientId: "",
    doctor: "",
    testName: "",
    category: "",
    date: "",
    price: "",
    result: "",
  });

  useEffect(() => {
  const fetchLabTests = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/lab-tests"
      );

      const data = await response.json();

      const formattedLabTests = data.labTests.map(
        (labTest) => ({
          id: labTest.testId,
          patient: labTest.patient,
          patientId: labTest.patientId || "N/A",
          doctor: labTest.doctor || "Not Assigned",
          testName: labTest.testName,
          category: labTest.category,
          date: labTest.testDate
            ? labTest.testDate.slice(0, 10)
            : "",
          price: labTest.price || 0,
          status: labTest.status || "Pending",
          result:
            labTest.result || "Not Available",
        })
      );

      setLabTests(formattedLabTests);
    } catch (error) {
      console.error(
        "Failed to fetch lab tests:",
        error
      );
    }
  };

  fetchLabTests();
}, []);

  const filteredTests = labTests.filter(
    (test) =>
      test.patient.toLowerCase().includes(search.toLowerCase()) ||
      test.patientId.toLowerCase().includes(search.toLowerCase()) ||
      test.doctor.toLowerCase().includes(search.toLowerCase()) ||
      test.testName.toLowerCase().includes(search.toLowerCase()) ||
      test.category.toLowerCase().includes(search.toLowerCase())
  );

const handleAddTest = async (e) => {
  e.preventDefault();

  if (
    !formData.patient ||
    !formData.doctor ||
    !formData.testName ||
    !formData.category ||
    !formData.date ||
    !formData.price
  ) {
    alert("Please fill all required lab test fields.");
    return;
  }

  try {
    // Generate next Lab Test ID
    const existingIds = labTests
      .map((test) =>
        Number(test.id.replace("LAB-", ""))
      )
      .filter((id) => !isNaN(id));

    const nextId =
      existingIds.length > 0
        ? Math.max(...existingIds) + 1
        : 1001;

    const newTestId = `LAB-${nextId}`;

    // Data to send to backend
    const labTestData = {
      testId: newTestId,
      patient: formData.patient,
      patientId: formData.patientId || "",
      doctor: formData.doctor,
      testName: formData.testName,
      category: formData.category,
      sample: "",
      testDate: formData.date,
      price: Number(formData.price),
      result: formData.result || "",
      normalRange: "",
      status: formData.result
        ? "Completed"
        : "Pending",
      remarks: "",
    };

    // Send data to backend
    const response = await fetch(
      "http://localhost:5000/api/lab-tests",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(labTestData),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.error || "Failed to add lab test"
      );
    }

    // Format saved test for React
    const savedTest = {
      id: data.labTest.testId,
      patient: data.labTest.patient,
      patientId:
        data.labTest.patientId || "N/A",
      doctor:
        data.labTest.doctor || "Not Assigned",
      testName: data.labTest.testName,
      category: data.labTest.category,
      date: data.labTest.testDate.slice(0, 10),
      price: data.labTest.price,
      status:
        data.labTest.status || "Pending",
      result:
        data.labTest.result ||
        "Not Available",
    };

    // Add new test to UI
    setLabTests([
      savedTest,
      ...labTests,
    ]);

    // Clear form
    setFormData({
      patient: "",
      patientId: "",
      doctor: "",
      testName: "",
      category: "",
      date: "",
      price: "",
      result: "",
    });

    // Close form
    setShowForm(false);

    alert("Lab test added successfully! 🧪");
  } catch (error) {
    console.error(
      "Failed to add lab test:",
      error
    );

    alert(
      "Failed to add lab test. Please try again."
    );
  }
};

  const totalTests = labTests.length;

  const pendingTests = labTests.filter(
    (test) => test.status === "Pending"
  ).length;

  const inProgressTests = labTests.filter(
    (test) => test.status === "In Progress"
  ).length;

  const completedTests = labTests.filter(
    (test) => test.status === "Completed"
  ).length;

  return (
    <section className="page-content">

      {/* Page Header */}
      <div className="patients-header">
        <div>
          <h1>Laboratory</h1>
          <p>
            Manage laboratory tests, reports and patient results
          </p>
        </div>

        <button
          className="add-patient-btn"
          onClick={() => setShowForm(true)}
        >
          + Add Lab Test
        </button>
      </div>

      {/* Add Lab Test Form */}
      {showForm && (
        <div className="patient-form-card lab-form-card">

          <div className="form-header">
            <div>
              <h2>Add New Lab Test</h2>
              <p>
                Enter patient and laboratory test information
              </p>
            </div>

            <button
              className="close-form"
              onClick={() => setShowForm(false)}
            >
              ×
            </button>
          </div>

          <form
            className="patient-form"
            onSubmit={handleAddTest}
          >

            {/* Patient */}
            <div className="form-group">
              <label>Patient *</label>

              <select
                value={formData.patient}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    patient: e.target.value,
                    patientId:
                      e.target.options[e.target.selectedIndex]
                        .dataset.id || "",
                  })
                }
              >
                <option value="">Select Patient</option>

                <option
                  value="Rahul Kumar"
                  data-id="P-1001"
                >
                  Rahul Kumar
                </option>

                <option
                  value="Priya Sharma"
                  data-id="P-1002"
                >
                  Priya Sharma
                </option>

                <option
                  value="Suresh Reddy"
                  data-id="P-1003"
                >
                  Suresh Reddy
                </option>

                <option
                  value="Lakshmi Devi"
                  data-id="P-1004"
                >
                  Lakshmi Devi
                </option>

                <option
                  value="Arjun Reddy"
                  data-id="P-1005"
                >
                  Arjun Reddy
                </option>

                <option
                  value="Anjali Sharma"
                  data-id="P-1006"
                >
                  Anjali Sharma
                </option>
              </select>
            </div>

            {/* Doctor */}
            <div className="form-group">
              <label>Referring Doctor *</label>

              <select
                value={formData.doctor}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    doctor: e.target.value,
                  })
                }
              >
                <option value="">Select Doctor</option>

                <option value="Dr. Anil Kumar">
                  Dr. Anil Kumar
                </option>

                <option value="Dr. Sneha Reddy">
                  Dr. Sneha Reddy
                </option>

                <option value="Dr. Ravi Teja">
                  Dr. Ravi Teja
                </option>

                <option value="Dr. Priya Rao">
                  Dr. Priya Rao
                </option>
              </select>
            </div>

            {/* Test Name */}
            <div className="form-group">
              <label>Test Name *</label>

              <input
                type="text"
                placeholder="e.g. Complete Blood Count"
                value={formData.testName}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    testName: e.target.value,
                  })
                }
              />
            </div>

            {/* Category */}
            <div className="form-group">
              <label>Test Category *</label>

              <select
                value={formData.category}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    category: e.target.value,
                  })
                }
              >
                <option value="">Select Category</option>
                <option value="Hematology">Hematology</option>
                <option value="Biochemistry">Biochemistry</option>
                <option value="Microbiology">Microbiology</option>
                <option value="Pathology">Pathology</option>
                <option value="Radiology">Radiology</option>
                <option value="Urinalysis">Urinalysis</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Date */}
            <div className="form-group">
              <label>Test Date *</label>

              <input
                type="date"
                value={formData.date}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    date: e.target.value,
                  })
                }
              />
            </div>

            {/* Price */}
            <div className="form-group">
              <label>Test Price (₹) *</label>

              <input
                type="number"
                min="0"
                step="0.01"
                placeholder="Enter test price"
                value={formData.price}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    price: e.target.value,
                  })
                }
              />
            </div>

            {/* Result */}
            <div className="form-group full-width">
              <label>Test Result</label>

              <textarea
                placeholder="Enter result if already available..."
                value={formData.result}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    result: e.target.value,
                  })
                }
              />
            </div>

            {/* Actions */}
            <div className="form-actions">

              <button
                type="button"
                className="cancel-btn"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="register-btn"
              >
                Add Lab Test
              </button>

            </div>

          </form>
        </div>
      )}

      {/* Summary Cards */}
      <div className="patients-summary">

        <div className="summary-card">
          <div className="summary-icon">🧪</div>

          <div>
            <span>Total Tests</span>
            <strong>{totalTests}</strong>
          </div>
        </div>

        <div className="summary-card">
          <div className="summary-icon">⏳</div>

          <div>
            <span>Pending</span>
            <strong>{pendingTests}</strong>
          </div>
        </div>

        <div className="summary-card">
          <div className="summary-icon">🔬</div>

          <div>
            <span>In Progress</span>
            <strong>{inProgressTests}</strong>
          </div>
        </div>

        <div className="summary-card">
          <div className="summary-icon">✅</div>

          <div>
            <span>Completed</span>
            <strong>{completedTests}</strong>
          </div>
        </div>

      </div>

      {/* Lab Test Table */}
      <div className="patients-table-card">

        <div className="table-header">

          <div>
            <h2>Laboratory Test Records</h2>
            <p>
              View and manage patient laboratory tests
            </p>
          </div>

          <div className="search-box">
            <Search size={17} />

            <input
              type="text"
              placeholder="Search lab tests..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

        </div>

        <div className="table-container">

          <table>

            <thead>
              <tr>
                <th>Test ID</th>
                <th>Patient</th>
                <th>Doctor</th>
                <th>Test Name</th>
                <th>Category</th>
                <th>Date</th>
                <th>Price</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {filteredTests.map((test) => (
                <tr key={test.id}>

                  <td>
                    <strong>{test.id}</strong>
                  </td>

                  <td>
                    <strong>{test.patient}</strong>
                    <br />
                    <small>{test.patientId}</small>
                  </td>

                  <td>{test.doctor}</td>

                  <td>{test.testName}</td>

                  <td>{test.category}</td>

                  <td>{test.date}</td>

                  <td>₹{test.price}</td>

                  <td>
                    <span
                      className={
                        test.status === "Completed"
                          ? "status-active"
                          : test.status === "In Progress"
                          ? "status-progress"
                          : "status-pending"
                      }
                    >
                      {test.status}
                    </span>
                  </td>

                  <td>
                    <button
                      className="view-btn"
                      onClick={() => setSelectedTest(test)}
                    >
                      View
                    </button>
                  </td>

                </tr>
              ))}

            </tbody>

          </table>

          {filteredTests.length === 0 && (
            <div className="no-patients">
              <h3>No lab tests found</h3>
              <p>Try a different search.</p>
            </div>
          )}

        </div>
      </div>

      {/* Lab Test Details */}
      {selectedTest && (
        <div className="patient-details-overlay">

          <div className="patient-details-card">

            <div className="patient-details-header">

              <div>
                <h2>{selectedTest.testName}</h2>
                <p>{selectedTest.id}</p>
              </div>

              <button
                className="details-close"
                onClick={() => setSelectedTest(null)}
              >
                ×
              </button>

            </div>

            <div className="patient-profile">

              <div className="profile-avatar">
                🧪
              </div>

              <div>
                <h3>{selectedTest.patient}</h3>
                <p>{selectedTest.patientId}</p>
              </div>

              <span
                className={
                  selectedTest.status === "Completed"
                    ? "status-active"
                    : selectedTest.status === "In Progress"
                    ? "status-progress"
                    : "status-pending"
                }
              >
                {selectedTest.status}
              </span>

            </div>

            <div className="patient-info-grid">

              <div>
                <span>Referring Doctor</span>
                <strong>{selectedTest.doctor}</strong>
              </div>

              <div>
                <span>Test Category</span>
                <strong>{selectedTest.category}</strong>
              </div>

              <div>
                <span>Test Date</span>
                <strong>{selectedTest.date}</strong>
              </div>

              <div>
                <span>Test Price</span>
                <strong>₹{selectedTest.price}</strong>
              </div>

              <div>
                <span>Patient ID</span>
                <strong>{selectedTest.patientId}</strong>
              </div>

              <div>
                <span>Test ID</span>
                <strong>{selectedTest.id}</strong>
              </div>

            </div>

            <div className="medical-section">
              <h3>Laboratory Result</h3>

              <p>
                {selectedTest.result || "Result not available yet."}
              </p>
            </div>

            <button
              className="register-btn"
              onClick={() => setSelectedTest(null)}
            >
              Close
            </button>

          </div>
        </div>
      )}

    </section>
  );
}

function Admissions() {
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [selectedAdmission, setSelectedAdmission] = useState(null);

  const [admissions, setAdmissions] = useState([ ]);

  const [beds, setBeds] = useState([
    {
      id: "B-01",
      room: "101",
      ward: "Cardiology Ward",
      type: "General",
      status: "Occupied",
    },
    {
      id: "B-02",
      room: "101",
      ward: "Cardiology Ward",
      type: "General",
      status: "Available",
    },
    {
      id: "B-03",
      room: "102",
      ward: "General Ward",
      type: "General",
      status: "Occupied",
    },
    {
      id: "B-04",
      room: "203",
      ward: "Neurology Ward",
      type: "Semi-Private",
      status: "Occupied",
    },
    {
      id: "B-05",
      room: "203",
      ward: "Neurology Ward",
      type: "Semi-Private",
      status: "Available",
    },
    {
      id: "B-06",
      room: "301",
      ward: "Orthopedic Ward",
      type: "General",
      status: "Available",
    },
    {
      id: "B-07",
      room: "302",
      ward: "General Ward",
      type: "Private",
      status: "Maintenance",
    },
    {
      id: "B-08",
      room: "303",
      ward: "General Ward",
      type: "General",
      status: "Available",
    },
  ]);

  const [formData, setFormData] = useState({
    patient: "",
    patientId: "",
    doctor: "",
    ward: "",
    room: "",
    bed: "",
    admissionDate: "",
    expectedDischarge: "",
  });

  useEffect(() => {
  const fetchAdmissions = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/admissions"
      );

      const data = await response.json();

      const formattedAdmissions = data.admissions.map(
        (admission) => ({
          id: admission.admissionId,
          patient: admission.patient,
          patientId:
            admission.patientId || "N/A",
          doctor: admission.doctor,
          room: admission.room || "N/A",
          bed:
            admission.bedNumber || "N/A",
          ward:
            admission.ward || "General Ward",
          admissionDate:
            admission.admissionDate
              ? admission.admissionDate.slice(0, 10)
              : "",
          dischargeDate:
            admission.dischargeDate
              ? admission.dischargeDate.slice(0, 10)
              : "",
          status:
            admission.status || "Admitted",
        })
      );

      setAdmissions(formattedAdmissions);
    } catch (error) {
      console.error(
        "Failed to fetch admissions:",
        error
      );
    }
  };

  fetchAdmissions();
}, []);

  const filteredAdmissions = admissions.filter(
    (admission) =>
      admission.patient
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      admission.patientId
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      admission.doctor
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      admission.room
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      admission.bed
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  const availableBeds = beds.filter(
    (bed) => bed.status === "Available"
  ).length;

  const occupiedBeds = beds.filter(
    (bed) => bed.status === "Occupied"
  ).length;

  const maintenanceBeds = beds.filter(
    (bed) => bed.status === "Maintenance"
  ).length;

  const admittedPatients = admissions.filter(
    (admission) => admission.status === "Admitted"
  ).length;
 
  const handleAdmitPatient = async (e) => {
  e.preventDefault();

  if (
    !formData.patient ||
    !formData.doctor ||
    !formData.ward ||
    !formData.room ||
    !formData.bed ||
    !formData.admissionDate
  ) {
    alert("Please fill all required admission fields.");
    return;
  }

  const selectedBed = beds.find(
    (bed) => bed.id === formData.bed
  );

  if (!selectedBed || selectedBed.status !== "Available") {
    alert("Please select an available bed.");
    return;
  }

  try {
    // Generate next Admission ID
    const existingIds = admissions
      .map((admission) =>
        Number(admission.id.replace("ADM-", ""))
      )
      .filter((id) => !isNaN(id));

    const nextId =
      existingIds.length > 0
        ? Math.max(...existingIds) + 1
        : 1001;

    const newAdmissionId = `ADM-${nextId}`;

    // Data sent to MongoDB
    const admissionData = {
      admissionId: newAdmissionId,
      patient: formData.patient,
      patientId: formData.patientId || "",
      doctor: formData.doctor,

      // Backend currently requires department
      department: formData.ward,

      ward: formData.ward,
      room: formData.room,
      bedNumber: formData.bed,

      admissionDate: formData.admissionDate,
      dischargeDate:
        formData.expectedDischarge || null,

      status: "Admitted",
      reason: "Hospital admission",
      notes: "",
    };

    // POST request
    const response = await fetch(
      "http://localhost:5000/api/admissions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(admissionData),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.error || "Failed to admit patient"
      );
    }

    // Convert backend response to frontend format
    const savedAdmission = {
      id: data.admission.admissionId,
      patient: data.admission.patient,
      patientId:
        data.admission.patientId || "N/A",
      doctor: data.admission.doctor,
      room: data.admission.room || formData.room,
      bed:
        data.admission.bedNumber ||
        formData.bed,
      ward:
        data.admission.ward ||
        formData.ward,
      admissionDate:
        data.admission.admissionDate.slice(0, 10),
      dischargeDate:
        data.admission.dischargeDate
          ? data.admission.dischargeDate.slice(0, 10)
          : "",
      status:
        data.admission.status || "Admitted",
    };

    // Add new admission to UI
    setAdmissions([
      savedAdmission,
      ...admissions,
    ]);

    // Mark selected bed as occupied
    setBeds(
      beds.map((bed) =>
        bed.id === formData.bed
          ? {
              ...bed,
              status: "Occupied",
            }
          : bed
      )
    );

    // Reset form
    setFormData({
      patient: "",
      patientId: "",
      doctor: "",
      ward: "",
      room: "",
      bed: "",
      admissionDate: "",
      expectedDischarge: "",
    });

    setShowForm(false);

    alert(
      "Patient admitted successfully! 🏥"
    );
  } catch (error) {
    console.error( 
      "Failed to admit patient:",
      error
    );

    alert(
      "Failed to admit patient. Please try again."
    );
  }
};

  
const handleDischarge = async (admissionId) => {
  try {
    const response = await fetch(
      `http://localhost:5000/api/admissions/${admissionId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          dischargeDate: new Date()
            .toISOString()
            .split("T")[0],
          status: "Discharged",
          notes: "Patient discharged successfully.",
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message ||
          "Failed to discharge patient"
      );
    }

    // Update admission in the UI
    setAdmissions(
      admissions.map((admission) =>
        admission.id === admissionId
          ? {
              ...admission,
              status: "Discharged",
              dischargeDate:
                data.admission.dischargeDate
                  ? data.admission.dischargeDate.slice(
                      0,
                      10
                    )
                  : new Date()
                      .toISOString()
                      .split("T")[0],
            }
          : admission
      )
    );

    // Make the patient's bed available again
    const dischargedAdmission =
      admissions.find(
        (admission) =>
          admission.id === admissionId
      );

    if (dischargedAdmission) {
      setBeds(
        beds.map((bed) =>
          bed.id === dischargedAdmission.bed
            ? {
                ...bed,
                status: "Available",
              }
            : bed
        )
      );
    }

    alert(
      "Patient discharged successfully! 🏥"
    );
  } catch (error) {
    console.error(
      "Failed to discharge patient:",
      error
    );

    alert(
      "Failed to discharge patient. Please try again."
    );
  }
};
  

  return (
    <section className="page-content">

      {/* Header */}
      <div className="patients-header">
        <div>
          <h1>Admissions & Beds</h1>
          <p>
            Manage patient admissions, wards, rooms and bed availability
          </p>
        </div>

        <button
          className="add-patient-btn"
          onClick={() => setShowForm(true)}
        >
          + Admit Patient
        </button>
      </div>

      {/* Admission Form */}
      {showForm && (
        <div className="patient-form-card admission-form-card">

          <div className="form-header">
            <div>
              <h2>Admit New Patient</h2>
              <p>
                Enter patient admission and bed information
              </p>
            </div>

            <button
              className="close-form"
              onClick={() => setShowForm(false)}
            >
              ×
            </button>
          </div>

          <form
            className="patient-form"
            onSubmit={handleAdmitPatient}
          >

            <div className="form-group">
              <label>Patient *</label>

              <select
                value={formData.patient}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    patient: e.target.value,
                    patientId:
                      e.target.options[e.target.selectedIndex]
                        .dataset.id || "",
                  })
                }
              >
                <option value="">Select Patient</option>

                <option
                  value="Rahul Kumar"
                  data-id="P-1001"
                >
                  Rahul Kumar
                </option>

                <option
                  value="Priya Sharma"
                  data-id="P-1002"
                >
                  Priya Sharma
                </option>

                <option
                  value="Suresh Reddy"
                  data-id="P-1003"
                >
                  Suresh Reddy
                </option>

                <option
                  value="Lakshmi Devi"
                  data-id="P-1004"
                >
                  Lakshmi Devi
                </option>

                <option
                  value="Arjun Reddy"
                  data-id="P-1005"
                >
                  Arjun Reddy
                </option>

                <option
                  value="Anjali Sharma"
                  data-id="P-1006"
                >
                  Anjali Sharma
                </option>
              </select>
            </div>

            <div className="form-group">
              <label>Assigned Doctor *</label>

              <select
                value={formData.doctor}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    doctor: e.target.value,
                  })
                }
              >
                <option value="">Select Doctor</option>

                <option value="Dr. Anil Kumar">
                  Dr. Anil Kumar
                </option>

                <option value="Dr. Sneha Reddy">
                  Dr. Sneha Reddy
                </option>

                <option value="Dr. Ravi Teja">
                  Dr. Ravi Teja
                </option>

                <option value="Dr. Priya Rao">
                  Dr. Priya Rao
                </option>
              </select>
            </div>

            <div className="form-group">
              <label>Ward *</label>

              <select
                value={formData.ward}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    ward: e.target.value,
                  })
                }
              >
                <option value="">Select Ward</option>
                <option value="Cardiology Ward">
                  Cardiology Ward
                </option>
                <option value="Neurology Ward">
                  Neurology Ward
                </option>
                <option value="Orthopedic Ward">
                  Orthopedic Ward
                </option>
                <option value="General Ward">
                  General Ward
                </option>
              </select>
            </div>

            <div className="form-group">
              <label>Room Number *</label>

              <input
                type="text"
                placeholder="e.g. 101"
                value={formData.room}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    room: e.target.value,
                  })
                }
              />
            </div>

            <div className="form-group">
              <label>Bed *</label>

              <select
                value={formData.bed}
                onChange={(e) => {
                  const selectedBed = beds.find(
                    (bed) => bed.id === e.target.value
                  );

                  setFormData({
                    ...formData,
                    bed: e.target.value,
                    room: selectedBed
                      ? selectedBed.room
                      : formData.room,
                    ward: selectedBed
                      ? selectedBed.ward
                      : formData.ward,
                  });
                }}
              >
                <option value="">Select Available Bed</option>

                {beds
                  .filter(
                    (bed) => bed.status === "Available"
                  )
                  .map((bed) => (
                    <option key={bed.id} value={bed.id}>
                      {bed.id} — Room {bed.room} — {bed.ward}
                    </option>
                  ))}
              </select>
            </div>

            <div className="form-group">
              <label>Admission Date *</label>

              <input
                type="date"
                value={formData.admissionDate}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    admissionDate: e.target.value,
                  })
                }
              />
            </div>

            <div className="form-group">
              <label>Expected Discharge</label>

              <input
                type="date"
                value={formData.expectedDischarge}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    expectedDischarge: e.target.value,
                  })
                }
              />
            </div>

            <div className="form-actions">

              <button
                type="button"
                className="cancel-btn"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="register-btn"
              >
                Admit Patient
              </button>

            </div>

          </form>
        </div>
      )}

      {/* Summary Cards */}
      <div className="patients-summary">

        <div className="summary-card">
          <div className="summary-icon">🛏️</div>

          <div>
            <span>Total Beds</span>
            <strong>{beds.length}</strong>
          </div>
        </div>

        <div className="summary-card">
          <div className="summary-icon">🟢</div>

          <div>
            <span>Available Beds</span>
            <strong>{availableBeds}</strong>
          </div>
        </div>

        <div className="summary-card">
          <div className="summary-icon">🔴</div>

          <div>
            <span>Occupied Beds</span>
            <strong>{occupiedBeds}</strong>
          </div>
        </div>

        <div className="summary-card">
          <div className="summary-icon">👤</div>

          <div>
            <span>Admitted Patients</span>
            <strong>{admittedPatients}</strong>
          </div>
        </div>

      </div>

      {/* Admissions Table */}
      <div className="patients-table-card">

        <div className="table-header">

          <div>
            <h2>Admission Records</h2>
            <p>
              View and manage current and previous admissions
            </p>
          </div>

          <div className="search-box">
            <Search size={17} />

            <input
              type="text"
              placeholder="Search admissions..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />
          </div>

        </div>

        <div className="table-container">

          <table>

            <thead>
              <tr>
                <th>Admission ID</th>
                <th>Patient</th>
                <th>Doctor</th>
                <th>Ward</th>
                <th>Room</th>
                <th>Bed</th>
                <th>Admission Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {filteredAdmissions.map((admission) => (
                <tr key={admission.id}>

                  <td>
                    <strong>{admission.id}</strong>
                  </td>

                  <td>
                    <strong>{admission.patient}</strong>
                    <br />
                    <small>{admission.patientId}</small>
                  </td>

                  <td>{admission.doctor}</td>

                  <td>{admission.ward}</td>

                  <td>{admission.room}</td>

                  <td>
                    <strong>{admission.bed}</strong>
                  </td>

                  <td>{admission.admissionDate}</td>

                  <td>
                    <span
                      className={
                        admission.status === "Admitted"
                          ? "status-active"
                          : "status-pending"
                      }
                    >
                      {admission.status}
                    </span>
                  </td>

                  <td>
                    <button
                      className="view-btn"
                      onClick={() =>
                        setSelectedAdmission(admission)
                      }
                    >
                      View
                    </button>
                  </td>

                </tr>
              ))}

            </tbody>

          </table>

          {filteredAdmissions.length === 0 && (
            <div className="no-patients">
              <h3>No admission records found</h3>
              <p>Try a different search.</p>
            </div>
          )}

        </div>
      </div>

      {/* Bed Availability */}
      <div className="patients-table-card bed-table-card">

        <div className="table-header">

          <div>
            <h2>Bed Availability</h2>
            <p>Current hospital bed status</p>
          </div>

        </div>

        <div className="table-container">

          <table>

            <thead>
              <tr>
                <th>Bed ID</th>
                <th>Room</th>
                <th>Ward</th>
                <th>Type</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>

              {beds.map((bed) => (
                <tr key={bed.id}>

                  <td>
                    <strong>{bed.id}</strong>
                  </td>

                  <td>{bed.room}</td>

                  <td>{bed.ward}</td>

                  <td>{bed.type}</td>

                  <td>
                    <span
                      className={
                        bed.status === "Available"
                          ? "status-active"
                          : bed.status === "Occupied"
                          ? "status-occupied"
                          : "status-pending"
                      }
                    >
                      {bed.status}
                    </span>
                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>
      </div>

      {/* Admission Details */}
      {selectedAdmission && (
        <div className="patient-details-overlay">

          <div className="patient-details-card">

            <div className="patient-details-header">

              <div>
                <h2>Admission Details</h2>
                <p>{selectedAdmission.id}</p>
              </div>

              <button
                className="details-close"
                onClick={() =>
                  setSelectedAdmission(null)
                }
              >
                ×
              </button>

            </div>

            <div className="patient-profile">

              <div className="profile-avatar">
                🛏️
              </div>

              <div>
                <h3>{selectedAdmission.patient}</h3>
                <p>{selectedAdmission.patientId}</p>
              </div>

              <span
                className={
                  selectedAdmission.status === "Admitted"
                    ? "status-active"
                    : "status-pending"
                }
              >
                {selectedAdmission.status}
              </span>

            </div>

            <div className="patient-info-grid">

              <div>
                <span>Doctor</span>
                <strong>
                  {selectedAdmission.doctor}
                </strong>
              </div>

              <div>
                <span>Ward</span>
                <strong>
                  {selectedAdmission.ward}
                </strong>
              </div>

              <div>
                <span>Room</span>
                <strong>
                  {selectedAdmission.room}
                </strong>
              </div>

              <div>
                <span>Bed</span>
                <strong>
                  {selectedAdmission.bed}
                </strong>
              </div>

              <div>
                <span>Admission Date</span>
                <strong>
                  {selectedAdmission.admissionDate}
                </strong>
              </div>

              <div>
                <span>Discharge Date</span>
                <strong>
                  {selectedAdmission.dischargeDate ||
                    "Not discharged"}
                </strong>
              </div>

            </div>

            <div className="medical-section">
              <h3>Admission Status</h3>

              <p>
                Patient is currently{" "}
                <strong>{selectedAdmission.status}</strong>.
              </p>
            </div>

            {selectedAdmission.status === "Admitted" && (
              <button
                className="discharge-btn"
                onClick={() =>
                  handleDischarge(selectedAdmission.id)
                }
              >
                🚪 Discharge Patient
              </button>
            )}

            <button
              className="register-btn"
              onClick={() =>
                setSelectedAdmission(null)
              }
            >
              Close
            </button>

          </div>
        </div>
      )}

    </section>
  );
}

function Billing() {
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState(null);

  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
  const fetchInvoices = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/invoices"
      );

      const data = await response.json();

      const formattedInvoices =
        data.invoices.map((invoice) => {
          const consultation =
            invoice.items.find(
              (item) =>
                item.description ===
                "Consultation"
            )?.amount || 0;

          const laboratory =
            invoice.items.find(
              (item) =>
                item.description ===
                "Laboratory"
            )?.amount || 0;

          const pharmacy =
            invoice.items.find(
              (item) =>
                item.description ===
                "Pharmacy"
            )?.amount || 0;

          const room =
            invoice.items.find(
              (item) =>
                item.description ===
                "Room / Bed"
            )?.amount || 0;

          return {
            id: invoice.invoiceId,
            patient: invoice.patient,
            patientId:
              invoice.patientId || "N/A",

            date: invoice.invoiceDate
              ? invoice.invoiceDate.slice(0, 10)
              : "",

            consultation,
            laboratory,
            pharmacy,
            room,

            discount: invoice.discount || 0,
            tax: invoice.tax || 0,
            total: invoice.totalAmount || 0,

            paid:
              invoice.paymentStatus === "Paid"
                ? invoice.totalAmount
                : 0,

            paymentMethod:
              invoice.paymentMethod || "Cash",

            status:
              invoice.paymentStatus ===
              "Partially Paid"
                ? "Partial"
                : invoice.paymentStatus,
          };
        });

      setInvoices(formattedInvoices);
    } catch (error) {
      console.error(
        "Failed to fetch invoices:",
        error
      );
    }
  };

  fetchInvoices();
}, []);

  const [formData, setFormData] = useState({
    patient: "",
    patientId: "",
    date: "",
    consultation: "",
    laboratory: "",
    pharmacy: "",
    room: "",
    discount: "",
    tax: "",
    paymentMethod: "",
    paid: "",
  });

  const filteredInvoices = invoices.filter(
    (invoice) =>
      invoice.patient.toLowerCase().includes(search.toLowerCase()) ||
      invoice.patientId.toLowerCase().includes(search.toLowerCase()) ||
      invoice.id.toLowerCase().includes(search.toLowerCase())
  );

  const subtotal =
    Number(formData.consultation || 0) +
    Number(formData.laboratory || 0) +
    Number(formData.pharmacy || 0) +
    Number(formData.room || 0);

  const discount = Number(formData.discount || 0);
  const tax = Number(formData.tax || 0);

  const total = Math.max(
    0,
    subtotal - discount + tax
  );

  const paidAmount = Number(formData.paid || 0);

  const getPaymentStatus = () => {
    if (paidAmount <= 0) {
      return "Pending";
    }

    if (paidAmount >= total) {
      return "Paid";
    }

    return "Partial";
  };

   const handleCreateInvoice = async (e) => {
  e.preventDefault();

  if (
    !formData.patient ||
    !formData.date ||
    !formData.paymentMethod
  ) {
    alert("Please fill all required billing fields.");
    return;
  }

  try {
    // Generate next Invoice ID
    const existingIds = invoices
      .map((invoice) =>
        Number(invoice.id.replace("INV-", ""))
      )
      .filter((id) => !isNaN(id));

    const nextId =
      existingIds.length > 0
        ? Math.max(...existingIds) + 1
        : 1001;

    const newInvoiceId = `INV-${nextId}`;

    const paymentStatus =
      getPaymentStatus();

    // Items stored inside MongoDB
    const items = [
      {
        description: "Consultation",
        quantity: 1,
        price: Number(
          formData.consultation || 0
        ),
        amount: Number(
          formData.consultation || 0
        ),
      },
      {
        description: "Laboratory",
        quantity: 1,
        price: Number(
          formData.laboratory || 0
        ),
        amount: Number(
          formData.laboratory || 0
        ),
      },
      {
        description: "Pharmacy",
        quantity: 1,
        price: Number(
          formData.pharmacy || 0
        ),
        amount: Number(
          formData.pharmacy || 0
        ),
      },
      {
        description: "Room / Bed",
        quantity: 1,
        price: Number(formData.room || 0),
        amount: Number(formData.room || 0),
      },
    ].filter((item) => item.amount > 0);

    const invoiceData = {
      invoiceId: newInvoiceId,

      patient: formData.patient,

      patientId:
        formData.patientId || "",

      invoiceDate: formData.date,

      items: items,

      subtotal: subtotal,

      discount: discount,

      tax: tax,

      totalAmount: total,

      paymentMethod:
        formData.paymentMethod ===
        "Bank Transfer"
          ? "Other"
          : formData.paymentMethod,

      paymentStatus:
        paymentStatus === "Partial"
          ? "Partially Paid"
          : paymentStatus,

      notes:
        "Invoice created from Billing module.",
    };

    // Send invoice to backend
    const response = await fetch(
      "http://localhost:5000/api/invoices",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(invoiceData),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.error ||
          "Failed to create invoice"
      );
    }

    // Convert backend invoice to frontend format
    const savedInvoice = {
      id: data.invoice.invoiceId,

      patient: data.invoice.patient,

      patientId:
        data.invoice.patientId || "N/A",

      date: data.invoice.invoiceDate
        .slice(0, 10),

      consultation:
        data.invoice.items.find(
          (item) =>
            item.description ===
            "Consultation"
        )?.amount || 0,

      laboratory:
        data.invoice.items.find(
          (item) =>
            item.description ===
            "Laboratory"
        )?.amount || 0,

      pharmacy:
        data.invoice.items.find(
          (item) =>
            item.description ===
            "Pharmacy"
        )?.amount || 0,

      room:
        data.invoice.items.find(
          (item) =>
            item.description ===
            "Room / Bed"
        )?.amount || 0,

      discount:
        data.invoice.discount || 0,

      tax:
        data.invoice.tax || 0,

      total:
        data.invoice.totalAmount || 0,

      paid:
        data.invoice.paymentStatus ===
        "Paid"
          ? data.invoice.totalAmount
          : paidAmount,

      paymentMethod:
        data.invoice.paymentMethod,

      status:
        data.invoice.paymentStatus ===
        "Partially Paid"
          ? "Partial"
          : data.invoice.paymentStatus,
    };

    setInvoices([
      savedInvoice,
      ...invoices,
    ]);

    // Reset form
    setFormData({
      patient: "",
      patientId: "",
      date: "",
      consultation: "",
      laboratory: "",
      pharmacy: "",
      room: "",
      discount: "",
      tax: "",
      paymentMethod: "",
      paid: "",
    });

    setShowForm(false);

    alert(
      "Invoice created successfully! 🧾"
    );
  } catch (error) {
    console.error(
      "Failed to create invoice:",
      error
    );

    alert(
      "Failed to create invoice. Please try again."
    );
  }
};

  const totalRevenue = invoices.reduce(
    (sum, invoice) => sum + invoice.paid,
    0
  );

  const pendingAmount = invoices.reduce(
    (sum, invoice) => sum + (invoice.total - invoice.paid),
    0
  );

  const paidInvoices = invoices.filter(
    (invoice) => invoice.status === "Paid"
  ).length;

  const pendingInvoices = invoices.filter(
    (invoice) => invoice.status !== "Paid"
  ).length;

  return (
    <section className="page-content">

      {/* Header */}
      <div className="patients-header">
        <div>
          <h1>Billing & Payments</h1>
          <p>
            Manage invoices, hospital charges and patient payments
          </p>
        </div>

        <button
          className="add-patient-btn"
          onClick={() => setShowForm(true)}
        >
          + Create Invoice
        </button>
      </div>

      {/* Create Invoice Form */}
      {showForm && (
        <div className="patient-form-card billing-form-card">

          <div className="form-header">
            <div>
              <h2>Create New Invoice</h2>
              <p>
                Enter patient charges and payment information
              </p>
            </div>

            <button
              className="close-form"
              onClick={() => setShowForm(false)}
            >
              ×
            </button>
          </div>

          <form
            className="patient-form"
            onSubmit={handleCreateInvoice}
          >

            {/* Patient */}
            <div className="form-group">
              <label>Patient *</label>

              <select
                value={formData.patient}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    patient: e.target.value,
                    patientId:
                      e.target.options[e.target.selectedIndex]
                        .dataset.id || "",
                  })
                }
              >
                <option value="">Select Patient</option>

                <option
                  value="Rahul Kumar"
                  data-id="P-1001"
                >
                  Rahul Kumar
                </option>

                <option
                  value="Priya Sharma"
                  data-id="P-1002"
                >
                  Priya Sharma
                </option>

                <option
                  value="Suresh Reddy"
                  data-id="P-1003"
                >
                  Suresh Reddy
                </option>

                <option
                  value="Lakshmi Devi"
                  data-id="P-1004"
                >
                  Lakshmi Devi
                </option>

                <option
                  value="Arjun Reddy"
                  data-id="P-1005"
                >
                  Arjun Reddy
                </option>

                <option
                  value="Anjali Sharma"
                  data-id="P-1006"
                >
                  Anjali Sharma
                </option>
              </select>
            </div>

            {/* Date */}
            <div className="form-group">
              <label>Invoice Date *</label>

              <input
                type="date"
                value={formData.date}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    date: e.target.value,
                  })
                }
              />
            </div>

            {/* Consultation */}
            <div className="form-group">
              <label>Consultation Charges (₹)</label>

              <input
                type="number"
                min="0"
                placeholder="0"
                value={formData.consultation}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    consultation: e.target.value,
                  })
                }
              />
            </div>

            {/* Laboratory */}
            <div className="form-group">
              <label>Laboratory Charges (₹)</label>

              <input
                type="number"
                min="0"
                placeholder="0"
                value={formData.laboratory}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    laboratory: e.target.value,
                  })
                }
              />
            </div>

            {/* Pharmacy */}
            <div className="form-group">
              <label>Pharmacy Charges (₹)</label>

              <input
                type="number"
                min="0"
                placeholder="0"
                value={formData.pharmacy}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    pharmacy: e.target.value,
                  })
                }
              />
            </div>

            {/* Room */}
            <div className="form-group">
              <label>Room / Bed Charges (₹)</label>

              <input
                type="number"
                min="0"
                placeholder="0"
                value={formData.room}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    room: e.target.value,
                  })
                }
              />
            </div>

            {/* Discount */}
            <div className="form-group">
              <label>Discount (₹)</label>

              <input
                type="number"
                min="0"
                placeholder="0"
                value={formData.discount}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    discount: e.target.value,
                  })
                }
              />
            </div>

            {/* Tax */}
            <div className="form-group">
              <label>Tax (₹)</label>

              <input
                type="number"
                min="0"
                placeholder="0"
                value={formData.tax}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    tax: e.target.value,
                  })
                }
              />
            </div>

            {/* Payment Method */}
            <div className="form-group">
              <label>Payment Method *</label>

              <select
                value={formData.paymentMethod}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    paymentMethod: e.target.value,
                  })
                }
              >
                <option value="">
                  Select Payment Method
                </option>

                <option value="Cash">Cash</option>
                <option value="UPI">UPI</option>
                <option value="Card">Card</option>
                <option value="Bank Transfer">
                  Bank Transfer
                </option>
                <option value="Insurance">
                  Insurance
                </option>
              </select>
            </div>

            {/* Paid Amount */}
            <div className="form-group">
              <label>Amount Paid (₹)</label>

              <input
                type="number"
                min="0"
                placeholder="0"
                value={formData.paid}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    paid: e.target.value,
                  })
                }
              />
            </div>

            {/* Total Preview */}
            <div className="billing-total-preview">

              <div>
                <span>Subtotal</span>
                <strong>₹{subtotal.toFixed(2)}</strong>
              </div>

              <div>
                <span>Discount</span>
                <strong>- ₹{discount.toFixed(2)}</strong>
              </div>

              <div>
                <span>Tax</span>
                <strong>+ ₹{tax.toFixed(2)}</strong>
              </div>

              <div className="grand-total">
                <span>Total Amount</span>
                <strong>₹{total.toFixed(2)}</strong>
              </div>

              <div>
                <span>Balance Due</span>
                <strong>
                  ₹{Math.max(0, total - paidAmount).toFixed(2)}
                </strong>
              </div>

            </div>

            <div className="form-actions">

              <button
                type="button"
                className="cancel-btn"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="register-btn"
              >
                Create Invoice
              </button>

            </div>

          </form>
        </div>
      )}

      {/* Summary */}
      <div className="patients-summary">

        <div className="summary-card">
          <div className="summary-icon">🧾</div>

          <div>
            <span>Total Invoices</span>
            <strong>{invoices.length}</strong>
          </div>
        </div>

        <div className="summary-card">
          <div className="summary-icon">💰</div>

          <div>
            <span>Total Collected</span>
            <strong>₹{totalRevenue}</strong>
          </div>
        </div>

        <div className="summary-card">
          <div className="summary-icon">⏳</div>

          <div>
            <span>Pending Amount</span>
            <strong>₹{pendingAmount}</strong>
          </div>
        </div>

        <div className="summary-card">
          <div className="summary-icon">✅</div>

          <div>
            <span>Paid Invoices</span>
            <strong>{paidInvoices}</strong>
          </div>
        </div>

      </div>

      {/* Invoice Table */}
      <div className="patients-table-card">

        <div className="table-header">

          <div>
            <h2>Invoice Records</h2>
            <p>
              View and manage patient billing records
            </p>
          </div>

          <div className="search-box">
            <Search size={17} />

            <input
              type="text"
              placeholder="Search invoices..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />
          </div>

        </div>

        <div className="table-container">

          <table>

            <thead>
              <tr>
                <th>Invoice ID</th>
                <th>Patient</th>
                <th>Date</th>
                <th>Subtotal</th>
                <th>Discount</th>
                <th>Total</th>
                <th>Paid</th>
                <th>Balance</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {filteredInvoices.map((invoice) => {

                const invoiceSubtotal =
                  invoice.consultation +
                  invoice.laboratory +
                  invoice.pharmacy +
                  invoice.room;

                const balance =
                  invoice.total - invoice.paid;

                return (
                  <tr key={invoice.id}>

                    <td>
                      <strong>{invoice.id}</strong>
                    </td>

                    <td>
                      <strong>{invoice.patient}</strong>
                      <br />
                      <small>{invoice.patientId}</small>
                    </td>

                    <td>{invoice.date}</td>

                    <td>
                      ₹{invoiceSubtotal}
                    </td>

                    <td>
                      ₹{invoice.discount}
                    </td>

                    <td>
                      <strong>
                        ₹{invoice.total}
                      </strong>
                    </td>

                    <td>
                      ₹{invoice.paid}
                    </td>

                    <td>
                      ₹{balance}
                    </td>

                    <td>
                      <span
                        className={
                          invoice.status === "Paid"
                            ? "status-active"
                            : invoice.status === "Partial"
                            ? "status-progress"
                            : "status-pending"
                        }
                      >
                        {invoice.status}
                      </span>
                    </td>

                    <td>
                      <button
                        className="view-btn"
                        onClick={() =>
                          setSelectedInvoice(invoice)
                        }
                      >
                        View
                      </button>
                    </td>

                  </tr>
                );
              })}

            </tbody>

          </table>

          {filteredInvoices.length === 0 && (
            <div className="no-patients">
              <h3>No invoices found</h3>
              <p>Try a different search.</p>
            </div>
          )}

        </div>
      </div>

      {/* Invoice Details */}
      {selectedInvoice && (
        <div className="patient-details-overlay">

          <div className="patient-details-card invoice-details-card">

            <div className="patient-details-header">

              <div>
                <h2>Invoice</h2>
                <p>{selectedInvoice.id}</p>
              </div>

              <button
                className="details-close"
                onClick={() =>
                  setSelectedInvoice(null)
                }
              >
                ×
              </button>

            </div>

            <div className="patient-profile">

              <div className="profile-avatar">
                🧾
              </div>

              <div>
                <h3>{selectedInvoice.patient}</h3>
                <p>{selectedInvoice.patientId}</p>
              </div>

              <span
                className={
                  selectedInvoice.status === "Paid"
                    ? "status-active"
                    : selectedInvoice.status === "Partial"
                    ? "status-progress"
                    : "status-pending"
                }
              >
                {selectedInvoice.status}
              </span>

            </div>

            <div className="invoice-breakdown">

              <div>
                <span>Consultation</span>
                <strong>
                  ₹{selectedInvoice.consultation}
                </strong>
              </div>

              <div>
                <span>Laboratory</span>
                <strong>
                  ₹{selectedInvoice.laboratory}
                </strong>
              </div>

              <div>
                <span>Pharmacy</span>
                <strong>
                  ₹{selectedInvoice.pharmacy}
                </strong>
              </div>

              <div>
                <span>Room / Bed</span>
                <strong>
                  ₹{selectedInvoice.room}
                </strong>
              </div>

              <div>
                <span>Subtotal</span>
                <strong>
                  ₹
                  {selectedInvoice.consultation +
                    selectedInvoice.laboratory +
                    selectedInvoice.pharmacy +
                    selectedInvoice.room}
                </strong>
              </div>

              <div>
                <span>Discount</span>
                <strong>
                  - ₹{selectedInvoice.discount}
                </strong>
              </div>

              <div>
                <span>Tax</span>
                <strong>
                  + ₹{selectedInvoice.tax}
                </strong>
              </div>

              <div className="invoice-grand-total">
                <span>Total Amount</span>
                <strong>
                  ₹{selectedInvoice.total}
                </strong>
              </div>

              <div>
                <span>Amount Paid</span>
                <strong>
                  ₹{selectedInvoice.paid}
                </strong>
              </div>

              <div>
                <span>Balance Due</span>
                <strong>
                  ₹
                  {selectedInvoice.total -
                    selectedInvoice.paid}
                </strong>
              </div>

              <div>
                <span>Payment Method</span>
                <strong>
                  {selectedInvoice.paymentMethod}
                </strong>
              </div>

              <div>
                <span>Invoice Date</span>
                <strong>
                  {selectedInvoice.date}
                </strong>
              </div>

            </div>

            <button
              className="register-btn"
              onClick={() =>
                setSelectedInvoice(null)
              }
            >
              Close Invoice
            </button>

          </div>
        </div>
      )}

    </section>
  );
}


function Reports() {
  const [reportType, setReportType] = useState("Overview");

  const [reportDataFromBackend, setReportDataFromBackend] =
    useState(null);

    useEffect(() => {
  const fetchReports = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/reports"
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Failed to fetch reports"
        );
      }

      setReportDataFromBackend(data.reports);
    } catch (error) {
      console.error(
        "Failed to fetch reports:",
        error
      );
    }
  };

  fetchReports();
}, []);

const totals =
  reportDataFromBackend?.totals || {};

const revenue =
  reportDataFromBackend?.revenue || {};

const appointmentStatus =
  reportDataFromBackend?.appointmentStatus || [];

const admissionStatus =
  reportDataFromBackend?.admissionStatus || [];

const labStatus =
  reportDataFromBackend?.labStatus || [];

  
  const getStatusCount = (statusList, statusName) => {
  return (
    statusList.find(
      (item) => item._id === statusName
    )?.count || 0
  );
};

  const reportData = {
    Overview: {
      title: "Hospital Overview",
      description: "Overall hospital performance and activity",
    },
    Patients: {
      title: "Patient Report",
      description: "Patient registration and activity report",
    },
    Appointments: {
      title: "Appointment Report",
      description: "Appointment activity and status report",
    },
    Revenue: {
      title: "Revenue Report",
      description: "Hospital billing and payment analysis",
    },
  };

  const currentReport = reportData[reportType];

   const monthlyRevenueFromBackend =
  reportDataFromBackend?.monthlyRevenue || [];

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const monthlyRevenue = monthlyRevenueFromBackend.map(
  (item) => ({
    month: monthNames[item._id.month - 1],
    value: item.value,
  })
);

  const departmentDataFromBackend =
  reportDataFromBackend?.departmentData || [];

const departmentData =
  departmentDataFromBackend.map((item) => ({
    name: item._id,
    patients: item.patients,
  }));

  const maxRevenue = Math.max(
    ...monthlyRevenue.map((item) => item.value)
  );

  return (
    <section className="page-content reports-page">

      {/* Header */}
      <div className="patients-header">
        <div>
          <h1>Reports & Analytics</h1>
          <p>
            Monitor hospital performance, revenue and patient activity
          </p>
        </div>

        <button
          className="add-patient-btn"
          onClick={() => alert("Report generated successfully! 📊")}
        >
          ⬇ Generate Report
        </button>
      </div>

      {/* Report Selector */}
      <div className="report-tabs">

        {["Overview", "Patients", "Appointments", "Revenue"].map(
          (type) => (
            <button
              key={type}
              className={
                reportType === type
                  ? "report-tab active"
                  : "report-tab"
              }
              onClick={() => setReportType(type)}
            >
              {type}
            </button>
          )
        )}

      </div>

      {/* Current Report */}
      <div className="report-heading-card">

        <div>
          <h2>{currentReport.title}</h2>
          <p>{currentReport.description}</p>
        </div>

        <span className="report-period">
          September 2026
        </span>

      </div>

      {/* Statistics */}
      <div className="patients-summary">

        <div className="summary-card report-stat-card">
          <div className="summary-icon">
            👥
          </div>

          <div>
            <span>Total Patients</span>
             <strong>{totals.patients || 0}</strong>
            <small className="growth-positive">
              ↑ 12.5% this month
            </small>
          </div>
        </div>

        <div className="summary-card report-stat-card">
          <div className="summary-icon">
            📅
          </div>

          <div>
            <span>Appointments</span>
            <strong>{totals.appointments || 0}</strong>
            <small className="growth-positive">
              ↑ 8.3% this month
            </small>
          </div>
        </div>

        <div className="summary-card report-stat-card">
          <div className="summary-icon">
            🏥
          </div>

          <div>
            <span>Admissions</span>
             <strong>{totals.admissions || 0}</strong>
            <small className="growth-positive">
              ↑ 5.7% this month
            </small>
          </div>
        </div>

        <div className="summary-card report-stat-card">
          <div className="summary-icon">
            💰
          </div>

          <div>
            <span>Total Revenue</span>
            <strong>₹{(revenue.total || 0).toLocaleString()}</strong>
            <small className="growth-positive">
              ↑ 17.4% this month
            </small>
          </div>
        </div>

      </div>

      {/* Charts Row */}
      <div className="reports-grid">

        {/* Revenue Chart */}
        <div className="report-card revenue-card">

          <div className="report-card-header">
            <div>
              <h3>Revenue Overview</h3>
              <p>Monthly revenue performance</p>
            </div>

            <span>₹{((revenue.total || 0) / 1000).toFixed(1)}K</span>
          </div>

          <div className="bar-chart">

            {monthlyRevenue.map((item) => {

              const height =
                (item.value / maxRevenue) * 100;

              return (
                <div
                  className="bar-column"
                  key={item.month}
                >

                  <div className="bar-value">
                    ₹{(item.value / 1000).toFixed(1)}K
                  </div>

                  <div className="bar-wrapper">

                    <div
                      className="revenue-bar"
                      style={{
                        height: `${height}%`,
                      }}
                    ></div>

                  </div>

                  <span className="bar-label">
                    {item.month}
                  </span>

                </div>
              );
            })}

          </div>

        </div>

        {/* Department Report */}
        <div className="report-card">

          <div className="report-card-header">
            <div>
              <h3>Patients by Department</h3>
              <p>Current patient distribution</p>
            </div>
          </div>

          <div className="department-list">

            {departmentData.map((department) => (

              <div
                className="department-row"
                key={department.name}
              >

                <div className="department-info">

                  <span>
                    {department.name}
                  </span>

                  <strong>
                    {department.patients}
                  </strong>

                </div>

                <div className="department-progress">

                  <div
                    className="department-progress-bar"
                    style={{
                      width: `${
                        (department.patients / 50) * 100
                      }%`,
                    }}
                  ></div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* Bottom Reports */}
      <div className="reports-bottom-grid">

        {/* Appointment Status */}
        <div className="report-card">

          <div className="report-card-header">
            <div>
              <h3>Appointment Status</h3>
              <p>Current appointment distribution</p>
            </div>
          </div>

          <div className="status-report-list">

            <div className="status-report-item">
              <span>
                <i className="status-dot confirmed"></i>
                Confirmed
              </span>
              <strong>{getStatusCount(appointmentStatus,"Confirmed" )}</strong>
            </div>

            <div className="status-report-item">
              <span>
                <i className="status-dot pending"></i>
                Pending
              </span>
               <strong>{getStatusCount(appointmentStatus,"Pending" )}</strong>
            </div>

            <div className="status-report-item">
              <span>
                <i className="status-dot cancelled"></i>
                Cancelled
              </span>
               <strong>{getStatusCount(appointmentStatus,"Cancelled")}</strong>
            </div>

          </div>

          <div className="appointment-total">
            <span>Total Appointments</span>
             <strong>{totals.appointments || 0}</strong>
          </div>

        </div>

        {/* Hospital Activity */}
        <div className="report-card">

          <div className="report-card-header">
            <div>
              <h3>Hospital Activity</h3>
              <p>Current operational summary</p>
            </div>
          </div>

          <div className="activity-list">

            <div className="activity-item">
              <span className="activity-icon">
                👨‍⚕️
              </span>

              <div>
              <strong>{totals.doctors || 0} Doctors</strong>
              <p>Hospital doctors</p>
              </div>
            </div>

            <div className="activity-item">
              <span className="activity-icon">
                💊
              </span>

              <div>
                 <strong>{totals.medicines || 0} Medicines</strong>
                 <p>Medicines in pharmacy</p>
              </div>
            </div>

            <div className="activity-item">
              <span className="activity-icon">
                🛏️
              </span>

              <div>
                 <strong>{totals.admissions || 0} Admissions</strong>
                   <p>Total admission records</p>
              </div>
            </div>

            <div className="activity-item">
              <span className="activity-icon">
                🧪
              </span>

              <div>
                <strong>{totals.labTests || 0} Lab Tests</strong>
                   <p>{getStatusCount(labStatus, "Pending")} pending</p>
                 
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

/* =========================================================
   OTHER PAGE PLACEHOLDER
========================================================= */

function PagePlaceholder({ pageName }) {

  return (

    <section className="content">

      <div className="heading-row">

        <div>

          <p className="eyebrow">
            HOSPITAL MANAGEMENT
          </p>

          <h1>
            {pageName}
          </h1>

          <p className="subtitle">
            The {pageName.toLowerCase()} module is ready to be developed.
          </p>

        </div>


        <div className="date-box">

          <CalendarDays size={17} />

          September 23, 2026

        </div>

      </div>


      <div className="card">

        <div className="card-header">

          <div>

            <h2>
              {pageName}
            </h2>

            <p>
              Manage hospital {pageName.toLowerCase()} information here.
            </p>

          </div>

        </div>

      </div>

    </section>

  );

}


export default App;