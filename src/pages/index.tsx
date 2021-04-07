import React from 'react';
import { PageProps } from 'gatsby';

const Home: React.FC<PageProps> = () => (
  <main>
    <a href="/clothing-store">Zum Klamottenladen!</a>
    <br />
    <a href="/shop">Zum 24/7!</a> <br />
    <h1>Mit F3 öffnest du den Shop!</h1>
  </main>
);

export default Home;
