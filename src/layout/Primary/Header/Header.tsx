import { Layout, Space, Badge, Button, Avatar, Typography } from 'antd';
import {
  GithubOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { HeaderProps } from './Header.props';
import './Header.css';
import { useOrderContext } from '../../../providers/OrderProvider';

const { Header: AntHeader } = Layout;
const { Link: AntLink } = Typography;

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
      {/* {props.repoHref && (
      <AntLink href={props.repoHref} target="_blank" className="ghLink">
        <GithubOutlined className="headerLogo" />
      </AntLink>
    )} */}
      <Space align="center">
        <Button icon={<UserOutlined />} type="text" size="large" />
        <Button icon={<HeartOutlined />} type="text" size="large" />
        <Button icon={<ShoppingCartOutlined />} type="text" size="large" />
        {`$ ${subTotal.toLocaleString()}`}
      </Space>
    </AntHeader>
  );
};
