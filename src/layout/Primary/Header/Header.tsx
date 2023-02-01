import { Layout, Space, Button, Typography } from 'antd';
import {
  HeartOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { HeaderProps } from './Header.props';
import './Header.css';
import { useOrderContext } from '../../../providers/OrderProvider';

const { Header: AntHeader } = Layout;
const { Text } = Typography;

export const Header = (props: HeaderProps): JSX.Element => {
  const { subTotal } = useOrderContext();

  return (
    <AntHeader
      className="headerContainer"
      style={{ backgroundColor: props.backgroundColor }}
    >
      <img
        src="https://santex.wpengine.com/wp-content/uploads/2019/02/logo-santex@3x.png"
        alt="logo"
        style={{ width: 150 }}
      />
      <Space align="center">
        <Button icon={<UserOutlined />} type="text" size="large" />
        <Button icon={<HeartOutlined />} type="text" size="large" />
        <Button icon={<ShoppingCartOutlined />} type="text" size="large" />
        <Text
          strong
          style={{
            fontSize: 14,
            display: 'block',
            minWidth: 72,
            textAlign: 'right',
          }}
        >{`$ ${subTotal.toLocaleString()}`}</Text>
      </Space>
    </AntHeader>
  );
};
