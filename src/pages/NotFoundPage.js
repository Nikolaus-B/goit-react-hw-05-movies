import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div
      style={{
        textAlign: 'center',
        color: '#34495e',
        marginTop: '50px',
      }}
    >
      Sorry! Error! Please use this{' '}
      <Link to="/" style={{ color: '#f39c12' }}>
        link
      </Link>{' '}
      to navigate to our home page
    </div>
  );
}
