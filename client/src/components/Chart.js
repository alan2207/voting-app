import React from 'react';
import {Chart} from 'react-google-charts';


// just the chart for polls
class PollChart extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div id="chart" className="col s8">
                <Chart
                    chartTitle="DonutChart"
                    chartType="PieChart"
                    data={[["Option", "Value"], ...this.props.data]}
                    options={{title:this.props.title, pieHole: 0.4}}
                    width="100%"
                    height="360px"
                    legend_toggle
                    />
            </div>
        

        )
    }
}


export default PollChart;