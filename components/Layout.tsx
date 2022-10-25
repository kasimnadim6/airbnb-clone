import Footer from './Footer';
import Header from './Header';

export default function Layout({ logoUrl, showHeader = true, children }: any) {
  return (
    <>
      {showHeader && <Header logoUrl={logoUrl} />}
      <main>{children}</main>
      <Footer />
    </>
  );
}
