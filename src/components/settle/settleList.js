import React from 'react'
import {useSelector} from 'react-redux';
import { List, Button } from 'antd';

export default function SettleList({data, approve}){

    const lumpstate = useSelector(state => state.lumpstate)

    const users = lumpstate.users

    const style = {
        background: '#BB0A21',
        border: 'none',
        color: 'white',
        margin: '0.5em'
        }

    const style2 = {
        background: '#4B88A2',
        border: 'none',
        color: 'white',
        margin: '0.5em'
        }


    return (
        <div>
        <h3 style={{ marginBottom: 16 }}>Confirm Payment</h3>
        <List
        bordered
        dataSource={data}
        renderItem={item => (
            <Listr users={users} item={item} approve={approve} style={style} style2={style2}/>
      )}
    />
        </div>
    )
}

function Listr(props) {
    const {users, item, approve, style, style2} = props

    const userArray = users.find(user => user.id === item.userId)

    return (
        <List.Item style={{backgroundColor: '#A4A9AD'}}>
        <List.Item.Meta
        title={<p>{userArray.firstName} {userArray.lastName} {<br/>} Amount: {item.amount} {<br/>} {item.status}</p>}
        description={item.status === 'pending' ?
        <Button style={style} onClick={() => approve(item.id)}>Confirm</Button> : <Button disabled style={style2} onClick={() => approve(item.id)}>Confirmed</Button>}
        />
    </List.Item>
    )
}

