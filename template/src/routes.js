import WelcomeComponent from 'components/Welcome'
import HelloComponent from 'components/Hello'

export default [
  {
    path: '/',
    component: WelcomeComponent
  },
  {
    path: '/hello/:name',
    component: HelloComponent
  }
]
