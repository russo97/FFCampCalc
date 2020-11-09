
const User = {
  template: '<div>User 1</div>'
}

const User2 = {
  template: '<div>User 2</div>'
}

import LineList from './components/LinesList';

const routes = [
  { path: '/', component: LineList },
  { path: '/app', component: User },
  { path: '/app2', component: User2 }
]

export default routes;