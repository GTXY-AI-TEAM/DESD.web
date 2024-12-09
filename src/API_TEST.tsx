import { observer } from 'mobx-react-lite';
import { ConfigProvider } from 'antd';

const API_Test = observer(() => {
  return (
    <ConfigProvider theme={{
      token: {
        colorBgContainer: '#2a2a2a',
        colorText: '#fff',
      }
    }}>
      <div className="app-container">
        {/* 这里可以添加API_Test组件的内容 */}
      </div>
    </ConfigProvider>
  );
});

export default API_Test; 