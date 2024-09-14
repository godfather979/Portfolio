
import { useSelector } from "react-redux";
import { Space, Table, Typography } from 'antd';
import moment from "moment";
import "../../index.css"
import portfolioData from "../../portfolioData.json"


const {Title, Text} = Typography;

function Talks() {


    // Safely access awards with optional chaining and provide a default empty array
    const talks = portfolioData?.talks || [];

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
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
            align: 'center',
            fixed: 'left',
            width: 10
        },
        {
            title: 'Type of audience',
            dataIndex: 'type_of_audience',
            key: 'type_of_audience',
            align: 'center',
        },
        {
            title: 'Number of audience',
            dataIndex: 'number',
            key: 'number',
            align: 'center',
        },
        {
            title: 'Name of organisation',
            dataIndex: 'org_name',
            key: 'org_name',
            align: 'center',
        },
        {
            title: 'Remarks',
            dataIndex: 'remark',
            key: 'remark',
            align: 'center',
            // responsive: ['md'],
        },
        

    ];



    return (
        <div>
          
        <div className="m-10">
            <h1 className="flex justify-center items-center text-4xl text-primary font-semibold mb-7">Talks</h1>
        <Table
            dataSource={talks}
            columns={columns}
            size="small"
            rowKey="_id"
            pagination={false}
            className=""
            bordered
            scroll={{
                    x: 'max-content', // Enable horizontal scroll
                    // Enable vertical scroll with a height limit
                }}

        />
         <style jsx>{`
                .ant-table-thead > tr > th {
                    background-color: #0A192F !important; /* Use primary color */
                    color: white !important;
                }
            `}</style>
    </div>

    </div>
    );
}

export default Talks;