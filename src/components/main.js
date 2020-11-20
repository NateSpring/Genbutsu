import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FacStatus from './facstatus';
import Sales from './dept-pages/Sales';
import Nesting from './dept-pages/Nesting';
import Laser from './dept-pages/Laser';
import PressBrake from './dept-pages/PressBrake';
import MachineShop from './dept-pages/MachineShop';
import TubeFab from './dept-pages/TubeFab';
import Welding from './dept-pages/Welding';
import PowderCoat from './dept-pages/PowderCoat';
import FinalAssembly from './dept-pages/FinalAssembly';
import Shipping from './dept-pages/Shipping';


const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={FacStatus} />
            <Route path='/sales' component={Sales} />
            <Route path='/nesting' component={Nesting} />
            <Route exact path='/laser' component={Laser} />
            <Route exact path='/pressbrake' component={PressBrake} />
            <Route exact path='/machineshop' component={MachineShop} />
            <Route exact path='/tubefab' component={TubeFab} />
            <Route exact path='/welding' component={Welding} />
            <Route exact path='/powdercoat' component={PowderCoat} />
            <Route exact path='/finalassembly' component={FinalAssembly} />
            <Route exact path='/shipping' component={Shipping} />
        </Switch>
    </main>
)
export default Main;