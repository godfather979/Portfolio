
import { useSelector } from "react-redux";
import { Table, Typography} from 'antd';
import moment from "moment";
import Talks from "./Talks"
import Flagship from "./Flagship";
import Events from "./Events";
import Workshops from "./Workshops";
import FDP from "./FDP";
import portfolioData from "../../portfolioData.json"

const { Title, Text } = Typography;

function ORActivities() {



    // Safely access awards with optional chaining and provide a default empty array
    const oractivities = portfolioData?.oractivities || [];

    console.log(portfolioData);
    
    // Define table columns
    const columns = [
        
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
            align: 'center',
            responsive: ['md'],
            fixed: 'left',
            render: (text) => moment(text).format('DD/MM/YYYY')
        },
        {
            title: 'Name of Organisation',
            dataIndex: 'organisation',
            key: 'organisation',
            align: 'center',
            fixed: 'left',
        },
        {
            title: 'OutReach Activity Type',
            dataIndex: 'type',
            key: 'type',
            align: 'center',
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
            align: 'center',
            width: 10
        },
        {
            title: 'Responsibilities Handled',
            dataIndex: 'responsibilities',
            key: 'responsibilities',
            align: 'center',
        },
    
        {
            title: 'Remarks',
            dataIndex: 'remarks',
            key: 'remarks',
            align: 'center',
            responsive: ['md'],
        },
        
        
        
    ];

    return (
        <>
            <div className="m-10">
            <h1 className="flex justify-center items-center text-4xl text-primary py-5 font-semibold">Outreach Activities</h1>
            <Table
                
                dataSource={oractivities}
                columns={columns}
                size="small"
                rowKey="_id"
                pagination={false}
                className=""
                bordered

            />
            <style jsx>{`
                .ant-table-thead > tr > th {
                    background-color: #0A192F !important; /* Use primary color */
                    color: white !important;
                }
            `}</style>
            
        </div>
        <Talks/>
        {/* <Flagship />
        <Events /> */}
        <FDP />
        <Workshops />
        </>
        
    );
}

export default ORActivities;