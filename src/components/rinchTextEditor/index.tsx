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

const RinchTextEditor = ({ type }: any) => {
    const [isText, setIsText] = useState(false);
    const [api, contextHolder] = notification.useNotification();

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
        debugger
        const editor = quillRef.current.getEditor();
        const input: any = document.createElement("input");
        input.setAttribute("type", "file");
        input.setAttribute("accept", "image/*");
        input.click();
        input.onchange = async () => {
            const file = input.files[0];
            const uniqueImageName = file.name.split('.')[0] + uuidv4().slice(0, 10)
            const imageRef = ref(storage, `${type}/${uniqueImageName}`);
            const uploadImage = uploadBytesResumable(imageRef, file as Blob);

            uploadImage.on(
                'state_changed',
                (snapshot) => {
                    const progressPercent = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    );
                    openNotification(progressPercent)
                },
                (err) => {
                    message.error('Resim yüklenemedi')
                }, async () => {
                    await getDownloadURL(uploadImage.snapshot.ref)
                        .then((url) => {
                            try {
                                editor.insertEmbed(editor.getSelection(), "image", url);
                            } catch (err) {
                                message.error('Resim yüklenemedi')
                            }
                        })
                        .catch((err) => {
                            message.error('Resim yüklenemedi')
                        });
                });

        };
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
        </>);

}

export default RinchTextEditor