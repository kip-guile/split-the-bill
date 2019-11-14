import React from 'react'
import { Layout, Typography, Avatar, Menu, Icon, Breadcrumb } from 'antd';
import { SubMenu } from 'rc-menu';

const { Header, Footer, Sider, Content } = Layout
const { Title } = Typography;



export const Dashboard = (props) => {


    return (
        <div>
        <Layout>
            <Header style={{padding: '1em'}}>
            <Avatar style={{float:'right'}} size="large" icon="user" />
            <Title style={{color: 'white'}} level={3}>SPLIT THE BILL</Title>
            </Header>

            <Layout>
            <Sider>
                <Menu 
                    defaultSelectedKeys={['Dashboard']}
                    mode="inline">
                    <Menu.Item key='Dashboard'>
                        Dashboard
                    </Menu.Item>

                    <SubMenu 
                        title={<span>
                            <Icon type='mail'/>
                            <span>Navigation 1</span>
                        </span>}>
                        <Menu.ItemGroup key='Bills' title='Bills'>
                            <Menu.Item key='bills1'>Bills</Menu.Item>
                            <Menu.Item key='bills2'>Splits</Menu.Item>
                        </Menu.ItemGroup>
                    </SubMenu>
                </Menu>
            </Sider>
            
            
            <Layout>
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ background: '#fff', padding: 24, minHeight: 560 }}>Content</div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Split The Bill Created by Alexander</Footer>
            </Layout>
            </Layout>
        </Layout>
      </div>
    )
}