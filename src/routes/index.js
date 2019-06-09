import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import HeroesListContainer from '@components/HeroesListContainer';

// export let childRoutes = [
//   {
//     path: '/heroes',
//     component: HeroesList,
//     exactly: true
//   },
// // desk
// {
//   path: '/panel/desk',
//   component: Desk,
//   exactly: true
// },
// {
//   // TODO: REMOVE IT LATER
//   path: '/panel/desk/results',
//   component: Results,
//   exactly: true
// },
// // FIXME: use the storage later - for handling the same component in different routes
// {
//   path: '/panel/desk/results/:level(quest|battle)/:id',
//   component: Results,
//   exactly: true
// },
// // FIXME: use the storage later - for handling the same component in different routes
// {
//   path: '/panel/desk/results/:level(location)/:locationId/:battleId',
//   component: Results,
//   exactly: true
// },
// {
//   path: '/panel/desk/:level(quests)',
//   component: DeskList,
//   exactly: false
// },
// {
//   path: '/panel/desk/:level(battles|locations)/:id',
//   component: DeskList,
//   exactly: false
// },
// // audit
// {
//   path: '/panel/audit',
//   component: Audit,
//   exactly: true
// },
// {
//   path: '/panel/audit/list',
//   component: AuditList,
//   exactly: true
// },
// {
//   path: '/panel/audit/detail',
//   component: AuditDetail,
//   exactly: true
// },
// {
//   path: '/panel/missionAssign',
//   component: MissionAssign,
//   exactly: true
// },
// {
//   path: '/panel/sendReports',
//   component: SendReports,
//   exactly: true
// },
// // wizard routes
// {
//   path: '/panel/quest/create',
//   component: QuestCreate,
//   exactly: true
// },
// {
//   path: '/panel/expenses',
//   component: ExpenseList,
//   exactly: true
//
// },
// {
//   path: '/panel/elements/:element(locations|users|roles|companies)',
//   component: ElementsAbm,
//   exactly: true
// },
// ];

// childRoutes = [...childRoutes, ...wizardStepRoutes];

const routes = (
  <Switch>
    <Route path="/heroes/:id?" component={HeroesListContainer} />
    <Route path="/heroesss" component={HeroesListContainer} />
    <Redirect from="/" to="/heroes" />
  </Switch>
);

export default routes;
