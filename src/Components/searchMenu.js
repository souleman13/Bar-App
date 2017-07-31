/**
 * Created by Douglas on 7/28/2017.
 */
import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import Checkbox from 'material-ui/Checkbox'
import Slider from 'material-ui/Slider'
import { gql, graphql } from 'react-apollo';


class searchMenu extends Component {

    state = {
        slider: 10,
        valueKind:1,
        valueMusic:1,
    };

    handleSlider = (event, value) => {
        this.setState({slider: value});
    };

    handleChangeKind = (event, index, value) => this.setState({valueKind:value});

    handleChangeMusic = (event, index, value) => this.setState({valueMusic:value});

    render(){

        return(
            <div>
                <h1>Search Menu</h1>
                <form action="">
                    <fieldset>
                        <input type="text" placeholder="ZIP, address or name"/>
                    </fieldset>
                    <fieldset >
                        <SelectField
                            floatingLabelText="kind"
                            value={this.state.valueKind}
                            onChange={this.handleChangeKind}
                            autoWidth={true}
                        >
                            <MenuItem value={1} primaryText="Bar" />
                            <MenuItem value={2} primaryText="Restaurant" />
                            <MenuItem value={3} primaryText="Club" />
                            <MenuItem value={4} primaryText="Concert Hall" />
                            <MenuItem value={5} primaryText="Other" />
                            <MenuItem value={6} primaryText="All" />
                        </SelectField>
                    </fieldset>

                    <fieldset>
                        <SelectField
                            floatingLabelText="Music"
                            value={this.state.valueMusic}
                            onChange={this.handleChangeMusic}
                            autoWidth={true}
                        >
                            <MenuItem value={1} primaryText="Live Band" />
                            <MenuItem value={2} primaryText="Bar" />
                            <MenuItem value={3} primaryText="Any" />
                        </SelectField>
                    </fieldset>

                    <fieldset>
                        <Checkbox label="Open Now"/>

                        <Checkbox label="Sports"/>

                        <Checkbox label="eSports"/>

                        <Checkbox label="Not Bar"/>
                    </fieldset>


                    <fieldset>
                        <Slider
                            min={0}
                            max={50}
                            step={1}
                            value={this.state.slider}
                            onChange={this.handleSlider}
                        />
                        <h3>Distance: {this.state.slider}</h3>
                    </fieldset>
                    <fieldset>
                        <button type="submit">Submit</button>
                        <button type="reset">Reset</button>
                    </fieldset>

                </form>

            </div>
        );
    }
}
export default graphql(gql`
  
  
  
`)(searchMenu);