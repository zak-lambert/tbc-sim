import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm, propTypes, getFormValues } from 'redux-form';
import HealingContainer from './HealingContainer';
import * as talents from './talents';
import * as spells from './spells';
import '../style.css';

class lifebloom extends Component {

  componentWillMount() {
    this.props.initialize({
      healing: 1500,
      crit: 10,
      int: 500,
      spirit: 500,
      improvedRejuvenation: true,
      tranquilSpirit: true,
      giftOfNature: true,
      empoweredRejuvenation: true,
      treeOfLifeForm: true,
      treeOfLifeAura: true,
    });
  }

  render() {
    return (
      <HealingContainer
        spell={ spells.lifebloom }
        talents={ [
          talents.improvedRejuvenation,
          talents.giftOfNature,
          talents.treeOfLifeForm,
          talents.treeOfLifeAura,
          talents.moonglow,
          talents.amplifyMagic,
          talents.t2Druid8set,
          talents.t3Druid4set,
          talents.idolOfTheEmeraldQueen,
          talents.empoweredRejuvenation,
        ] }
        formValues={ this.props.formValues }
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    formValues: getFormValues('lifebloom')(state),
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
  }, dispatch),
});

lifebloom.propTypes = propTypes;

export default reduxForm({ form: 'lifebloom' })(connect(mapStateToProps, mapDispatchToProps)(lifebloom));
