
import { useSelector } from "react-redux";
import { Table, Typography} from 'antd';
import moment from "moment";
import PGProject from "./PGProject";
import Fundedprojects from "./Fundedprojects";
import Mentored from "./Mentored";
import portfolioData from "../../portfolioData.json"

const { Title, Text } = Typography;
const handleDownloadImage = (url) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = url.split('/').pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

function UGProject() {
    const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);


    // Safely access awards with optional chaining and provide a default empty array
    const ugprojects = portfolioData?.ugprojects || [];
    
    // Define table columns
    const columns = [
        
        
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
            align: 'center',
            fixed: 'left',
        },
        {
            title: 'Student Group',
            dataIndex: 'group',
            key: 'group',
            align: 'center',
        },
        {
            title: 'Abstract',
            dataIndex: 'abstract',
            key: 'abstract',
            align: 'center',
        },
        {
            title: 'Video Link',
            dataIndex: 'link',
            key: 'link',
            align: 'center',
            render: (text, record) => (
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded"
                    onClick={() => window.open(record.link, '_blank')}
                    style={{ width: 50 }}
                >
                    View
                </button>
            ),
        },
        {
            title: 'Photo',
            dataIndex: 'photo',
            key: 'photo',
            align: 'center',
            render: (text, record) => (
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded" onClick={() => handleDownloadImage(record.photo)} style={{ width: 50 }}>
                    View
                </button>
            ),
        },
        {
            title: 'Report',
            dataIndex: 'reportlink',
            key: 'reportlink',
            align: 'center',
            render: (text, record) => (
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded" onClick={() => handleDownloadImage(record.reportlink)} style={{ width: 50 }}>
                    View
                </button>
            ),
        },
        
        
        
    ];

    return (
        <>
            <div className="m-10">
            <h1 className="flex justify-center items-center text-4xl text-primary py-5 font-semibold">Undergraduate Projects</h1>
            <Table
                
                dataSource={ugprojects}
                columns={columns}
                size="md"
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
        <PGProject/>
        <Fundedprojects />
        <Mentored />
        </>

        
    );
}

export default UGProject;