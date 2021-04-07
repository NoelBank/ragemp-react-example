import React, { useState } from 'react';
import './global.scss';
import { PageProps } from 'gatsby';
import ShopBox from '@/components/ShopBox/ShopBox';
import Layout from '@/components/Layout/Layout';
import useKeypress from 'react-use-keypress';

const Store: React.FC<PageProps> = () => {
  const [isShopOpen, setIsShopOpen] = useState(false);

  useKeypress('F3', () => {
    setIsShopOpen(!isShopOpen);

    if (typeof (window as any).mp !== 'undefined') {
      mp.events.call('triggerInteraction');
    }
  });

  return (
    <Layout>
      {isShopOpen && (
        <ShopBox
          closeShop={() => setIsShopOpen(false)}
          title="Supermarkt"
          image="/store.png"
          hasRobBadge
        />
      )}
    </Layout>
  );
};

export default Store;
