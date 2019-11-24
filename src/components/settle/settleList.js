import React from 'react'
import { List, Button } from 'antd';

export default function SettleList({data, approve}){


    return (
        <div>
        <h3 style={{ marginBottom: 16 }}>Confirm Payment</h3>
        <List
        bordered
        dataSource={data}
        renderItem={item => (
            <List.Item>
            <List.Item.Meta
            title={<p>{item.amount} |{<br/>}| {item.status}</p>}
            description={<Button onClick={() => approve(item.id)}>Confirm</Button>}
            />
        </List.Item>
      )}
    />
        </div>
    )
}

