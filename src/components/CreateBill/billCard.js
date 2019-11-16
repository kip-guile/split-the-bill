import React from 'react';
import { List, Card } from 'antd'


export default function BillCard({ bill }) {

  
  return (
    <div style={{ background: '#ECECEC', padding: '30px' }}>
    <Card title={bill.title} bordered={false} style={{ width: 300 }}>
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