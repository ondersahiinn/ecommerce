import { useMemo, useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/reducers';
import { changeContent } from '@redux/slices/categories';
import { Button, Input, message, notification, Progress } from 'antd';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import { storage } from '@utils/firebase';
import FileManager from '@components/fileManager';

const RinchTextEditor = ({ type }: any) => {
    const [isText, setIsText] = useState(false);
    const [api, contextHolder] = notification.useNotification();
    const [fileMangerShow, setFileManagerShow] = useState<boolean>(false);

    const dispatch = useDispatch()
    const content = useSelector((state: RootState) => state.categories.content)
    const quillRef: any = useRef(); // the solution

    const openNotification = (percent: number) => {
        api.open({
            message: 'Image Yükleniyor',
            description: <Progress percent={percent} size="small" />,
            duration: 0,
        });
    };

    const imageHandler = () => {
        setFileManagerShow(true);
        // const editor = quillRef.current.getEditor();
        // editor.insertEmbed(editor.getSelection(), "image", 'tas');

    };

    const modules = useMemo(() => ({
        toolbar: {
            container: [
                ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'],
                [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                [{ color: [] }, { background: [] }],
                [{ 'script': 'sub' }, { 'script': 'super' }],
                [
                    { list: "ordered" },
                    { list: "bullet" },
                    { indent: "-1" },
                    { indent: "+1" },
                ],
                ['link', 'image'],
                ["clean"],
            ],
            handlers: {
                image: imageHandler,
            }
        }

    }), [])

    return (
        <>
            {contextHolder}
            <Button className='float-right z-50' type='dashed' onClick={() => setIsText(true)}> Metin(HTML)</Button>
            <Button className='float-right z-50' type='dashed' onClick={() => setIsText(false)}> Editor</Button>
            {!isText ?
                <ReactQuill modules={modules}
                    value={content}
                    onChange={(content, delta, source, editor) => {
                        console.log('content, delta, source, editor', content, delta, source, editor)
                        dispatch(changeContent(content))
                    }}
                    ref={quillRef}
                    theme="snow" className='text-black mt-5' defaultValue=''
                />
                : <Input.TextArea className='mt-5' rows={10} value={content} onChange={(e) => dispatch(changeContent(e.target.value))} />}
            <FileManager open={fileMangerShow} setOpen={setFileManagerShow} />
        </>

    );

}

export default RinchTextEditor