
import { useSelector } from "react-redux";
import { Table, Typography } from 'antd';
import moment from "moment";
import Journals from "./Journals";
import Patents from "./Patents";
import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";
import portfolioData from "../../portfolioData.json"

const { Title, Text } = Typography;

function Conference() {



    // Safely access awards with optional chaining and provide a default empty array
    const conferences = portfolioData?.conferences || [];

    console.log(portfolioData);

    // Define table columns
    const columns = [

        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
            responsive: ['md'],
            align: 'center',
            fixed: 'left',
            render: (text) => moment(text).format('DD/MM/YYYY')
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
            fixed: 'left',
            align: 'center',
            width: 10
        },
        {
            title: 'Conference',
            dataIndex: 'conference',
            key: 'conference',
            align: 'center',

        },
        {
            title: 'Author List',
            dataIndex: 'authors',
            key: 'authors',
            align: 'center',
            width: 10
        },
        {
            title: 'Hosting Venue',
            dataIndex: 'venue',
            key: 'venue',
            align: 'center',
            width: 7
        },
        {
            title: 'DOI',
            dataIndex: 'DOI',
            key: 'DOI',
            align: 'center',
            width: 8

        },
        {
            title: 'Remark',
            dataIndex: 'remark',
            key: 'remark',
            align: 'center',
        },



    ];

    return (
        <>
        <div className="m-10">
            <h1 className="flex justify-center items-center text-4xl text-primary py-5 font-semibold">Conference Papers</h1>
            <Table

                dataSource={conferences}
                columns={columns}
                rowKey="_id"
                size="small"
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
        <Journals/>
        <Patents />
        </>

    );
}

export default Conference;