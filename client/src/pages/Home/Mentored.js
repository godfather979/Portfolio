
import { useSelector } from "react-redux";
import { Table, Typography } from 'antd';
import moment from "moment";
import "../../index.css"
import './Styles.css';
import portfolioData from "../../portfolioData.json"

const {Title, Text} = Typography;

function Mentored() {



    // Safely access awards with optional chaining and provide a default empty array
    const mentored = portfolioData?.mentored || [];

    console.log(portfolioData);

    

    // Define table columns
    const columns = [
        // {
        //     title: 'Date',
        //     dataIndex: 'date',
        //     key: 'date',
        //     responsive: ['md'],
        //     align: 'center',
        //     fixed: 'left',
        //     render: (text) => moment(text).format('YYYY')
            
        // },
        {
            title: 'Year',
            dataIndex: 'year',
            key: 'year',
            align: 'center',
            fixed: 'left',
            width: 90,
            responsive: ['md'],
            
            
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
            align: 'center',
            fixed: 'left',
            width: 140,
          
        },
        {
            title: 'Organisation',
            dataIndex: 'organisation',
            key: 'organisation',
            align: 'center',
            width:300,
           
        },
       
        {
            title: 'Grant Received (Rs)',
            dataIndex: 'grantreceived',
            key: 'grantreceived',
            align: 'center',
            width:125,
            
        },
       
        {
            title: 'Remarks',
            dataIndex: 'remarks',
            key: 'remarks',
            align: 'center',
            // responsive: ['md'],
        },
        

    ];

    

    return (
        <div>
          
        <div className="m-10">
            <div className="">
            <h1 className=" select-none flex hover:animate-pulse duration-150 py-4 mx-56 justify-center items-center rounded-xl bg-gradient-to-r
             from-blue-300 via-blue-100 to-blue-300 shadow-xl shadow-gray-600 text-4xl font-semibold">Mentored  Sponserd  Projects</h1>
            </div>
        <Table
            dataSource={mentored}
            columns={columns}
            size="small"
            rowKey="_id"
            pagination={false}
            // class ="ant-table-tbody"
            className="animated-table"
            bordered
            scroll={{
                    x:  'max-content', // Enable horizontal scroll
                    // Enable vertical scroll with a height limit
                }}

        />
         <style jsx>{`
            .ant-table-thead > tr > th {
                font-family: 'Segoe UI', sans-serif;
                font-weight: regular;
                font-size: 16px;
                border-radius: 6px 6px 0 0; /* Rounded Top Corners */
                
                border: 3px solid #D1D5DB; /* Light Grey */
                background-color:#0D47A1  !important; /* Use primary color */
                color: white !important;
                

                }
            .ant-table-tbody > tr > td {
                background-color:#ADD8E6; 

              }
             

            `}</style>
    </div>
</div>
    );
}

export default Mentored;

