// Copyright 2018 caicloud authors. All rights reserved.

import Loadable from 'react-loadable';
import { Spin } from 'antd';

const ClusterListPage = Loadable({
  loader: () => import('../components/ClusterList'),
  loading: Spin,
});

const ClusterDetailPage = Loadable({
  loader: () => import('../components/ClusterDetail'),
  loading: Spin,
});

const ClusterAddPage = Loadable({
  loader: () => import('../components/ClusterAdd'),
  loading: Spin,
});

export default {
  path: 'clusters',
  name: 'Cluster Management',
  component: ClusterListPage,
  childRoutes: [
    {
      path: 'add',
      name: 'Cluster Add',
      component: ClusterAddPage,
    },
    {
      path: ':name',
      name: 'Cluster Detail',
      component: ClusterDetailPage,
    },
  ],
};
