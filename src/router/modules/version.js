/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const versionRouter = {
  path: '/version',
  component: Layout,
  redirect: '/version/complex-table',
  name: 'Version',
  meta: {
    title: 'TCL Versions',
    icon: 'table'
  },
  children: [
    {
      path: 'detail-table',
      component: () => import('@/views/version/detail-table'),
      name: 'DetailTable',
      meta: { title: 'Detail Table' }
    },
    {
      path: 'analysis-table',
      component: () => import('@/views/version/analysis-table'),
      name: 'AnalysisTable',
      meta: { title: 'Analysis Table' }
    },
    {
      path: 'project-table',
      component: () => import('@/views/version/project-table'),
      name: 'ProjectTable',
      meta: { title: 'Project Table' }
    }
  ]
}
export default versionRouter
