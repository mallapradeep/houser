import { Switch, Route } from 'react-router-dom';
import Dashboard from './component/Dashboard/Dashboard';
import Wizard from './component/Wizard/Wizard';
import React from 'react';
import WizardOne from '../components/WizardOne/WizardOne';
import WizardTwo from '../components/WizardTwo/WizardTwo';
import WizardThree from '../components/WizardThree/WizardThree';


export default (
    <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route  path="/wizard" component={Wizard} />
        <Route  path="/wizardone" component={WizardOne} />
        <Route  path="/wizardtwo" component={WizardTwo} />
        <Route  path="/wizardThree" component={WizardThree} />


        </Switch>
);