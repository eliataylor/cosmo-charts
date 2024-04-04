import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


export const ENDPOINTS = [
    {
        path: '/graphql/DashboardLastStixDomainObjectsQuery.json',
        title: 'DashboardLastStixDomainObjectsQuery'
    },
    {
        path: '/graphql/DashboardStixCyberObservablesDistributionQuery.json',
        title: 'DashboardStixCyberObservablesDistributionQuery'
    },
    {
        path: '/graphql/DashboardStixDomainObjectsTimeSeriesQuery.json',
        title: 'DashboardStixDomainObjectsTimeSeriesQuery'
    },
    {
        path: '/graphql/DashboardStixMetaRelationshipsDistributionQuery.json',
        title: 'DashboardStixMetaRelationshipsDistributionQuery'
    },
    {
        path: '/graphql/EntityStixCoreRelationshipsDonutStixCoreRelationshipDistributionQuery.json',
        title: 'EntityStixCoreRelationshipsDonutStixCoreRelationshipDistributionQuery'
    },
    {
        path: '/graphql/EntityStixCoreRelationshipsTimelineStixCoreRelationshipQuery.json',
        title: 'EntityStixCoreRelationshipsTimelineStixCoreRelationshipQuery'
    },
    {
        path: '/graphql/GlobalVictimologyMapStixCoreRelationshipsDistributionQuery.json',
        title: 'GlobalVictimologyMapStixCoreRelationshipsDistributionQuery'
    },
    {
        path: '/graphql/StixCoreRelationshipsDonutDistributionQuery.json',
        title: 'StixCoreRelationshipsDonutDistributionQuery'
    },
    {
        path: '/graphql/StixCoreRelationshipsHorizontalBarsDistributionQuery.json',
        title: 'StixCoreRelationshipsHorizontalBarsDistributionQuery'
    },
    {
        path: '/graphql/StixDomainObjectsListQuery-Report.json',
        title: 'StixDomainObjectsListQuery-Report'
    }
]

root.render(
  <React.StrictMode>
    <App endpoints={ENDPOINTS} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
