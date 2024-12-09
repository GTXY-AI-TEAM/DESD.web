import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { observer } from 'mobx-react-lite';
import { ConfigProvider, theme } from 'antd';
import { Store } from './globalStore';

const API_Test = observer(() => {
    const { Dark_themeState } = Store;

    return (
        <ConfigProvider
        theme={{
            algorithm: Dark_themeState === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm,
            token: {
            // 自定义主题令牌
            colorBgContainer: Dark_themeState === 'dark' ? '#141414' : '#ffffff', // 组件背景色
            },
        }}
        >
        <div className="app-container">
            <a>111</a>
        </div>
        </ConfigProvider>
    );
});

export default API_Test; 