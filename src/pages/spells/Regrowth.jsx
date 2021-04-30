import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm, propTypes, getFormValues } from 'redux-form';
import HealingContainer from './HealingContainer';
import * as talents from './talents';
import * as spells from './spells';
import '../style.css';

class regrowth extends Component {

  componentWillMount() {
    this.props.initialize({
      healing: 1500,
      crit: 15,
      spirit: 400,
      improvedRegrowth: true,
      empoweredRejuvenation: true,
      giftOfNature: true,
    });
  }

  render() {
    return (
      <HealingContainer
        spell={ spells.regrowth }
        talents={ [
          talents.improvedRegrowth,
          talents.empoweredRejuvenation,
          talents.giftOfNature,
          talents.moonglow,
          talents.naturesGrace,
          talents.amplifyMagic,
          talents.t3Druid4set,
          // talents.treeOfLifeAura,
          talents.treeOfLifeForm,
          talents.naturalPerfection,
          talents.t2Druid5set,
        ] }
        formValues={ this.props.formValues }
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    formValues: getFormValues('regrowth')(state),
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
  }, dispatch),
});

regrowth.propTypes = propTypes;

export default reduxForm({ form: 'regrowth' })(connect(mapStateToProps, mapDispatchToProps)(regrowth));
