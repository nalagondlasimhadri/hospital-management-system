# Hospital Management System

A full-stack hospital operations dashboard built with React and Vite, an Express REST API, and MongoDB. The application provides screens for managing patients, appointments, doctors, consultations, pharmacy inventory, laboratory tests, admissions, invoices, and operational reports.

> **Important:** This repository is a development/demo application, not a certified clinical or production hospital information system. It does not currently implement authentication, authorization, audit logging, or production-grade protection for patient information. Do not use it with real patient data or expose it to the public internet without an appropriate security, privacy, and compliance review.

## Contents

- [Features](#features)
- [Technology stack](#technology-stack)
- [Architecture](#architecture)
- [Prerequisites](#prerequisites)
- [Getting started](#getting-started)
- [Configuration](#configuration)
- [Running the application](#running-the-application)
- [API reference](#api-reference)
- [Data model](#data-model)
- [Development and verification](#development-and-verification)
- [Current limitations](#current-limitations)
- [Repository structure](#repository-structure)

## Features

- **Dashboard:** hospital overview with example figures and charts.
- **Patients:** register and browse patient records.
- **Appointments:** book and browse appointments.
- **Doctors:** add and browse doctor records.
- **Consultations:** record and browse consultation notes, diagnoses, treatment, and follow-up information.
- **Pharmacy:** add and browse medicine inventory, including quantity, price, and expiry information.
- **Laboratory:** add and browse lab tests, results, and statuses.
- **Admissions:** admit and browse patients, and discharge an admission.
- **Billing:** create and browse invoices with line items and payment information.
- **Reports:** view MongoDB-backed totals, revenue summaries, workflow-status counts, and patient counts by department.
- **Search and filtering:** screens provide local search/filter controls for their displayed records.

The application is a single-page interface; navigation changes the active screen without changing the URL.

## Technology stack

| Area | Technologies |
| --- | --- |
| Frontend | React 19, Vite 8, JavaScript, CSS, Lucide React |
| Backend | Node.js, Express 5, Mongoose 9, dotenv, CORS |
| Database | MongoDB |

The frontend and backend have independent `package.json` files and lockfiles. Install dependencies in each project directory.

## Architecture

```text
Browser
  └── React + Vite frontend (http://localhost:5173)
        └── JSON requests to http://localhost:5000/api
              └── Express backend
                    └── Mongoose models
                          └── MongoDB
```

The backend loads `backend/.env`, connects to MongoDB using `MONGO_URI`, and listens on `PORT` (default `5000`). The frontend currently uses the literal API base URL `http://localhost:5000` in its requests; it does not currently read a `VITE_*` API URL setting.

## Prerequisites

- Node.js 20 or newer and npm. Use a current Node.js LTS release compatible with Vite 8 and Mongoose 9.
- A MongoDB server, either local or hosted, and a MongoDB connection URI.
- Git, if you are cloning the repository.

## Getting started

1. Clone the repository and open its root directory:

   ```bash
   git clone <repository-url>
   cd hospital-management-system
   ```

2. Install backend dependencies:

   ```bash
   cd backend
   npm install
   ```

3. Create `backend/.env` with your MongoDB URI and desired backend port:

   ```dotenv
   MONGO_URI=mongodb://127.0.0.1:27017/hospital_management_system
   PORT=5000
   ```

   For a hosted MongoDB deployment, use the provider's connection URI instead. Keep credentials out of source control; `.env` files are ignored by the repository's root `.gitignore`.

4. In a second terminal, install frontend dependencies:

   ```bash
   cd frontend
   npm install
   ```

## Configuration

### Backend environment variables

| Variable | Required | Default | Description |
| --- | --- | --- | --- |
| `MONGO_URI` | Yes | — | MongoDB connection string used by Mongoose. |
| `PORT` | No | `5000` | Port used by the Express server. The current frontend expects the API at port `5000`. |

The backend calls `dotenv.config()` at startup and exits if the MongoDB connection fails.

## Running the application

Start the backend from the `backend` directory:

```bash
node server.js
```

The backend does not currently define an `npm start` script. On file changes, you can use the installed development dependency:

```bash
npx nodemon server.js
```

Start the frontend in a separate terminal from the `frontend` directory:

```bash
npm run dev
```

Open the URL printed by Vite (normally `http://localhost:5173`). The backend health endpoint is available at `http://localhost:5000/`.

## API reference

All API routes are prefixed with `/api`. Request and response bodies use JSON. Collection reads return the records ordered by most recently created; create endpoints return the saved document. MongoDB documents include Mongoose-managed `_id`, `createdAt`, and `updatedAt` fields.

| Resource | Method | Endpoint | Purpose |
| --- | --- | --- | --- |
| Patients | `GET` | `/api/patients` | List patients. |
| Patients | `POST` | `/api/patients` | Register a patient. |
| Doctors | `GET` | `/api/doctors` | List doctors. |
| Doctors | `POST` | `/api/doctors` | Add a doctor. |
| Appointments | `GET` | `/api/appointments` | List appointments. |
| Appointments | `POST` | `/api/appointments` | Book an appointment. |
| Consultations | `GET` | `/api/consultations` | List consultations. |
| Consultations | `POST` | `/api/consultations` | Add a consultation. |
| Medicines | `GET` | `/api/medicines` | List pharmacy inventory. |
| Medicines | `POST` | `/api/medicines` | Add a medicine. |
| Lab tests | `GET` | `/api/lab-tests` | List lab tests. |
| Lab tests | `POST` | `/api/lab-tests` | Add a lab test. |
| Admissions | `GET` | `/api/admissions` | List admissions. |
| Admissions | `POST` | `/api/admissions` | Admit a patient. |
| Admissions | `PUT` | `/api/admissions/:id` | Discharge an admission, where `:id` is its `admissionId`. |
| Invoices | `GET` | `/api/invoices` | List invoices. |
| Invoices | `POST` | `/api/invoices` | Create an invoice. |
| Reports | `GET` | `/api/reports` | Get hospital totals, revenue, status counts, and department patient counts. |
| Health | `GET` | `/` | Check that the API server is responding. |

### Example requests

Register a patient:

```http
POST /api/patients
Content-Type: application/json
```

```json
{
  "patientId": "P-1001",
  "fullName": "Example Patient",
  "dateOfBirth": "1990-05-14",
  "gender": "Other",
  "bloodGroup": "O+",
  "phone": "+1-555-0100",
  "email": "patient@example.com",
  "address": "Example address",
  "department": "Cardiology",
  "assignedDoctor": "Dr. Example"
}
```

Create an appointment:

```http
POST /api/appointments
Content-Type: application/json
```

```json
{
  "appointmentId": "APT-1001",
  "patient": "Example Patient",
  "doctor": "Dr. Example",
  "department": "Cardiology",
  "date": "2026-10-15",
  "time": "10:30",
  "reason": "Follow-up",
  "status": "Confirmed"
}
```

Discharge an admission:

```http
PUT /api/admissions/ADM-1001
Content-Type: application/json
```

```json
{
  "dischargeDate": "2026-10-15",
  "status": "Discharged",
  "notes": "Discharged with follow-up instructions"
}
```

The admission update defaults `dischargeDate` to the current time and `status` to `Discharged` when those values are omitted. The API returns `404` if the specified admission ID is not found.

### API behavior and validation

- Create routes validate documents using their Mongoose schemas and return `201` on success or `400` on validation/save errors.
- Collection routes return `200` on success or `500` on database/query errors.
- Reports aggregate document counts, invoice totals and paid totals, monthly invoice revenue, appointment/admission/lab-test statuses, and patients grouped by department.
- IDs such as `patientId`, `doctorId`, and `appointmentId` are supplied by the client; the API does not generate them automatically.
- Patients, appointments, doctors, consultations, medicines, lab tests, and invoices currently expose list and create operations only. The admissions route additionally supports its discharge update. There are no delete endpoints.

## Data model

MongoDB collections are represented by Mongoose models in `backend/models`. These records use string IDs and names to refer to related entities; the current schemas do not use Mongoose `ObjectId` references or enforce relationships between records.

| Model | Important fields |
| --- | --- |
| `Patient` | `patientId`, `fullName`, `dateOfBirth`, `gender`, `bloodGroup`, `phone`, `email`, `address`, `department`, `assignedDoctor` |
| `Doctor` | `doctorId`, `name`, `specialty`, `department`, `phone`, `email`, `experience`, `status`, `appointments` |
| `Appointment` | `appointmentId`, `patient`, `doctor`, `department`, `date`, `time`, `reason`, `status` |
| `Consultation` | `consultationId`, `patient`, `doctor`, `date`, `symptoms`, `diagnosis`, `treatment`, `notes`, `followUpDate`, `status` |
| `Medicine` | `medicineId`, `name`, `category`, `manufacturer`, `batch`, `quantity`, `price`, `expiry`, `supplier` |
| `LabTest` | `testId`, `patient`, `patientId`, `testName`, `category`, `doctor`, `sample`, `testDate`, `price`, `result`, `normalRange`, `status`, `remarks` |
| `Admission` | `admissionId`, `patient`, `patientId`, `doctor`, `department`, `ward`, `room`, `bedNumber`, `admissionDate`, `dischargeDate`, `reason`, `status`, `notes` |
| `Invoice` | `invoiceId`, `patient`, `patientId`, `invoiceDate`, `items`, `subtotal`, `discount`, `tax`, `totalAmount`, `paymentMethod`, `paymentStatus`, `notes` |

Schemas require key identifying and operational fields, enforce selected status/gender/payment enums, and apply non-negative constraints to quantities and monetary amounts. See the model files for the complete field-level rules and defaults.

## Development and verification

From `frontend`, the available scripts are:

```bash
npm run dev      # Start the Vite development server
npm run build    # Create the production frontend bundle in frontend/dist
npm run preview  # Preview the production bundle locally
npm run lint     # Run ESLint
```

The backend currently has no configured test suite; its `npm test` script intentionally exits with “Error: no test specified”. The frontend package does not define a test script either.

## Current limitations

- **Development-only API URL:** frontend API calls are hard-coded to `http://localhost:5000`; changing the backend host/port requires frontend code changes.
- **No authentication or authorization:** every exposed API route is unauthenticated, and the backend enables CORS without an origin allowlist.
- **No production hardening:** deployment-grade security headers, request throttling, structured operational logging, and a comprehensive automated test suite are not configured.
- **Dashboard sample content:** dashboard cards/charts and some displayed dates are static demo content; do not treat them as live database metrics.
- **Limited persistence operations:** most resource types can only be created and listed; editing and deletion are not implemented.
- **Client-supplied IDs and references:** identifiers are supplied by the frontend, and related patient/doctor values are stored as strings rather than validated references.
- **Reporting scope:** the reports API currently aggregates all records and does not accept date-range or pagination filters.

## Repository structure

```text
.
├── .gitignore
├── README.md
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
└── frontend/
    ├── public/
    ├── src/
    │   ├── assets/
    │   ├── App.jsx
    │   ├── App.css
    │   ├── index.css
    │   └── main.jsx
    ├── index.html
    ├── vite.config.js
    ├── package.json
    └── package-lock.json
```
