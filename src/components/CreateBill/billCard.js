import React from 'react';
import { Card } from 'antd'


export default function BillCard({ bill }) {

  
  return (
    <div>
    <Card title={bill.title} style={{ width: 300, marginBottom: '0.5em',
    backgroundColor: '#D3D4D9' }}>
      <p style={{ color: '#91BF26' }}>Amount: {bill.amount}</p>
      <p>status: {bill.status}</p>
      <p>Card content</p>
    </Card>
    </div>

    // <div>
    //   <div>
    //     <h2></h2>
    //     <h3 style={{ color: '#91BF26' }}>Amount: {bill.amount}</h3>
    //     <p>status: {bill.status}</p>
    //   </div>
    // </div>
  )
}