import React from 'react';
import styles from './DashboardView.module.css';

const DashboardView = () => {
  return (
    <div className={styles.dashboardContainer}>
      
      {/* Chart Section */}
      <div className={styles.chartSection}>
        <div className={styles.pieChartVisual} />

        <div className={styles.labelList}>
          <div className={styles.labelItem}>
            <div className={styles.colorDot} style={{ backgroundColor: '#E91E63' }} />
            <span>Repaired</span>
          </div>
          <div className={styles.labelItem}>
            <div className={styles.colorDot} style={{ backgroundColor: '#22C55E' }} />
            <span>Not Repaired</span>
          </div>
          <div className={styles.labelItem}>
            <div className={styles.colorDot} style={{ backgroundColor: '#2563EB' }} />
            <span>Under Repair</span>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className={styles.summaryCard}>
        <h4 className={styles.cardTitle}>Stocks running low</h4>
        <p className={styles.cardValue}>12</p>
      </div>

      <div className={styles.summaryCard}>
        <h4 className={styles.cardTitle}>Stocks on order</h4>
        <p className={styles.cardValue}>7</p>
      </div>

    </div>
  );
};

export default DashboardView;