import NavigationBar from "../../Components/nav";
import MainFooter from "../../Components/footer";
import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

import Home from "../../Components/Home/Home";

const { Header, Content, Footer } = Layout;

const WR = () => {

    return (
        <Layout>

            <NavigationBar />


            <Content
                style={{
                    padding: '48px',
                }}
            >


                    <Home />
                    
           
            </Content>

            <MainFooter />
        </Layout>
    );
}

export default WR;