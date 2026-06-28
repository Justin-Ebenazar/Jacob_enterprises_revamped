import React from 'react';
import styles from './TableComponent.module.css';

const TableComponent = () => {
  // Mock data for the rows
  const data = [
    { id: 1, name: 'John Doe', number: '12345', machine: 'Generator', status: 'Repaired' },
    { id: 2, name: 'Jane Smith', number: '67890', machine: 'Compressor', status: 'Under Repair' },
  ];

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Number</th>
            <th>Machine Type</th>
            <th>Repair Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.number}</td>
              <td>{item.machine}</td>
              <td>{item.status}</td>
              <td>
                <button className={styles.viewButton}>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;