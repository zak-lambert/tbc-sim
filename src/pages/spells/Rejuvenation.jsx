import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm, propTypes, getFormValues } from 'redux-form';
import HealingContainer from './HealingContainer';
import * as talents from './talents';
import * as spells from './spells';
import '../style.css';

class rejuvenation extends Component {

  componentWillMount() {
    this.props.initialize({
      healing: 1117,
      crit: 10,
      spirit: 284,
      improvedRejuvenation: true,
      empoweredRejuvenation: true,
      tranquilSpirit: true,
      giftOfNature: true,
      treeOfLifeForm: true,
      treeOfLifeAura: true,
    });
  }

  render() {
    return (
      <HealingContainer
        spell={ spells.rejuvenation }
        talents={ [
          talents.improvedRejuvenation,
          talents.giftOfNature,
          talents.moonglow,
          talents.amplifyMagic,
          talents.t2Druid8set,
          talents.t3Druid4set,
          talents.empoweredRejuvenation,
          talents.treeOfLifeForm,
          talents.treeOfLifeAura,
        ] }
        formValues={ this.props.formValues }
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    formValues: getFormValues('rejuvenation')(state),
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
  }, dispatch),
});

rejuvenation.propTypes = propTypes;

export default reduxForm({ form: 'rejuvenation' })(connect(mapStateToProps, mapDispatchToProps)(rejuvenation));
