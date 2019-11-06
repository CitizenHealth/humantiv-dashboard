import React from 'react';
import { HVBoard } from '../components/templates';
import { SharedColors } from '../resources';

const Dashboard = () => {

  return (
    <div style={styles.container}>
      <HVBoard 
      />
    </div>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: SharedColors.background
  }
}

export default Dashboard;
