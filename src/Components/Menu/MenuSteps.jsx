import React from 'react'
import { Steps } from 'primereact/steps';
function MenuSteps() {
    const items = [
        {label: 'ADM Information'},
        {label: 'ADM Details'},
        {label: 'Anomaly'},
        {label: 'Summary'}
    ];
  return (
    <div>
      <Steps model={items} />
    </div>
  )
}

export default MenuSteps
