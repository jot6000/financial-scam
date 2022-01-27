import {XYPlot, LineSeries, YAxis, XAxis} from 'react-vis';
import '../../../node_modules/react-vis/dist/style.css';
export default function Graph(props){
    return(
        <>
            <h3>{props.graph.name}</h3>
            <XYPlot height={props.height} width={props.width}>
            <LineSeries data={props.graph.dataPoints} />
            <XAxis title={props.graph.xAxisName}/>
            <YAxis title={props.graph.yAxisName}/>
            </XYPlot>
            <h3>{props.subtitle}</h3>
        </>
    )
}