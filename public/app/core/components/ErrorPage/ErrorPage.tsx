import React, { PureComponent } from 'react';
import { connect, MapStateToProps } from 'react-redux';
import { NavModel } from '@grafana/data';
import { config } from '@grafana/runtime';
// import { Icon } from '@grafana/ui';
import Page from '../Page/Page';
import { getNavModel } from 'app/core/selectors/navModel';
import { StoreState } from 'app/types';

interface ConnectedProps {
  navModel: NavModel;
}

interface OwnProps {}

type Props = ConnectedProps;

export class ErrorPage extends PureComponent<Props> {
  componentDidMount(){
    const script = document.createElement("script");
    script.src = "https://kit.fontawesome.com/4b9ba14b0f.js";
    script.async = true;
    document.body.appendChild(script);
  }
  render() {
    const { navModel } = this.props;
    return (
      <Page navModel={navModel}>
        <Page.Contents>
          <div className="mainbox">
            <div className="err">4</div>
            <i className="far fa-question-circle fa-spin"></i>
            <div className="err2">4</div>
            <div className="msg">Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the
              first place?<p>Let's go <a href={config.appSubUrl}>home</a> and try from there.</p>
            </div>
          </div>
        </Page.Contents>
      </Page>
    );
  }
}

const mapStateToProps: MapStateToProps<ConnectedProps, OwnProps, StoreState> = state => {
  return {
    navModel: getNavModel(state.navIndex, 'not-found'),
  };
};

export default connect(mapStateToProps)(ErrorPage);
