import { Layout as AntLayout } from 'antd';
import { BellOutlined, HeartOutlined } from '@ant-design/icons';
import Header from './Header';
import { PrimaryProps } from './Primary.props';
import './Primary.css';

const { Content, Footer } = AntLayout;

export const Primary = ({ children }: PrimaryProps): JSX.Element => (
  <AntLayout style={{ maxHeight: '100vh', maxWidth: '100vw' }}>
    <Header
      repoHref="https://github.com/lucasjdelri0/santex-fe-challenge"
      badgeCount={7}
      badgeIcon={<BellOutlined />}
      backgroundColor="#fdbb2d"
    />
    <Content
      className="site-layout"
      style={{ padding: '0 48px', display: 'flex', flexDirection: 'column' }}
    >
      {children}
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      Made with <HeartOutlined /> by @lucasjdelri0
    </Footer>
  </AntLayout>
);
