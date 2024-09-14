
import { useSelector } from "react-redux";
import { Space, Table, Tag, Typography } from 'antd';
import portfolioData from "../../portfolioData.json"

const { Title, Text } = Typography;

function Journals() {


    // Safely access awards with optional chaining and provide a default empty array
    const {journals} = portfolioData

    console.log(portfolioData);

    // Define table columns
    const columns = [
        {
            title: 'Title',
            dataIndex: 'Title',
            key: 'Title',
            align: 'center',
            fixed: 'left',
            width: 10
        },
        {
            title: 'Title of journal papers',
            dataIndex: 'Title_of_journal_ppr',
            key: 'Title_of_journal_ppr',
            align: 'center',
            width: 200
        },
        {
            title: 'List of Authors',
            dataIndex: 'Author_list',
            key: 'Author_list',
            align: 'center',
            width: 200
        },
        {
            title: 'ISSN/DOI',
            dataIndex: 'ISSN_DOI',
            key: 'ISSN_DOI',
            align: 'center',
            width: 150
        },
        {
            title: 'Remark',
            dataIndex: 'Remark',
            key: 'Remark',
            align: 'center',
            width: 200
        }
    ];

    return (
        <div className="m-10">
            <h1 className="flex justify-center items-center text-4xl text-primary py-5 font-semibold">Journals Published</h1>
            <Table 
                dataSource={journals} 
                columns={columns} 
                rowKey="_id" 
                pagination={false}
                className="border border-gray-200"
                bordered
                scroll={{
                    x: 'max-content', // Enable horizontal scroll
                }}
            />
            <style jsx>{`
                .ant-table-thead > tr > th {
                    background-color: #0A192F !important; /* Use primary color */
                    color: white !important;
                }
            `}</style>
        </div>
    );
}

export default Journals;
