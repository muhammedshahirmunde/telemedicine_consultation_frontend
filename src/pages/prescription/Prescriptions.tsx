import { useState } from "react";
import { Table } from "../../components/reusable/Table";

function Prescriptions() {
  const [page, setPage] = useState(1);
  const pageSize = 5;

  const data = [
    {
      id: "RX001",
      appointmentId: "APT1001",
      patientId: "PAT2001",
      doctorId: "DOC3001",
      createdAt: "2025-06-28T10:30:00Z",
      medication: [
        { name: "Paracetamol", dosage: "500mg", frequency: "Twice a day" },
        {
          name: "Amoxicillin",
          dosage: "250mg",
          frequency: "Three times a day",
        },
      ],
      notes: "Take after meals. Complete the full course of antibiotics.",
    },
    {
      id: "RX002",
      appointmentId: "APT1002",
      patientId: "PAT2002",
      doctorId: "DOC3002",
      createdAt: "2025-06-29T14:15:00Z",
      medication: [
        { name: "Ibuprofen", dosage: "400mg", frequency: "Once a day" },
      ],
      notes: "Take with food to avoid stomach upset.",
    },
    {
      id: "RX003",
      appointmentId: "APT1003",
      patientId: "PAT2003",
      doctorId: "DOC3003",
      createdAt: "2025-06-30T09:00:00Z",
      medication: [
        { name: "Cetirizine", dosage: "10mg", frequency: "Once at night" },
        {
          name: "Salbutamol Inhaler",
          dosage: "2 puffs",
          frequency: "As needed",
        },
      ],
      notes: "Avoid allergens. Use inhaler during wheezing episodes.",
    },
  ];

  const columns = [
    { label: "Prescription ID", key: "id" },
    { label: "Appointment ID", key: "appointmentId" },
    { label: "Patient ID", key: "patientId" },
    { label: "Doctor ID", key: "doctorId" },
    { label: "Created At", key: "createdAt" },
    {
      label: "Medications",
      key: "medication",
      render: (value) =>
        Array.isArray(value)
          ? value.map((med, i) => (
              <div key={i}>
                {med.name} - {med.dosage} - {med.frequency}
              </div>
            ))
          : "-",
    },
    { label: "Notes", key: "notes" },
  ];

  const paginatedData = data.slice((page - 1) * pageSize, page * pageSize);
  const totalPages = Math.ceil(data.length / pageSize);

  return (
    <>
      <h2 className="text-xl font-semibold mb-4">Prescriptions</h2>
      <Table
        data={paginatedData}
        columns={columns}
        page={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </>
  );
}

export default Prescriptions;
