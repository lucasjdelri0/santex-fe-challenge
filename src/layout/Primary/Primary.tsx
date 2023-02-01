import { Layout as AntLayout, Typography } from 'antd';
import { HeartOutlined } from '@ant-design/icons';
import Header from './Header';
import { PrimaryProps } from './Primary.props';
import './Primary.css';

const { Content, Footer } = AntLayout;
const { Link } = Typography;

export const Primary = ({ children }: PrimaryProps): JSX.Element => (
  <AntLayout style={{ minHeight: '100vh', minWidth: '100vw' }}>
    <Header backgroundColor="lightgray" />
    <Content
      className="site-layout"
      style={{ padding: '0 48px', display: 'flex', flexDirection: 'column' }}
    >
      {children}
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      Made with <HeartOutlined /> by{' '}
      <Link
        href="https://github.com/lucasjdelri0/santex-fe-challenge"
        target="_blank"
      >
        @lucasjdelri0
      </Link>
    </Footer>
  </AntLayout>
);
