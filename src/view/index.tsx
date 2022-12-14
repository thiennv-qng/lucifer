import { useAppRoute } from '@sentre/senhub'
import { createGlobalState } from 'react-use'
import { Redirect, Route, Switch } from 'react-router-dom'

import { Affix, Col, Row } from 'antd'
import Header from './header'
import Container from './container'
import Home from './home'

import PoolWatcher from './watcher/pool.watcher'

import configs from 'configs'
import './index.less'

const {
  manifest: { appId },
} = configs

export const usePoolAddressSelected = createGlobalState<string>()

const View = () => {
  const { root, extend } = useAppRoute(appId)

  return (
    <Row gutter={[24, 24]}>
      <Col span={24}>
        <Affix style={{ margin: -12 }}>
          <Header />
        </Affix>
      </Col>
      <Col span={24}>
        <Switch>
          <Route exact path={root} component={Home} />
          <Route exact path={extend('/pools')} component={Container} />
          <Redirect from="*" to={root} />
        </Switch>
      </Col>
      <PoolWatcher />
    </Row>
  )
}

export default View
