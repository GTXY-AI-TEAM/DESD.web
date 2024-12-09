import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { observer } from 'mobx-react-lite';
import { ConfigProvider, theme } from 'antd';
import { Store } from './globalStore';

interface User {
    id: number;
    name: string;
}

const API_Test = observer(() => {
    const { Dark_themeState } = Store;
    const [users, setUsers] = useState<User[]>([]);
    
    useEffect(() => {
        axios.get('http://localhost:3000/users')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    }, []);

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
            <div>
                <h1>User List</h1>
                <ul>
                    {users.map((user: User) => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            </div>
        </div>
        </ConfigProvider>
    );
});

export default API_Test; 