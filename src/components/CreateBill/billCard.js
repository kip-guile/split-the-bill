import React from 'react';
import { Card, Button } from 'antd'


export default function BillCard({ bill, showModal }) {

  
  return (
    <div>
    <Card title={bill.title} style={{ width: 300, marginBottom: '0.5em',
    backgroundColor: '#D3D4D9' }}>
      <p style={{ color: '#91BF26' }}>Amount: {bill.amount}</p>
      <p>status: {bill.status}</p>
      <p>Card content</p>
      {bill.splits.length ?
            <Button
              style={{
                  background: '#BB0A21',
                  border: 'none',
                  color: 'white',
                  marginTop: '10%'
                  }}>
                View Splits
              </Button>
               :             
               <Button  
               onClick={() => showModal(bill.id)}            
                 style={{
                     background: '#4B88A2',
                     border: 'none',
                     color: 'white',
                     marginTop: '10%'
                     }}>
                   Split Bill
            </Button>}
    </Card>
    </div>
  )
}