import CategoryTable from "@components/panel/categories/table";
import CategoriesForm from "@components/panel/Forms/categoriesForm";
import PanelHeader from "@components/panel/panelHeader";
import { adminCheckAuth } from "@utils/session";
import { Button } from "antd";
import dynamic from "next/dynamic";
import { useState } from "react";

import { InboxOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { message, Upload } from 'antd';
import SeoVisualization from "@components/panel/seoVisualization";

const { Dragger } = Upload;

const CategoryAdd: React.FC = () => {
    const [value, setValue] = useState('')

    var RinchTextEditor = dynamic(() => import("@components/rinchTextEditor"), {
        ssr: false, loading: () => <p>Loading ...</p>
    })
    const props: UploadProps = {
        name: 'file',
        multiple: true,
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        onChange(info) {
            debugger
            const { status } = info.file;
            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
    };
    return (
        <>
            <PanelHeader title="Kategori Ekle" >
                <Button>Kaydet</Button>
            </PanelHeader>
            <div className="bg-white p-5">

                <CategoriesForm />
                <span className="pb-2">Açıklama</span>
                <RinchTextEditor type='categories' value={value} setValue={setValue} />
                <div className="mt-10">
                    <Dragger {...props}>
                        <p className="ant-upload-drag-icon">
                            <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">Tıkla yada sürükle bırak</p>
                        <p className="ant-upload-hint">
                            Buraya tıklayarak resim seçebilir yada sürükleyip bırakabilirsiniz
                        </p>
                    </Dragger>
                </div>
            </div>
            <div className="bg-white p-5 mt-10">
                <SeoVisualization />
            </div>
        </>
    )
}
CategoryAdd.displayName = "PanelPage"
export default CategoryAdd;
export const getServerSideProps = adminCheckAuth({});