import React from 'react';
import { Card, Button } from 'antd'


export default function BillCard({ bill, showModal, showSettleModal }) {

  
  return (
    <div>
    <Card title={bill.title} style={{ color: 'black', width: 300, marginBottom: '0.5em',
    backgroundColor: '#A4A9AD' }}>
      <h3>Amount: {bill.amount}</h3>
      {bill.splits.length ?
            <Button
            onClick={() => showSettleModal(bill.id)} 
              style={{
                  background: '#BB0A21',
                  border: 'none',
                  color: 'white',
                  marginLeft: '50%',
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
                     marginLeft: '50%',
                     marginTop: '10%'
                     }}>
                   Split Bill
            </Button>}
    </Card>
    </div>
  )
}